import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/common/Button';

interface DashboardHeaderProps {
  title: string;
  supplierCount?: number;
  onExport?: () => void;
}

export const DashboardHeader = ({ title, supplierCount, onExport }: DashboardHeaderProps) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          {supplierCount && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {supplierCount} suppliers
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {onExport && (
            <Button variant="secondary" size="sm" onClick={onExport}>
              Export CSV
            </Button>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{user.name}</span>
              <Button variant="ghost" size="sm" onClick={logout}>Sign out</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
