import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSuppliers, fetchSupplierById, updateSupplier } from 'api/suppliers.api';
import type { SupplierFilters } from 'types/supplier.types';
import type { PaginationParams, SortParams } from 'types/common.types';

export const SUPPLIER_KEYS = {
  all: ['suppliers'] as const,
  list: (filters: object, pagination: object) => ['suppliers', 'list', filters, pagination] as const,
  detail: (id: string) => ['suppliers', id] as const,
};

export const useSupplierList = (
  filters: Partial<SupplierFilters>,
  pagination: PaginationParams,
  sort?: SortParams
) =>
  useQuery({
    queryKey: SUPPLIER_KEYS.list(filters, pagination),
    queryFn: () => fetchSuppliers(filters, pagination, sort),
    staleTime: 30_000,
  });

export const useSupplierDetail = (id: string) =>
  useQuery({
    queryKey: SUPPLIER_KEYS.detail(id),
    queryFn: () => fetchSupplierById(id),
    enabled: Boolean(id),
  });

export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof updateSupplier>[1] }) =>
      updateSupplier(id, data),
    onSuccess: (updated) => {
      queryClient.invalidateQueries({ queryKey: SUPPLIER_KEYS.all });
      queryClient.setQueryData(SUPPLIER_KEYS.detail(updated.id), updated);
    },
  });
};
