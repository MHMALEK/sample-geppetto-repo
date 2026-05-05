import { RiskProgressBar } from '../common/RiskProgressBar';

interface RiskCellProps {
  score: number;
}

export const RiskCell = ({ score }: RiskCellProps) => {
  return <RiskProgressBar score={score} />;
};
