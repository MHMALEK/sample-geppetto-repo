import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/common/Button';

interface DashboardHeaderProps {
  title: string;
  onExport?: () => void;
}

export const DashboardHeader = ({ title, onExport }: DashboardHeaderProps) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">Supply chain risk dashboard</p>
        </div>
        <div className="flex items-center gap-3">
          {onExport && (
            <Button variant="secondary" size="sm" onClick={onExport}>
              Export CSV
            </Button>
          )}
          <Button variant="primary" size="sm">New Button</Button>
          <Button variant="primary" size="sm">New Button</Button>

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
