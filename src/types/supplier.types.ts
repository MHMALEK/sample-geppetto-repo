export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface Supplier {
  id: string;
  name: string;
  country: string;
  category: string;
  riskScore: number;
  riskLevel: RiskLevel;
  status: 'active' | 'inactive' | 'under_review';
  lastAuditDate: string;
  contactEmail: string;
}

export interface SupplierFilters {
  search: string;
  riskLevel: RiskLevel | 'all';
  status: Supplier['status'] | 'all';
  country: string;
}

export interface SupplierListResponse {
  data: Supplier[];
  total: number;
  page: number;
  pageSize: number;
}
