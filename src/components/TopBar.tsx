import React from 'react';
import { Volume2, VolumeX, Eye, Sparkles, Smartphone } from 'lucide-react';

interface TopBarProps {
  onOpenLevels: () => void;
  onOpenDaily: () => void;
  onOpenCustom: () => void;
  onOpenHelp: () => void;
  onOpenDownload: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  symbolMode: boolean;
  onToggleSymbols: () => void;
  currentLevelName: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenLevels,
  onOpenDaily,
  onOpenCustom,
  onOpenHelp,
  onOpenDownload,
  soundEnabled,
  onToggleSound,
  symbolMode,
  onToggleSymbols,
}) => {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onOpenLevels();
          }}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-display"
        >
          AquaSort
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            type="button"
            onClick={onOpenLevels}
            className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Niveles (100)
          </button>
          <button
            type="button"
            onClick={onOpenDaily}
            className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Desafío Diario
          </button>
          <button
            type="button"
            onClick={onOpenCustom}
            className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Partida Libre
          </button>
          <button
            type="button"
            onClick={onOpenHelp}
            className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Cómo Jugar
          </button>
          <button
            type="button"
            onClick={onOpenDownload}
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            iPhone / Descargar
          </button>
        </nav>

        {/* Zone 3: Quick accessibility toggles & 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Download / iPhone Install button */}
          <button
            type="button"
            onClick={onOpenDownload}
            title="Descargar o Instalar en iPhone 13"
            aria-label="Descargar o instalar en iPhone"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 flex items-center gap-1 text-xs font-medium"
          >
            <Smartphone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="hidden sm:inline">Instalar / ZIP</span>
          </button>

          {/* Symbol / Accessibility mode toggle */}
          <button
            type="button"
            onClick={onToggleSymbols}
            title={
              symbolMode
                ? 'Modo Símbolos Activado (Accesibilidad de Color)'
                : 'Activar Modo Símbolos'
            }
            aria-label="Alternar símbolos de color"
            className={`p-2 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              symbolMode
                ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-300 dark:border-sky-800'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-700'
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Sound toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Silenciar Sonido' : 'Activar Sonido'}
            aria-label="Alternar sonido"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onOpenLevels}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Elegir Nivel</span>
          </button>
        </div>
      </div>
    </header>
  );
};
