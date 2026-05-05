import type { RiskLevel } from 'types/supplier.types';

const RISK_STYLES: Record<RiskLevel, string> = {
  low:      'bg-green-100 text-green-800',
  medium:   'bg-yellow-100 text-yellow-800',
  high:     'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
};

const RISK_TOOLTIPS: Record<RiskLevel, string> = {
  low: 'Risk Score: 0-25%',
  medium: 'Risk Score: 26-50%',
  high: 'Risk Score: 51-75%',
  critical: 'Risk Score: 76-100%',
};

interface RiskBadgeProps {
  level: RiskLevel;
}

/**
 * A badge that displays a risk level with a tooltip showing the score range.
 */
export const RiskBadge = ({ level }: RiskBadgeProps) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${RISK_STYLES[level]}`}
    title={RISK_TOOLTIPS[level]}
  >
    {level}
  </span>
);

interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'under_review';
}

const STATUS_STYLES: Record<StatusBadgeProps['status'], string> = {
  active:       'bg-green-100 text-green-800',
  inactive:     'bg-gray-100 text-gray-800',
  under_review: 'bg-blue-100 text-blue-800',
};


export const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}>
    {status.replace('_', ' ')}
  </span>
);
