import React, { useState } from 'react';
import { X, Lock, Star } from 'lucide-react';
import { Difficulty, TOTAL_LEVELS, getDifficulty, getDifficultyLabel } from '../game/levels.ts';
import { UserProgress } from '../game/storage.ts';

interface LevelSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (levelId: number) => void;
  currentLevelId: number;
  userProgress: UserProgress;
}

type TabKey = 'all' | Difficulty;

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  isOpen,
  onClose,
  onSelectLevel,
  currentLevelId,
  userProgress,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [jumpInput, setJumpInput] = useState('');

  if (!isOpen) return null;

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'all', label: 'Todos (100)' },
    { key: 'beginner', label: 'Principiante (1-10)' },
    { key: 'easy', label: 'Fácil (11-25)' },
    { key: 'medium', label: 'Medio (26-50)' },
    { key: 'hard', label: 'Desafiante (51-75)' },
    { key: 'expert', label: 'Maestro (76-100)' },
  ];

  const allLevels = Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1);

  const filteredLevels = allLevels.filter((lvl) => {
    if (activeTab === 'all') return true;
    return getDifficulty(lvl) === activeTab;
  });

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(jumpInput, 10);
    if (!isNaN(target) && target >= 1 && target <= TOTAL_LEVELS) {
      if (target <= userProgress.highestUnlockedLevel) {
        onSelectLevel(target);
        onClose();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="level-select-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 id="level-select-title" className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Seleccionar Nivel
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              <span>{userProgress.totalStars} estrellas conseguidas</span>
              <span aria-hidden="true">·</span>
              <span>Nivel máximo desbloqueado: {userProgress.highestUnlockedLevel}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Functional buttons, clean segmented style) */}
        <div className="px-6 py-2 border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-lg w-max">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick jump input */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-850/50 flex items-center justify-between gap-4 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Mostrando {filteredLevels.length} niveles
          </span>
          <form onSubmit={handleJump} className="flex items-center gap-2">
            <span className="text-slate-500 dark:text-slate-400">Ir al nivel:</span>
            <input
              type="number"
              min="1"
              max={TOTAL_LEVELS}
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              placeholder={`1-${TOTAL_LEVELS}`}
              className="w-18 px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-white text-xs text-center font-mono"
            />
            <button
              type="submit"
              className="px-2.5 py-1 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Ir
            </button>
          </form>
        </div>

        {/* Grid of Levels */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {filteredLevels.map((lvl) => {
            const isUnlocked = lvl <= userProgress.highestUnlockedLevel;
            const isCurrent = lvl === currentLevelId;
            const progress = userProgress.completedLevels[lvl];
            const stars = progress?.stars || 0;
            const difficulty = getDifficulty(lvl);

            return (
              <button
                key={lvl}
                type="button"
                disabled={!isUnlocked}
                onClick={() => {
                  onSelectLevel(lvl);
                  onClose();
                }}
                className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 ring-2 ring-sky-500/20'
                    : isUnlocked
                    ? progress?.completed
                      ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 hover:border-emerald-400'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-slate-400 hover:shadow-xs'
                    : 'border-slate-200/50 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-850/40 opacity-50 cursor-not-allowed'
                }`}
              >
                {/* Level Number */}
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  {lvl}
                </span>

                {/* Stars / Lock status */}
                <div className="mt-1 flex items-center justify-center h-4">
                  {!isUnlocked ? (
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-3 h-3 ${
                            s <= stars
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Difficulty subtitle */}
                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                  {getDifficultyLabel(difficulty).slice(0, 4)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
