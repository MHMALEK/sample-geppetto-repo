import { Button } from 'components/common/Button';
import type { SupplierFilters, RiskLevel } from 'types/supplier.types';

interface TableFilterProps {
  filters: SupplierFilters;
  onFilterChange: <K extends keyof SupplierFilters>(key: K, value: SupplierFilters[K]) => void;
  onReset: () => void;
  hasActive: boolean;
}

const RISK_OPTIONS: Array<{ label: string; value: RiskLevel | 'all' }> = [
  { label: 'All Risk Levels', value: 'all' },
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'High', value: 'high' },
  { label: 'Critical', value: 'critical' },
];

export const TableFilter = ({ filters, onFilterChange, onReset, hasActive }: TableFilterProps) => (
  <div className="p-4 border-b border-gray-200 flex gap-3 flex-wrap items-center">
    <input
      type="text"
      placeholder="Search suppliers..."
      value={filters.search}
      onChange={(e) => onFilterChange('search', e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
    />
    <select
      value={filters.riskLevel}
      onChange={(e) => onFilterChange('riskLevel', e.target.value as RiskLevel | 'all')}
      className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {RISK_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    {hasActive && (
      <Button variant="ghost" size="sm" onClick={onReset}>
        Clear filters
      </Button>
    )}
  </div>
);
