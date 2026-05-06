/**
 * Embedded documentation for the sample “supplier intelligence” app.
 * This file is indexed by the Geppetto RAG pipeline so the Ask page can answer
 * conceptual questions even when the phrasing does not match source symbols.
 */

export const demoAppOverview = () => {
  return `
## Demo app: Supplier Intelligence dashboard (sample-geppetto-repo)

**Purpose:** A small React + TypeScript UI for browsing suppliers, their country,
category, computed risk score, operational status, and last audit date.

**Main screen:** \`DataTable\` (\`src/components/Table/DataTable.tsx\`) renders the grid.
It composes:
- \`TableFilter\` for search + filters
- \`useFilters\` (\`src/hooks/useFilters.ts\`) for filter state
- \`useSupplierList\` (\`src/hooks/useSuppliers.ts\`) for paginated list data via React Query
- \`RiskProgressBar\` for numeric risk + level visualization
- \`StatusBadge\` for supplier workflow status

**Data layer:** \`fetchSuppliers\` and friends live in \`src/api/suppliers.api.ts\`.
Hooks cache with keys \`SUPPLIER_KEYS.list(filters, pagination)\` so changing filters
invalidates the correct query. Stale time is 30_000 ms for list queries.

**Domain types:** \`Supplier\`, \`SupplierFilters\`, \`RiskLevel\`, \`SupplierListResponse\`
are defined in \`src/types/supplier.types.ts\`. Risk levels are low | medium | high | critical.
Supplier status values are active | inactive | under_review.

**Suggested questions for demos:**
- How does the supplier list get loaded and cached?
- Where are risk scores shown in the table?
- What filters exist and how is “has active filters” computed?
- What React Query query keys are used for suppliers?
`;
};

export const demoRiskAndBadgesTopic = () => {
  return `
## Risk UI: badges, tooltips, and progress bar

**RiskBadge** (\`src/components/common/Badge.tsx\`) shows a **circular** risk level
(low / medium / high / critical) with Tailwind color classes per level.
\`RISK_TOOLTIPS\` maps each level to human-readable score bands:
- low: 0-25%
- medium: 26-50%
- high: 51-75%
- critical: 76-100%

**StatusBadge** in the same file renders supplier.status (active, inactive, under_review).

**RiskProgressBar** (\`src/components/common/RiskProgressBar.tsx\`) combines the numeric
\`riskScore\` with \`riskLevel\` for a richer cell than the badge alone. DataTable uses
RiskProgressBar in the Risk column and StatusBadge in the Status column.

When codeGeppetto or a reviewer asks “where are risk tooltips defined?”, the answer is
\`RISK_TOOLTIPS\` alongside \`RISK_STYLES\` in Badge.tsx.
`;
};

export const demoHooksAndFiltersTopic = () => {
  return `
## Hooks: filters and supplier data

**useFilters** (\`src/hooks/useFilters.ts\`)
- Default filter object: search '', riskLevel 'all', status 'all', country ''.
- \`setFilter(key, value)\` immutably merges into state.
- \`resetFilters\` restores defaults.
- \`hasActiveFilters\` is true when any field differs from DEFAULT_FILTERS (cheap deep compare).

**useSupplierList** (\`src/hooks/useSuppliers.ts\`)
- Wraps \`useQuery\` with queryKey \`SUPPLIER_KEYS.list(filters, pagination)\`.
- \`queryFn\` calls \`fetchSuppliers(filters, pagination, sort)\` from the API module.
- \`staleTime: 30_000\` reduces refetch churn while typing filters.

**useSupplierDetail** fetches one supplier by id; \`enabled: Boolean(id)\` avoids empty fetches.

**useUpdateSupplier** is a mutation that invalidates supplier list queries and patches the detail cache on success.
`;
};
