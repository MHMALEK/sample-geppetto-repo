import { Spinner } from 'components/common/Spinner';
import { RiskBadge, StatusBadge } from 'components/common/Badge';
import { useSupplierList } from 'hooks/useSuppliers';
import { useFilters } from 'hooks/useFilters';
import { TableFilter } from './TableFilter';
import type { Supplier } from 'types/supplier.types';
import { Button } from 'components/common/Button';

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
              {['Supplier', 'Country', 'Category', 'Risk', 'Status', 'Last Audit'].map((h) => (
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
            ) : hasActiveFilters && data?.data.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-gray-500">
                  <div className="mb-4">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">No suppliers match your filters</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                  <div className="mt-6">
                    <Button variant="secondary" onClick={resetFilters}>
                      Clear Filters
                    </Button>
                  </div>
                </td>
              </tr>
            ) : (
              data?.data.map((supplier) => (
                <tr
                  key={supplier.id}
                  onClick={() => onRowClick?.(supplier)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{supplier.name}</td>
                  <td className="px-4 py-3 text-gray-600">{supplier.country}</td>
                  <td className="px-4 py-3 text-gray-600">{supplier.category}</td>
                  <td className="px-4 py-3">
                    <RiskBadge level={supplier.riskLevel} />
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={supplier.status} />
                  </td>
                  <td className="px-4 py-3 text-gray-500">{supplier.lastAuditDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
