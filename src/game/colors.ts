export interface WaterColor {
  id: string;
  name: string;
  hex: string;
  surface: string;
  darkHex: string;
  textColor: string;
  symbol: string;
  symbolName: string;
}

export const WATER_COLORS: Record<string, WaterColor> = {
  red: {
    id: 'red',
    name: 'Rojo Carmesí',
    hex: '#EF4444',
    surface: '#FCA5A5',
    darkHex: '#B91C1C',
    textColor: '#FFFFFF',
    symbol: '♥',
    symbolName: 'Corazón',
  },
  blue: {
    id: 'blue',
    name: 'Azul Real',
    hex: '#2563EB',
    surface: '#93C5FD',
    darkHex: '#1D4ED8',
    textColor: '#FFFFFF',
    symbol: '◆',
    symbolName: 'Diamante',
  },
  yellow: {
    id: 'yellow',
    name: 'Amarillo Dorado',
    hex: '#EAB308',
    surface: '#FEF08A',
    darkHex: '#A16207',
    textColor: '#1E293B',
    symbol: '★',
    symbolName: 'Estrella',
  },
  emerald: {
    id: 'emerald',
    name: 'Verde Esmeralda',
    hex: '#10B981',
    surface: '#A7F3D0',
    darkHex: '#047857',
    textColor: '#FFFFFF',
    symbol: '▲',
    symbolName: 'Triángulo',
  },
  purple: {
    id: 'purple',
    name: 'Violeta Eléctrico',
    hex: '#8B5CF6',
    surface: '#DDD6FE',
    darkHex: '#6D28D9',
    textColor: '#FFFFFF',
    symbol: '✦',
    symbolName: 'Destello',
  },
  orange: {
    id: 'orange',
    name: 'Naranja Fuego',
    hex: '#F97316',
    surface: '#FDBA74',
    darkHex: '#C2410C',
    textColor: '#FFFFFF',
    symbol: '●',
    symbolName: 'Círculo',
  },
  cyan: {
    id: 'cyan',
    name: 'Cian Turquesa',
    hex: '#06B6D4',
    surface: '#A5F3FC',
    darkHex: '#0E7490',
    textColor: '#FFFFFF',
    symbol: '💧',
    symbolName: 'Gota',
  },
  pink: {
    id: 'pink',
    name: 'Rosa Fucsia',
    hex: '#EC4899',
    surface: '#FBCFE8',
    darkHex: '#BE185D',
    textColor: '#FFFFFF',
    symbol: '✿',
    symbolName: 'Flor',
  },
  lime: {
    id: 'lime',
    name: 'Verde Lima',
    hex: '#84CC16',
    surface: '#D9F99D',
    darkHex: '#4D7C0F',
    textColor: '#1E293B',
    symbol: '❖',
    symbolName: 'Cruz Rombo',
  },
  indigo: {
    id: 'indigo',
    name: 'Índigo Profundo',
    hex: '#4F46E5',
    surface: '#C7D2FE',
    darkHex: '#3730A3',
    textColor: '#FFFFFF',
    symbol: '☾',
    symbolName: 'Luna',
  },
  teal: {
    id: 'teal',
    name: 'Verde Azulado',
    hex: '#0D9488',
    surface: '#99F6E4',
    darkHex: '#115E59',
    textColor: '#FFFFFF',
    symbol: '⬢',
    symbolName: 'Hexágono',
  },
  amber: {
    id: 'amber',
    name: 'Ámbar Cálido',
    hex: '#D97706',
    surface: '#FDE68A',
    darkHex: '#92400E',
    textColor: '#FFFFFF',
    symbol: '☀️',
    symbolName: 'Sol',
  },
  brown: {
    id: 'brown',
    name: 'Café Caramelo',
    hex: '#78350F',
    surface: '#D6D3D1',
    darkHex: '#451A03',
    textColor: '#FFFFFF',
    symbol: '■',
    symbolName: 'Cuadrado',
  },
  slate: {
    id: 'slate',
    name: 'Gris Acero',
    hex: '#64748B',
    surface: '#CBD5E1',
    darkHex: '#334155',
    textColor: '#FFFFFF',
    symbol: '✚',
    symbolName: 'Cruz',
  },
};

export const COLOR_KEYS = Object.keys(WATER_COLORS);

export function getColorDef(colorId: string): WaterColor {
  return (
    WATER_COLORS[colorId] || {
      id: colorId,
      name: colorId,
      hex: '#94A3B8',
      surface: '#E2E8F0',
      darkHex: '#475569',
      textColor: '#FFFFFF',
      symbol: '•',
      symbolName: 'Punto',
    }
  );
}
