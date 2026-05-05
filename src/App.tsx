import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardHeader } from 'components/Dashboard/DashboardHeader';
import { MetricsCard } from 'components/Dashboard/MetricsCard';
import { DataTable } from 'components/Table/DataTable';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader title="Supplier Risk Dashboard" />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <MetricsCard title="Total Suppliers" value="248" icon="🏭" trend={{ value: 4, label: 'vs last month' }} />
          <MetricsCard title="High Risk" value="12" icon="⚠️" trend={{ value: -2, label: 'vs last month' }} />
          <MetricsCard title="Pending Audits" value="7" icon="📋" />
          <MetricsCard title="Avg Risk Score" value="34%" icon="📊" trend={{ value: -1.5, label: 'vs last month' }} />
        </div>
        <DataTable />
      </main>
    </div>
  </QueryClientProvider>
);

export default App;
