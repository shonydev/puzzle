import React from 'react';
import { RotateCcw, Undo2, Lightbulb, PlusCircle, AlertCircle } from 'lucide-react';
import { Difficulty, getDifficultyLabel } from '../game/levels.ts';

interface GameHUDProps {
  levelTitle: string;
  difficulty: Difficulty;
  colorCount: number;
  emptyCount: number;
  moves: number;
  targetMoves: number;
  canUndo: boolean;
  isStalemate: boolean;
  onUndo: () => void;
  onReset: () => void;
  onHint: () => void;
  onAddTube: () => void;
  isSolvingHint: boolean;
  extraTubesUsed: number;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  levelTitle,
  difficulty,
  colorCount,
  emptyCount,
  moves,
  targetMoves,
  canUndo,
  isStalemate,
  onUndo,
  onReset,
  onHint,
  onAddTube,
  isSolvingHint,
  extraTubesUsed,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-4 pb-2">
      {/* Level Title & Editorial Metadata (No pills, clean separators) */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            {levelTitle}
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
            <span>{getDifficultyLabel(difficulty)}</span>
            <span aria-hidden="true">·</span>
            <span>{colorCount} colores distintos</span>
            <span aria-hidden="true">·</span>
            <span>{emptyCount + extraTubesUsed} tubos libres</span>
          </div>
        </div>

        {/* Move Counter */}
        <div className="text-right flex items-baseline sm:flex-col sm:items-end justify-between sm:justify-start gap-1">
          <span className="text-xs text-slate-500 dark:text-slate-400">Movimientos</span>
          <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
            {moves}{' '}
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
              / objetivo ~{targetMoves}
            </span>
          </div>
        </div>
      </div>

      {/* Deadlock / Stalemate banner if no valid moves left */}
      {isStalemate && (
        <div className="mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-center justify-between gap-3 text-amber-900 dark:text-amber-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Sin movimientos válidos posibles. Puedes deshacer o agregar un tubo extra.</span>
          </div>
          <button
            type="button"
            onClick={onUndo}
            className="px-2.5 py-1 text-xs font-medium rounded bg-amber-600 text-white hover:bg-amber-500 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Deshacer jugada
          </button>
        </div>
      )}

      {/* Action Controls Bar */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-3 flex-wrap">
        {/* Undo Move */}
        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
            canUndo
              ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-xs active:scale-95'
              : 'opacity-40 text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed'
          }`}
          title="Deshacer último movimiento"
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>Deshacer</span>
        </button>

        {/* Reset Level */}
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-xs transition-all active:scale-95 cursor-pointer"
          title="Reiniciar el nivel actual"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar</span>
        </button>

        {/* Hint */}
        <button
          type="button"
          onClick={onHint}
          disabled={isSolvingHint}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 shadow-xs transition-all active:scale-95 cursor-pointer"
          title="Obtener pista del siguiente movimiento óptimo"
        >
          <Lightbulb className={`w-3.5 h-3.5 ${isSolvingHint ? 'animate-spin' : ''}`} />
          <span>{isSolvingHint ? 'Calculando...' : 'Pista'}</span>
        </button>

        {/* Extra Tube (+1 Flask) */}
        <button
          type="button"
          onClick={onAddTube}
          disabled={extraTubesUsed >= 2}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
            extraTubesUsed < 2
              ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/40 shadow-xs active:scale-95'
              : 'opacity-40 text-slate-400 border-slate-200 dark:border-slate-800 cursor-not-allowed'
          }`}
          title="Añadir un tubo vacío extra para ayudarte"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>+1 Tubo ({2 - extraTubesUsed})</span>
        </button>
      </div>
    </div>
  );
};
