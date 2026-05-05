import { getRequest, postRequest, putRequest } from 'api/common.api';
import type { Supplier, SupplierFilters, SupplierListResponse } from 'types/supplier.types';
import type { PaginationParams, SortParams } from 'types/common.types';
import { MOCK_SUPPLIERS } from '../mocks/suppliers';

export const SUPPLIERS_URL = '/api/suppliers';

export const fetchSuppliers = (
  filters: Partial<SupplierFilters>,
  pagination: PaginationParams,
  sort?: SortParams
): Promise<SupplierListResponse> =>
  getRequest<SupplierListResponse>(SUPPLIERS_URL, { ...filters, ...pagination, ...sort })
    .catch(() => MOCK_SUPPLIERS);

export const fetchSupplierById = (id: string): Promise<Supplier> =>
  getRequest(`${SUPPLIERS_URL}/${id}`);

export const createSupplier = (data: Omit<Supplier, 'id'>): Promise<Supplier> =>
  postRequest(SUPPLIERS_URL, data);

export const updateSupplier = (id: string, data: Partial<Supplier>): Promise<Supplier> =>
  putRequest(`${SUPPLIERS_URL}/${id}`, data);

export const fetchSupplierRiskHistory = (id: string): Promise<{ date: string; score: number }[]> =>
  getRequest(`${SUPPLIERS_URL}/${id}/risk-history`);
