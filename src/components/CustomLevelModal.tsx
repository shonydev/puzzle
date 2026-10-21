import React, { useState } from 'react';
import { X, Play, Sliders } from 'lucide-react';
import { COLOR_KEYS } from '../game/colors.ts';

interface CustomLevelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCustomGame: (colorCount: number, emptyCount: number) => void;
}

export const CustomLevelModal: React.FC<CustomLevelModalProps> = ({
  isOpen,
  onClose,
  onStartCustomGame,
}) => {
  const [colors, setColors] = useState<number>(5);
  const [emptyTubes, setEmptyTubes] = useState<number>(2);

  if (!isOpen) return null;

  const maxColors = Math.min(12, COLOR_KEYS.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartCustomGame(colors, emptyTubes);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-game-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 id="custom-game-title" className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Partida Personalizada
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Controls */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          {/* Colors Slider */}
          <div>
            <div className="flex items-center justify-between text-sm font-medium mb-1.5">
              <span className="text-slate-700 dark:text-slate-300">Cantidad de colores</span>
              <span className="font-mono text-sky-600 dark:text-sky-400 font-bold tabular-nums">
                {colors} colores
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={maxColors}
              value={colors}
              onChange={(e) => setColors(parseInt(e.target.value, 10))}
              className="w-full accent-sky-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>2 (Fácil)</span>
              <span>6 (Medio)</span>
              <span>12 (Experto)</span>
            </div>
          </div>

          {/* Empty Tubes Selection */}
          <div>
            <div className="flex items-center justify-between text-sm font-medium mb-2">
              <span className="text-slate-700 dark:text-slate-300">Tubos vacíos libres</span>
              <span className="font-mono text-sky-600 dark:text-sky-400 font-bold tabular-nums">
                {emptyTubes} tubos
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setEmptyTubes(num)}
                  className={`py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                    emptyTubes === num
                      ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800 shadow-xs'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {num} {num === 1 ? 'Tubo' : 'Tubos'}
                </button>
              ))}
            </div>
          </div>

          {/* Summary Details */}
          <div className="p-3 bg-slate-50 dark:bg-slate-850 rounded-xl text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Total de tubos en juego:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {colors + emptyTubes} tubos
              </span>
            </div>
            <div className="flex justify-between">
              <span>Algoritmo de garantía:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                100% Soluble verificado
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Generar y Jugar</span>
          </button>
        </form>
      </div>
    </div>
  );
};
