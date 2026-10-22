import React from 'react';
import { getColorDef } from '../game/colors.ts';
import { TUBE_CAPACITY } from '../game/engine.ts';

interface TubeProps {
  index: number;
  colors: string[];
  capacity?: number;
  isSelected: boolean;
  isHintSource?: boolean;
  isHintTarget?: boolean;
  isPouringSource?: boolean;
  tiltAngle?: number;
  tiltDirection?: 'left' | 'right';
  symbolMode?: boolean;
  flaskStyle?: 'test-tube' | 'erlenmeyer' | 'cylinder';
  onClick: () => void;
  disabled?: boolean;
}

export const Tube: React.FC<TubeProps> = ({
  index,
  colors,
  capacity = TUBE_CAPACITY,
  isSelected,
  isHintSource = false,
  isHintTarget = false,
  isPouringSource = false,
  tiltAngle = 0,
  tiltDirection = 'right',
  symbolMode = false,
  onClick,
  disabled = false,
}) => {
  const isComplete =
    colors.length === capacity && colors.every((c) => c === colors[0]);

  // Transform styles for lift & tilt
  let transform = '';
  if (isPouringSource) {
    const deg = tiltDirection === 'right' ? tiltAngle : -tiltAngle;
    const xShift = tiltDirection === 'right' ? 30 : -30;
    transform = `translate(${xShift}px, -45px) rotate(${deg}deg)`;
  } else if (isSelected) {
    transform = 'translateY(-22px)';
  } else {
    transform = 'translateY(0px)';
  }

  // Calculate height percentages for each layer
  // Max capacity 4 units => each unit is 25%
  const unitHeightPercent = 100 / capacity;

  return (
    <div className="relative flex flex-col items-center">
      {/* Selection / Hint Indicator */}
      <div className="tube-indicator h-5 sm:h-6 flex items-center justify-center mb-0.5">
        {isSelected && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500 text-white shadow-sm animate-bounce">
            Elegido
          </span>
        )}
        {isHintSource && !isSelected && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500 text-white shadow-sm animate-pulse">
            Desde
          </span>
        )}
        {isHintTarget && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500 text-white shadow-sm animate-pulse">
            Hacia
          </span>
        )}
        {isComplete && !isSelected && (
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
            ✓ Completo
          </span>
        )}
      </div>

      {/* Interactive Tube Container */}
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={`Tubo ${index + 1}: ${colors.length} de ${capacity} capas`}
        style={{
          transform,
          transition: isPouringSource
            ? 'transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            : 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms ease',
          transformOrigin:
            tiltDirection === 'right' ? 'top right' : 'top left',
        }}
        className={`group relative outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-b-3xl ${
          disabled ? 'opacity-80 cursor-default' : ''
        }`}
      >
        {/* Glow halo when selected or complete */}
        <div
          className={`absolute -inset-1 rounded-b-3xl transition-opacity duration-200 pointer-events-none ${
            isSelected
              ? 'opacity-100 bg-sky-400/20 blur-sm'
              : isHintSource
              ? 'opacity-100 bg-amber-400/20 blur-sm'
              : isHintTarget
              ? 'opacity-100 bg-emerald-400/20 blur-sm'
              : isComplete
              ? 'opacity-40 bg-emerald-400/10 blur-xs'
              : 'opacity-0'
          }`}
        />

        {/* Tube Lip (Rim) */}
        <div className="w-[clamp(44px,11vw,68px)] sm:w-[74px] h-[7px] mx-auto rounded-t-sm bg-gradient-to-b from-white/90 via-slate-200/80 to-slate-300/90 dark:from-slate-600/90 dark:via-slate-700/80 dark:to-slate-800/90 border border-slate-300 dark:border-slate-600 shadow-xs relative z-20 flex items-center justify-between px-1">
          <div className="w-1.5 h-1 bg-white/70 rounded-full" />
          <div className="w-1.5 h-1 bg-white/70 rounded-full" />
        </div>

        {/* Main Glass Tube Body */}
        <div className="w-[clamp(40px,9.5vw,58px)] sm:w-[64px] h-[clamp(108px,19dvh,190px)] sm:h-[min(210px,24dvh)] mx-auto relative rounded-b-[28px] overflow-hidden bg-slate-900/5 dark:bg-slate-800/20 border-x-2 border-b-2 border-slate-300/80 dark:border-slate-600/70 shadow-inner backdrop-blur-[1px]">
          {/* Glass Inner Rim Shadow */}
          <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/15 to-transparent pointer-events-none z-10" />

          {/* Liquid Layers (Bottom to Top) */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col-reverse justify-start">
            {colors.map((colorId, layerIdx) => {
              const color = getColorDef(colorId);
              const isTop = layerIdx === colors.length - 1;

              return (
                <div
                  key={`${index}-${layerIdx}-${colorId}`}
                  style={{
                    height: `${unitHeightPercent}%`,
                    backgroundColor: color.hex,
                    background: `linear-gradient(135deg, ${color.surface} 0%, ${color.hex} 50%, ${color.darkHex} 100%)`,
                  }}
                  className="relative w-full transition-all duration-200 flex items-center justify-center overflow-hidden"
                >
                  {/* Subtle Meniscus curve on the surface of liquid */}
                  {isTop && (
                    <div
                      style={{
                        backgroundColor: color.surface,
                      }}
                      className="absolute inset-x-0 top-0 h-[4px] opacity-80 shadow-xs"
                    />
                  )}

                  {/* Liquid Bubbles / Highlights */}
                  <div className="absolute left-1.5 top-1.5 w-1 h-2 rounded-full bg-white/30" />
                  <div className="absolute right-2 bottom-1.5 w-1.5 h-1.5 rounded-full bg-white/20" />

                  {/* Accessibility Icon / Distinct Symbol */}
                  {(symbolMode || true) && (
                    <span
                      style={{
                        color: color.textColor,
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                      }}
                      className={`font-bold transition-opacity select-none ${
                        symbolMode
                          ? 'text-sm opacity-95 scale-110'
                          : 'text-xs opacity-65'
                      }`}
                      title={`${color.name} (${color.symbolName})`}
                    >
                      {color.symbol}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Left Vertical Glass Reflection Line */}
          <div className="absolute left-1.5 inset-y-2 w-1 rounded-full bg-gradient-to-b from-white/60 via-white/25 to-white/5 pointer-events-none z-10" />

          {/* Right Specular Rim Highlight */}
          <div className="absolute right-1 inset-y-4 w-0.5 rounded-full bg-white/20 pointer-events-none z-10" />

          {/* Complete Ring Effect */}
          {isComplete && (
            <div className="absolute inset-0 border-2 border-emerald-400/60 rounded-b-[26px] pointer-events-none z-20 animate-pulse" />
          )}
        </div>

        {/* Tube Base / Pedestal shadow */}
        <div className="w-8 h-1 mx-auto bg-black/15 dark:bg-black/40 rounded-full blur-[2px] mt-1" />
      </button>

      {/* Tube Number Label */}
      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 tabular-nums">
        {index + 1}
      </span>
    </div>
  );
};
