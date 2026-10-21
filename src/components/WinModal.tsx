import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Star, RotateCcw, ArrowRight, Grid } from 'lucide-react';
import { TOTAL_LEVELS } from '../game/levels.ts';

interface WinModalProps {
  isOpen: boolean;
  levelId: number;
  moves: number;
  targetMoves: number;
  stars: number;
  onNextLevel: () => void;
  onReplay: () => void;
  onOpenLevelSelect: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  isOpen,
  levelId,
  moves,
  targetMoves,
  stars,
  onNextLevel,
  onReplay,
  onOpenLevelSelect,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti from both sides
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65, x: 0.3 },
        colors: ['#06B6D4', '#EF4444', '#EAB308', '#10B981', '#8B5CF6'],
      });
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65, x: 0.7 },
        colors: ['#06B6D4', '#EF4444', '#EAB308', '#10B981', '#8B5CF6'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const hasNext = levelId < TOTAL_LEVELS && levelId > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="win-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        {/* Decorative subtle background aura */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Stars Display */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3].map((starNum) => {
            const isEarned = starNum <= stars;
            return (
              <div
                key={starNum}
                className={`p-2 rounded-full transition-transform duration-300 ${
                  isEarned
                    ? 'text-amber-400 scale-110'
                    : 'text-slate-300 dark:text-slate-700'
                }`}
              >
                <Star
                  className={`w-9 h-9 ${
                    isEarned ? 'fill-amber-400 stroke-amber-500' : 'stroke-current'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Victory Title */}
        <h2
          id="win-modal-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display"
        >
          ¡Nivel Completado!
        </h2>

        {/* Result Breakdown (Clean unboxed text metadata) */}
        <div className="mt-3 py-3 px-6 bg-slate-50 dark:bg-slate-850 rounded-xl w-full flex items-center justify-around text-slate-700 dark:text-slate-300">
          <div className="flex flex-col items-center">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              Movimientos
            </span>
            <span className="text-xl font-bold font-mono tabular-nums">
              {moves}
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
          <div className="flex flex-col items-center">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              Objetivo
            </span>
            <span className="text-xl font-bold font-mono tabular-nums text-slate-500">
              ~{targetMoves}
            </span>
          </div>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="w-full mt-6 space-y-2.5">
          {hasNext ? (
            <button
              type="button"
              onClick={onNextLevel}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Siguiente Nivel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenLevelSelect}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>¡Has completado todos los niveles! Ver Lista</span>
            </button>
          )}

          <div className="flex items-center gap-2 w-full">
            <button
              type="button"
              onClick={onReplay}
              className="flex-1 py-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repetir</span>
            </button>
            <button
              type="button"
              onClick={onOpenLevelSelect}
              className="flex-1 py-2 px-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Niveles</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
