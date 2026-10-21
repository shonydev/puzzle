import React, { useState } from 'react';
import { X, Smartphone, Download, Share2, Copy, Check, FileCode, ExternalLink } from 'lucide-react';
import JSZip from 'jszip';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // List of project source files to package
      const filePaths = [
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'index.html',
        'metadata.json',
        'src/main.tsx',
        'src/App.tsx',
        'src/index.css',
        'src/game/colors.ts',
        'src/game/engine.ts',
        'src/game/levels.ts',
        'src/game/audio.ts',
        'src/game/storage.ts',
        'src/components/TopBar.tsx',
        'src/components/Tube.tsx',
        'src/components/GameHUD.tsx',
        'src/components/LevelSelectModal.tsx',
        'src/components/WinModal.tsx',
        'src/components/CustomLevelModal.tsx',
        'src/components/HelpModal.tsx',
        'src/components/DownloadModal.tsx',
        'public/manifest.json',
        'public/icon.svg',
      ];

      // Fetch each file content from dev server
      for (const path of filePaths) {
        try {
          const res = await fetch(`/${path}`);
          if (res.ok) {
            const text = await res.text();
            zip.file(path, text);
          }
        } catch (e) {
          console.warn(`Could not bundle ${path}`, e);
        }
      }

      // Add a helpful README.md
      zip.file(
        'README.md',
        `# AquaSort - Water Color Puzzle\n\nJuego de rompecabezas de clasificación de agua con 100 niveles y colores distingibles.\n\n## Instalación y ejecución local:\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\nAbre http://localhost:3000 en tu navegador.`
      );

      // Generate blob
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'aquasort-water-puzzle.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 id="download-modal-title" className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Descargar en iPhone 13
            </h2>
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

        {/* Option 1: Install as App on Home Screen (PWA) */}
        <div className="mt-4 p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-850">
          <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-200 text-sm mb-2">
            <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Opción 1: Instalar como App en la pantalla de inicio (Recomendado)</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            Permite jugar en pantalla completa, sin barras de navegación y con carga instantánea:
          </p>
          <ol className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside bg-white dark:bg-slate-900 p-3 rounded-lg border border-sky-100 dark:border-slate-800">
            <li>
              Abre este enlace directamente en <strong>Safari</strong> en tu iPhone 13.
            </li>
            <li>
              Toca el botón <strong>Compartir</strong> (icono de cuadrado con una flecha hacia arriba <span className="font-mono text-sky-600">⎋</span> en la barra inferior de Safari).
            </li>
            <li>
              Baja un poco y selecciona <strong>"Agregar a pantalla de inicio"</strong>.
            </li>
            <li>
              Toca <strong>"Agregar"</strong> en la esquina superior derecha.
            </li>
          </ol>

          {/* Copy link button */}
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex-1 py-2 px-3 bg-white dark:bg-slate-800 border border-sky-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-750 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">¡Enlace copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar enlace para abrir en Safari</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Option 2: Download Source Code Zip */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1.5">
            <FileCode className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Opción 2: Descargar el Código Fuente (.zip)</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
            Descarga un archivo ZIP con todos los archivos del proyecto (código React, TypeScript, niveles, estilos) directamente a la app <strong>Archivos (Files)</strong> o iCloud Drive de tu iPhone.
          </p>
          <button
            type="button"
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer text-xs"
          >
            <Download className="w-4 h-4" />
            <span>{isZipping ? 'Comprimiendo proyecto...' : 'Descargar aquasort-water-puzzle.zip'}</span>
          </button>
        </div>

        {/* Option 3: Export from AI Studio */}
        <div className="mt-4 p-3 bg-slate-100/60 dark:bg-slate-800/40 rounded-xl text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
          <span>
            También puedes exportar el proyecto a un repositorio de <strong>GitHub</strong> usando el menú de opciones en la esquina superior de Google AI Studio.
          </span>
        </div>

        {/* Close */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-xs"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
