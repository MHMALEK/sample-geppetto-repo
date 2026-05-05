import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/common/Button';

interface DashboardHeaderProps {
  title: string;
  onExport?: () => void;
  supplierCount?: number;
}

export const DashboardHeader = ({ title, onExport, supplierCount }: DashboardHeaderProps) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          {supplierCount !== undefined && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 text-sm font-medium rounded-full">
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
