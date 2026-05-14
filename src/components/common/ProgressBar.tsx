
import type { RiskLevel } from 'types/supplier.types';

const RISK_COLORS: Record<RiskLevel, string> = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  critical: 'bg-red-500',
};

interface ProgressBarProps {
  score: number;
  level: RiskLevel;
}

export const ProgressBar = ({ score, level }: ProgressBarProps) => {
  const percentage = Math.round(score * 100);

  return (
    <div className="flex items-center">
      <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
        <div
          className={`h-2.5 rounded-full ${RISK_COLORS[level]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-600">{percentage}%</span>
    </div>
  );
};
