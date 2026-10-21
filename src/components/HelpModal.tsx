import React from 'react';
import { X, CheckCircle2, Eye, Undo2, Lightbulb, PlusCircle } from 'lucide-react';
import { WATER_COLORS } from '../game/colors.ts';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sampleColors = Object.values(WATER_COLORS).slice(0, 6);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <h2 id="help-modal-title" className="text-xl font-bold text-slate-900 dark:text-white font-display">
            Cómo Jugar a AquaSort
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar ayuda"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rules Body */}
        <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
              Objetivo
            </h3>
            <p>
              Clasifica los líquidos de colores en los tubos hasta que cada tubo contenga un único color uniforme o quede totalmente vacío.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900 dark:text-white text-base">
              Reglas de Vertido
            </h3>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <span>
                Haz clic en un tubo para seleccionarlo (se elevará), luego haz clic en otro tubo de destino para verter.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <span>
                Solo puedes verter si el tubo de destino tiene espacio libre <strong>Y</strong> su líquido superior es del <strong>mismo color</strong> que el que viertes (o si el tubo de destino está vacío).
              </span>
            </div>
          </div>

          {/* Color Distinction & Symbols */}
          <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2 font-semibold text-slate-900 dark:text-white">
              <Eye className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Colores Distinguibles y Modo Accesible</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Cada color posee un matiz de alto contraste y su propio símbolo único (estrella, gota, corazón, etc.) para que jamás se confundan, incluso en condiciones de baja luminosidad o daltonismo.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {sampleColors.map((c) => (
                <div
                  key={c.id}
                  style={{ backgroundColor: c.hex }}
                  className="p-1.5 rounded-lg flex flex-col items-center justify-center text-white shadow-xs"
                >
                  <span className="text-base font-bold">{c.symbol}</span>
                  <span className="text-[9px] truncate max-w-full font-medium">
                    {c.symbolName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Power-ups */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2">
              Herramientas de Ayuda
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1">
                  <Undo2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Deshacer</span>
                </div>
                <span>Revierte tus movimientos paso a paso.</span>
              </div>
              <div className="p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Pista</span>
                </div>
                <span>Calcula la siguiente jugada óptima.</span>
              </div>
              <div className="p-2.5 border border-slate-200 dark:border-slate-800 rounded-lg">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white mb-1">
                  <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+1 Tubo</span>
                </div>
                <span>Añade un tubo vacío adicional si te atascas.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-sm"
          >
            Entendido, ¡a Jugar!
          </button>
        </div>
      </div>
    </div>
  );
};
