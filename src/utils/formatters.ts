export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
};

export const formatRiskScore = (score: number): string => `${Math.round(score * 100)}%`;

export const formatCountry = (code: string): string =>
  new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code;

export const truncate = (str: string, max: number): string =>
  str.length <= max ? str : `${str.slice(0, max)}…`;

export const formatNumber = (n: number): string =>
  new Intl.NumberFormat('en-US').format(n);
