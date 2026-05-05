export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface SortParams {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export interface SelectOption<T = string> {
  label: string;
  value: T;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
