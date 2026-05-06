
import type { RiskLevel } from 'types/supplier.types';

interface RiskProgressBarProps {
  score: number;
  level: RiskLevel;
}

const getRiskColor = (level: RiskLevel) => {
  switch (level) {
    case 'low':
      return 'bg-green-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'high':
      return 'bg-orange-500';
    case 'critical':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const RiskProgressBar = ({ score, level }: RiskProgressBarProps) => {
  return (
    <div className="flex items-center">
      <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
        <div
          className={`h-2.5 rounded-full ${getRiskColor(level)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-900">{score}</span>
    </div>
  );
};
