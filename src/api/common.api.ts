import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response?.data?.message ?? 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

export const getRequest = <T>(url: string, params?: Record<string, unknown>) =>
  apiClient.get<T>(url, { params }).then((r) => r.data);

export const postRequest = <T>(url: string, body: unknown) =>
  apiClient.post<T>(url, body).then((r) => r.data);

export const putRequest = <T>(url: string, body: unknown) =>
  apiClient.put<T>(url, body).then((r) => r.data);

export const deleteRequest = <T>(url: string) =>
  apiClient.delete<T>(url).then((r) => r.data);
