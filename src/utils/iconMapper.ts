import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const getIconComponent = (iconName: string): LucideIcon => {
  const icons = LucideIcons as Record<string, LucideIcon>;
  return icons[iconName] || LucideIcons.Circle;
};

export const colorClasses = [
  { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
  { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
  { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600' },
  { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
  { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
  { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' },
];

export const getColorClass = (colorName: string, index: number) => {
  const lowerColor = colorName.toLowerCase();

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
    yellow: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
    red: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' },
  };

  return colorMap[lowerColor] || colorClasses[index % colorClasses.length];
};
