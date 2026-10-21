export interface LevelProgress {
  completed: boolean;
  stars: number;
  bestMoves: number;
}

export interface UserProgress {
  highestUnlockedLevel: number;
  completedLevels: Record<number, LevelProgress>;
  soundEnabled: boolean;
  symbolMode: boolean; // Accessible color-blind symbols on liquid
  flaskStyle: 'test-tube' | 'erlenmeyer' | 'cylinder';
  totalStars: number;
}

const STORAGE_KEY = 'aquasort_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  highestUnlockedLevel: 1,
  completedLevels: {},
  soundEnabled: true,
  symbolMode: false,
  flaskStyle: 'test-tube',
  totalStars: 0,
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Error saving progress', err);
  }
}

export function recordLevelVictory(
  levelId: number,
  moves: number,
  targetMoves: number
): { isNewUnlock: boolean; stars: number } {
  const progress = loadUserProgress();

  // Star calculation
  let stars = 1;
  if (moves <= targetMoves) {
    stars = 3;
  } else if (moves <= Math.floor(targetMoves * 1.5)) {
    stars = 2;
  }

  const existing = progress.completedLevels[levelId];
  const bestMoves = existing ? Math.min(existing.bestMoves, moves) : moves;
  const bestStars = existing ? Math.max(existing.stars, stars) : stars;

  progress.completedLevels[levelId] = {
    completed: true,
    stars: bestStars,
    bestMoves,
  };

  let isNewUnlock = false;
  if (levelId === progress.highestUnlockedLevel && levelId < 100) {
    progress.highestUnlockedLevel = levelId + 1;
    isNewUnlock = true;
  }

  // Recalculate total stars
  let totalStars = 0;
  Object.values(progress.completedLevels).forEach((lvl) => {
    totalStars += lvl.stars || 0;
  });
  progress.totalStars = totalStars;

  saveUserProgress(progress);
  return { isNewUnlock, stars };
}
