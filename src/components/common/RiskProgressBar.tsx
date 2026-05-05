import React from 'react';

interface RiskProgressBarProps {
  score: number;
}

const getRiskColor = (score: number) => {
  if (score <= 25) return 'bg-green-500';
  if (score <= 50) return 'bg-yellow-500';
  if (score <= 75) return 'bg-orange-500';
  return 'bg-red-500';
};

export const RiskProgressBar: React.FC<RiskProgressBarProps> = ({ score }) => {
  const colorClass = getRiskColor(score);
  const width = score > 0 ? `${score}%` : 'auto';

  return (
    <div className="flex items-center gap-2">
      <div className="w-24 bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${colorClass}`} style={{ width }}></div>
      </div>
      <span className="text-sm font-medium text-gray-700">{score}</span>
    </div>
  );
};
