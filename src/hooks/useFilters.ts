import { useState, useCallback } from 'react';
import type { SupplierFilters } from 'types/supplier.types';

const DEFAULT_FILTERS: SupplierFilters = {
  search: '',
  riskLevel: 'all',
  status: 'all',
  country: '',
};

export const useFilters = (initial: Partial<SupplierFilters> = {}) => {
  const [filters, setFilters] = useState<SupplierFilters>({ ...DEFAULT_FILTERS, ...initial });

  const setFilter = useCallback(
    <K extends keyof SupplierFilters>(key: K, value: SupplierFilters[K]) =>
      setFilters((prev) => ({ ...prev, [key]: value })),
    []
  );

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), []);

  const hasActiveFilters = Object.entries(filters).some(
    ([key, val]) => val !== DEFAULT_FILTERS[key as keyof SupplierFilters]
  );

  return { filters, setFilter, resetFilters, hasActiveFilters };
};
