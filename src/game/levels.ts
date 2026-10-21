import { COLOR_KEYS } from './colors.ts';
import { Tube, generateSolvableLevel } from './engine.ts';

export type Difficulty = 'beginner' | 'easy' | 'medium' | 'hard' | 'expert';

export interface LevelData {
  id: number;
  name: string;
  difficulty: Difficulty;
  tubes: Tube[];
  colorCount: number;
  emptyCount: number;
  targetMoves: number;
}

// Handcrafted tutorial levels for 1-5 to guarantee gentle learning curve
const HANDCRAFTED_LEVELS: Record<number, Tube[]> = {
  1: [
    ['red', 'blue', 'red', 'blue'],
    ['blue', 'red', 'blue', 'red'],
    [],
  ],
  2: [
    ['yellow', 'red', 'yellow', 'red'],
    ['red', 'yellow', 'red', 'yellow'],
    [],
  ],
  3: [
    ['blue', 'emerald', 'blue', 'emerald'],
    ['emerald', 'yellow', 'emerald', 'yellow'],
    ['yellow', 'blue', 'yellow', 'blue'],
    [],
  ],
  4: [
    ['red', 'yellow', 'blue', 'red'],
    ['yellow', 'emerald', 'emerald', 'yellow'],
    ['blue', 'blue', 'red', 'emerald'],
    ['emerald', 'blue', 'yellow', 'red'],
    [],
    [],
  ],
  5: [
    ['purple', 'cyan', 'orange', 'purple'],
    ['orange', 'cyan', 'purple', 'cyan'],
    ['cyan', 'orange', 'purple', 'orange'],
    [],
    [],
  ],
};

export function getDifficulty(levelId: number): Difficulty {
  if (levelId <= 10) return 'beginner';
  if (levelId <= 25) return 'easy';
  if (levelId <= 50) return 'medium';
  if (levelId <= 75) return 'hard';
  return 'expert';
}

export function getDifficultyLabel(diff: Difficulty): string {
  switch (diff) {
    case 'beginner':
      return 'Principiante';
    case 'easy':
      return 'Fácil';
    case 'medium':
      return 'Medio';
    case 'hard':
      return 'Desafiante';
    case 'expert':
      return 'Maestro';
  }
}

export function getDifficultyColor(diff: Difficulty): string {
  switch (diff) {
    case 'beginner':
      return 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400';
    case 'easy':
      return 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 dark:text-sky-400';
    case 'medium':
      return 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400';
    case 'hard':
      return 'text-orange-600 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-400';
    case 'expert':
      return 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400';
  }
}

/**
 * Generates configuration parameters for level `id`.
 */
function getLevelParams(id: number): {
  colorCount: number;
  emptyCount: number;
  colorList: string[];
} {
  let colorCount: number;
  let emptyCount = 2;

  if (id <= 3) {
    colorCount = 2;
    emptyCount = 1;
  } else if (id <= 8) {
    colorCount = 3;
    emptyCount = 1;
  } else if (id <= 15) {
    colorCount = 3;
    emptyCount = 2;
  } else if (id <= 25) {
    colorCount = 4;
    emptyCount = 2;
  } else if (id <= 40) {
    colorCount = 5;
    emptyCount = 2;
  } else if (id <= 55) {
    colorCount = 6;
    emptyCount = 2;
  } else if (id <= 70) {
    colorCount = 7;
    emptyCount = 2;
  } else if (id <= 85) {
    colorCount = 8;
    emptyCount = 2;
  } else if (id <= 95) {
    colorCount = 9;
    emptyCount = 2;
  } else {
    colorCount = 10;
    emptyCount = 2;
  }

  // Pick diverse distinct colors
  const colorList = COLOR_KEYS.slice(0, colorCount);

  return { colorCount, emptyCount, colorList };
}

// Memory cache for level data
const levelCache = new Map<number, LevelData>();

export function getLevel(id: number): LevelData {
  if (levelCache.has(id)) {
    return levelCache.get(id)!;
  }

  const difficulty = getDifficulty(id);

  if (HANDCRAFTED_LEVELS[id]) {
    const tubes = HANDCRAFTED_LEVELS[id].map((t) => [...t]);
    const colorSet = new Set<string>();
    tubes.forEach((t) => t.forEach((c) => colorSet.add(c)));
    const emptyCount = tubes.filter((t) => t.length === 0).length;

    const data: LevelData = {
      id,
      name: `Nivel ${id}`,
      difficulty,
      tubes,
      colorCount: colorSet.size,
      emptyCount,
      targetMoves: colorSet.size * 4 + 2,
    };
    levelCache.set(id, data);
    return data;
  }

  const { colorCount, emptyCount, colorList } = getLevelParams(id);
  const seed = id * 98765 + 4321;
  const { tubes, solutionLength } = generateSolvableLevel(colorList, emptyCount, seed);

  const data: LevelData = {
    id,
    name: `Nivel ${id}`,
    difficulty,
    tubes,
    colorCount,
    emptyCount,
    targetMoves: Math.max(solutionLength, colorCount * 4),
  };

  levelCache.set(id, data);
  return data;
}

export const TOTAL_LEVELS = 100;

/**
 * Generate a custom level with user-defined parameters.
 */
export function generateCustomGame(
  colorCount: number,
  emptyCount: number,
  seed?: number
): LevelData {
  const actualSeed = seed ?? Math.floor(Math.random() * 1000000);
  const colorList = COLOR_KEYS.slice(0, Math.min(colorCount, COLOR_KEYS.length));
  const { tubes, solutionLength } = generateSolvableLevel(colorList, emptyCount, actualSeed);

  return {
    id: -1,
    name: 'Partida Personalizada',
    difficulty: colorCount <= 4 ? 'easy' : colorCount <= 7 ? 'medium' : 'hard',
    tubes,
    colorCount,
    emptyCount,
    targetMoves: Math.max(solutionLength, colorCount * 4),
  };
}

/**
 * Generate daily challenge level based on date string YYYY-MM-DD.
 */
export function getDailyChallenge(): LevelData {
  const today = new Date().toISOString().split('T')[0];
  let seed = 0;
  for (let i = 0; i < today.length; i++) {
    seed = (seed << 5) - seed + today.charCodeAt(i);
    seed |= 0;
  }
  const colorCount = 6;
  const emptyCount = 2;
  const colorList = COLOR_KEYS.slice(0, colorCount);
  const { tubes, solutionLength } = generateSolvableLevel(
    colorList,
    emptyCount,
    Math.abs(seed)
  );

  return {
    id: 9999,
    name: `Desafío Diario (${today})`,
    difficulty: 'medium',
    tubes,
    colorCount,
    emptyCount,
    targetMoves: solutionLength,
  };
}
