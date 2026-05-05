interface MetricsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: { value: number; label: string };
  icon?: string;
}

export const MetricsCard = ({ title, value, subtitle, trend, icon }: MetricsCardProps) => (
  <div className="bg-white rounded-lg border border-gray-200 p-5">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
      {icon && <span className="text-2xl">{icon}</span>}
    </div>
    {trend && (
      <div className={`mt-3 flex items-center gap-1 text-xs font-medium ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        <span>{trend.value >= 0 ? '↑' : '↓'}</span>
        <span>{Math.abs(trend.value)}% {trend.label}</span>
      </div>
    )}
  </div>
);
