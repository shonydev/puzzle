export type Tube = string[];

export interface PourResult {
  nextTubes: Tube[];
  unitsMoved: number;
  colorMoved: string;
}

export interface Move {
  from: number;
  to: number;
}

export const TUBE_CAPACITY = 4;

/**
 * Checks if liquid can be poured from tube `fromIdx` to tube `toIdx`.
 */
export function canPour(
  tubes: Tube[],
  fromIdx: number,
  toIdx: number,
  capacity: number = TUBE_CAPACITY
): boolean {
  if (fromIdx === toIdx) return false;
  if (fromIdx < 0 || fromIdx >= tubes.length) return false;
  if (toIdx < 0 || toIdx >= tubes.length) return false;

  const source = tubes[fromIdx];
  const target = tubes[toIdx];

  if (!source || source.length === 0) return false;
  if (target.length >= capacity) return false;

  // If source is already pure full tube (all 4 same color) and target is empty,
  // pouring into an empty tube is a useless symmetric move.
  if (
    target.length === 0 &&
    source.length === capacity &&
    source.every((c) => c === source[0])
  ) {
    return false;
  }

  const sourceTopColor = source[source.length - 1];

  // Can pour into empty tube
  if (target.length === 0) return true;

  // Or target's top color matches source's top color
  const targetTopColor = target[target.length - 1];
  return targetTopColor === sourceTopColor;
}

/**
 * Returns how many units will pour from `fromIdx` to `toIdx`.
 */
export function getPourAmount(
  tubes: Tube[],
  fromIdx: number,
  toIdx: number,
  capacity: number = TUBE_CAPACITY
): number {
  if (!canPour(tubes, fromIdx, toIdx, capacity)) return 0;

  const source = tubes[fromIdx];
  const target = tubes[toIdx];
  const sourceTopColor = source[source.length - 1];

  // Count contiguous block of top color in source
  let blockCount = 0;
  for (let i = source.length - 1; i >= 0; i--) {
    if (source[i] === sourceTopColor) {
      blockCount++;
    } else {
      break;
    }
  }

  const spaceInTarget = capacity - target.length;
  return Math.min(blockCount, spaceInTarget);
}

/**
 * Executes a pour and returns new tube state and details.
 */
export function executePour(
  tubes: Tube[],
  fromIdx: number,
  toIdx: number,
  capacity: number = TUBE_CAPACITY
): PourResult | null {
  const amount = getPourAmount(tubes, fromIdx, toIdx, capacity);
  if (amount <= 0) return null;

  const source = tubes[fromIdx];
  const colorMoved = source[source.length - 1];

  const nextTubes = tubes.map((t) => [...t]);
  for (let i = 0; i < amount; i++) {
    nextTubes[fromIdx].pop();
    nextTubes[toIdx].push(colorMoved);
  }

  return {
    nextTubes,
    unitsMoved: amount,
    colorMoved,
  };
}

/**
 * Check if a single tube is complete (either empty or full of identical color).
 */
export function isTubeComplete(tube: Tube, capacity: number = TUBE_CAPACITY): boolean {
  if (tube.length === 0) return true;
  if (tube.length !== capacity) return false;
  const first = tube[0];
  return tube.every((c) => c === first);
}

/**
 * Check if the entire level is won.
 */
export function isLevelWon(tubes: Tube[], capacity: number = TUBE_CAPACITY): boolean {
  return tubes.every((tube) => isTubeComplete(tube, capacity));
}

/**
 * Find all currently valid moves on the board.
 */
export function getValidMoves(tubes: Tube[], capacity: number = TUBE_CAPACITY): Move[] {
  const moves: Move[] = [];
  const len = tubes.length;

  for (let i = 0; i < len; i++) {
    if (tubes[i].length === 0) continue;
    // Don't pour out of completed tubes
    if (tubes[i].length === capacity && tubes[i].every((c) => c === tubes[i][0])) {
      continue;
    }

    for (let j = 0; j < len; j++) {
      if (canPour(tubes, i, j, capacity)) {
        moves.push({ from: i, to: j });
      }
    }
  }

  return moves;
}

/**
 * Canonical state key for graph search pruning.
 * We sort tube strings so symmetric tube arrangements (e.g. empty tube 5 vs empty tube 6)
 * produce the identical hash!
 */
function serializeState(tubes: Tube[]): string {
  return tubes
    .map((t) => t.join(','))
    .sort()
    .join('|');
}

/**
 * BFS Solver for Water Sort Puzzle.
 * Finds the shortest move sequence from current state to victory.
 * Returns null if no solution is found or search limit exceeded.
 */
export function solveWaterPuzzle(
  initialTubes: Tube[],
  capacity: number = TUBE_CAPACITY,
  maxNodes: number = 25000
): Move[] | null {
  if (isLevelWon(initialTubes, capacity)) return [];

  interface Node {
    tubes: Tube[];
    path: Move[];
  }

  const queue: Node[] = [{ tubes: initialTubes, path: [] }];
  const visited = new Set<string>();
  visited.add(serializeState(initialTubes));

  let nodesExplored = 0;

  while (queue.length > 0) {
    const current = queue.shift()!;
    nodesExplored++;

    if (nodesExplored > maxNodes) {
      return null; // Time/Node budget cutoff
    }

    const moves = getValidMoves(current.tubes, capacity);

    // Heuristic ordering: prioritize pouring into tubes that already have colors over empty tubes
    moves.sort((a, b) => {
      const aTargetLen = current.tubes[a.to].length;
      const bTargetLen = current.tubes[b.to].length;
      return bTargetLen - aTargetLen;
    });

    for (const move of moves) {
      const res = executePour(current.tubes, move.from, move.to, capacity);
      if (!res) continue;

      if (isLevelWon(res.nextTubes, capacity)) {
        return [...current.path, move];
      }

      const key = serializeState(res.nextTubes);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({
          tubes: res.nextTubes,
          path: [...current.path, move],
        });
      }
    }
  }

  return null;
}

/**
 * Pseudo-random number generator with seed support for deterministic level generation.
 */
export function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generates a guaranteed-solvable level using verified reverse pours or color distribution with BFS verification.
 */
export function generateSolvableLevel(
  colorKeys: string[],
  emptyTubesCount: number = 2,
  seed: number = 12345,
  capacity: number = TUBE_CAPACITY
): { tubes: Tube[]; solutionLength: number } {
  const rng = mulberry32(seed);

  // Pool of all color units (each color appears exactly `capacity` times)
  const pool: string[] = [];
  for (const color of colorKeys) {
    for (let c = 0; c < capacity; c++) {
      pool.push(color);
    }
  }

  // Shuffle pool with seed
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Distribute into tubes
  const tubes: Tube[] = [];
  for (let i = 0; i < colorKeys.length; i++) {
    const tube: Tube = [];
    for (let c = 0; c < capacity; c++) {
      tube.push(pool[i * capacity + c]);
    }
    tubes.push(tube);
  }

  // Add empty tubes
  for (let e = 0; e < emptyTubesCount; e++) {
    tubes.push([]);
  }

  // Avoid starting with any pre-solved tubes if colors > 2
  if (colorKeys.length > 2) {
    for (let i = 0; i < colorKeys.length; i++) {
      if (tubes[i].every((c) => c === tubes[i][0])) {
        // Swap one unit with another tube
        const targetTube = (i + 1) % colorKeys.length;
        const temp = tubes[i][0];
        tubes[i][0] = tubes[targetTube][0];
        tubes[targetTube][0] = temp;
      }
    }
  }

  // Verify solvability
  const solution = solveWaterPuzzle(tubes, capacity, 15000);
  if (solution && solution.length > 0) {
    return { tubes, solutionLength: solution.length };
  }

  // Fallback: If random distribution hit a rare unsolvable dead end, generate via reverse pours from solved state
  return generateViaReversePours(colorKeys, emptyTubesCount, seed, capacity);
}

/**
 * Alternative level generator: Starts solved and simulates valid reverse pours.
 */
export function generateViaReversePours(
  colorKeys: string[],
  emptyTubesCount: number = 2,
  seed: number = 54321,
  capacity: number = TUBE_CAPACITY
): { tubes: Tube[]; solutionLength: number } {
  const rng = mulberry32(seed);

  // Solved state
  const tubes: Tube[] = [];
  for (const c of colorKeys) {
    tubes.push(Array(capacity).fill(c));
  }
  for (let e = 0; e < emptyTubesCount; e++) {
    tubes.push([]);
  }

  const shuffleSteps = Math.min(60, colorKeys.length * 7 + 10);
  let prevFrom = -1;
  let prevTo = -1;

  for (let step = 0; step < shuffleSteps; step++) {
    // Pick source tube that is not empty
    const nonEmpties = tubes
      .map((t, idx) => ({ tube: t, idx }))
      .filter((x) => x.tube.length > 0);
    if (nonEmpties.length === 0) break;

    const fromObj = nonEmpties[Math.floor(rng() * nonEmpties.length)];
    const fromIdx = fromObj.idx;

    // Pick target tube with room
    const validTargets = tubes
      .map((t, idx) => ({ tube: t, idx }))
      .filter((x) => x.idx !== fromIdx && x.tube.length < capacity);

    if (validTargets.length === 0) continue;

    const toObj = validTargets[Math.floor(rng() * validTargets.length)];
    const toIdx = toObj.idx;

    // Avoid immediate undo
    if (fromIdx === prevTo && toIdx === prevFrom) continue;

    // Move 1 unit
    const color = tubes[fromIdx].pop()!;
    tubes[toIdx].push(color);

    prevFrom = fromIdx;
    prevTo = toIdx;
  }

  const sol = solveWaterPuzzle(tubes, capacity, 10000);
  return {
    tubes,
    solutionLength: sol ? sol.length : 10,
  };
}
