import type { SupplierListResponse } from 'types/supplier.types';

export const MOCK_SUPPLIERS: SupplierListResponse = {
  total: 12,
  page: 1,
  pageSize: 20,
  data: [
    { id: '1',  name: 'Apex Materials Co.',      country: 'Germany',    category: 'Raw Materials',    riskScore: 18, riskLevel: 'low',      status: 'active',       lastAuditDate: '2024-11-12', contactEmail: 'ops@apexmat.de' },
    { id: '2',  name: 'Sino Pack Ltd.',           country: 'China',      category: 'Packaging',        riskScore: 72, riskLevel: 'high',     status: 'under_review', lastAuditDate: '2024-08-03', contactEmail: 'contact@sinopack.cn' },
    { id: '3',  name: 'Nordic Logistics AS',      country: 'Norway',     category: 'Logistics',        riskScore: 24, riskLevel: 'low',      status: 'active',       lastAuditDate: '2025-01-20', contactEmail: 'info@nordiclog.no' },
    { id: '4',  name: 'Delta Electronics Inc.',   country: 'Taiwan',     category: 'Electronics',      riskScore: 45, riskLevel: 'medium',   status: 'active',       lastAuditDate: '2024-10-15', contactEmail: 'supply@deltaelec.tw' },
    { id: '5',  name: 'Sahara Textiles SARL',     country: 'Morocco',    category: 'Textiles',         riskScore: 61, riskLevel: 'high',     status: 'active',       lastAuditDate: '2024-07-09', contactEmail: 'trade@saharatex.ma' },
    { id: '6',  name: 'GreenChem Solutions',      country: 'Netherlands', category: 'Chemicals',       riskScore: 33, riskLevel: 'medium',   status: 'active',       lastAuditDate: '2024-12-01', contactEmail: 'procurement@greenchem.nl' },
    { id: '7',  name: 'Brava Industriale SpA',    country: 'Italy',      category: 'Manufacturing',    riskScore: 22, riskLevel: 'low',      status: 'active',       lastAuditDate: '2025-02-14', contactEmail: 'brava@bravaindustriale.it' },
    { id: '8',  name: 'FastFreight Brasil',       country: 'Brazil',     category: 'Logistics',        riskScore: 55, riskLevel: 'medium',   status: 'active',       lastAuditDate: '2024-09-28', contactEmail: 'ops@fastfreight.br' },
    { id: '9',  name: 'Koryo Steel KPC',          country: 'South Korea', category: 'Raw Materials',   riskScore: 89, riskLevel: 'critical', status: 'under_review', lastAuditDate: '2024-05-17', contactEmail: 'steel@koryokpc.kr' },
    { id: '10', name: 'Maple Pharma Supplies',    country: 'Canada',     category: 'Pharmaceuticals',  riskScore: 14, riskLevel: 'low',      status: 'active',       lastAuditDate: '2025-03-05', contactEmail: 'supply@maplepharma.ca' },
    { id: '11', name: 'Riyad Industrial Corp.',   country: 'Saudi Arabia', category: 'Manufacturing',  riskScore: 66, riskLevel: 'high',     status: 'inactive',     lastAuditDate: '2024-06-22', contactEmail: 'corp@riyad-ind.sa' },
    { id: '12', name: 'Atlantic Components LLC',  country: 'USA',        category: 'Electronics',      riskScore: 38, riskLevel: 'medium',   status: 'active',       lastAuditDate: '2024-11-30', contactEmail: 'orders@atlanticcomp.com' },
  ],
};
