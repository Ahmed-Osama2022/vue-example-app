import axios from 'axios'
import { useLoading } from '@/composables/useLoading'

const { start, stop } = useLoading()

/**
 * Shared axios instance.
 *
 * Every request automatically drives the global loading bar, so pages only
 * need to handle their own data/error state. Set VITE_API_URL in `.env` to
 * point at the backend.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    config.loadingKey = start(Symbol('api'))
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => {
    stop(response.config.loadingKey)
    return response
  },
  (error) => {
    if (error.config?.loadingKey) stop(error.config.loadingKey)
    return Promise.reject(error)
  },
)

export default api
