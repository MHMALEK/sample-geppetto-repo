import { Spinner } from 'components/common/Spinner';
import { StatusBadge } from 'components/common/Badge';
import { RiskProgressBar } from 'components/common/RiskProgressBar';
import { useSupplierList } from 'hooks/useSuppliers';
import { useFilters } from 'hooks/useFilters';
import { TableFilter } from './TableFilter';
import type { Supplier } from 'types/supplier.types';

interface DataTableProps {
  onRowClick?: (supplier: Supplier) => void;
}

export const DataTable = ({ onRowClick }: DataTableProps) => {
  const { filters, setFilter, resetFilters, hasActiveFilters } = useFilters();
  const { data, isLoading, isError } = useSupplierList(filters, { page: 1, pageSize: 20 });

  if (isError) {
    return <div className="text-center py-12 text-red-600">Failed to load suppliers.</div>;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <TableFilter filters={filters} onFilterChange={setFilter} onReset={resetFilters} hasActive={hasActiveFilters} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['Supplier', 'Country', 'Category', 'Risk Score', 'Status', 'Last Audit'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <Spinner className="mx-auto" />
                </td>
              </tr>
            ) : data?.data.map((supplier) => (
              <tr
                key={supplier.id}
                onClick={() => onRowClick?.(supplier)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-4 py-3 font-medium text-gray-900">{supplier.name}</td>
                <td className="px-4 py-3 text-gray-600">{supplier.country}</td>
                <td className="px-4 py-3 text-gray-600">{supplier.category}</td>
                <td className="px-4 py-3">
                  <RiskProgressBar score={supplier.riskScore} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={supplier.status} />
                </td>
                <td className="px-4 py-3 text-gray-500">{supplier.lastAuditDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};import { Spinner } from 'components/common/Spinner';
import { StatusBadge } from 'components/common/Badge';
import { RiskProgressBar } from 'components/common/RiskProgressBar';
import { useSupplierList } from 'hooks/useSuppliers';
import { useFilters } from 'hooks/useFilters';
import { TableFilter } from './TableFilter';
import type { Supplier } from 'types/supplier.types';

interface DataTableProps {
  onRowClick?: (supplier: Supplier) => void;
}

export const DataTable = ({ onRowClick }: DataTableProps) => {
  const { filters, setFilter, resetFilters, hasActiveFilters } = useFilters();
  const { data, isLoading, isError } = useSupplierList(filters, { page: 1, pageSize: 20 });

  if (isError) {
    return <div className="text-center py-12 text-red-600">Failed to load suppliers.</div>;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <TableFilter filters={filters} onFilterChange={setFilter} onReset={resetFilters} hasActive={hasActiveFilters} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {['Supplier', 'Country', 'Category', 'Risk Score', 'Status', 'Last Audit'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <Spinner className="mx-auto" />
                </td>
              </tr>
            ) : data?.data.map((supplier) => (
              <tr
                key={supplier.id}
                onClick={() => onRowClick?.(supplier)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-4 py-3 font-medium text-gray-900">{supplier.name}</td>
                <td className="px-4 py-3 text-gray-600">{supplier.country}</td>
                <td className="px-4 py-3 text-gray-600">{supplier.category}</td>
                <td className="px-4 py-3">
                  <RiskProgressBar score={supplier.riskScore} />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={supplier.status} />
                </td>
                <td className="px-4 py-3 text-gray-500">{supplier.lastAuditDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};