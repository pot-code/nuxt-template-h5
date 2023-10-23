import type { UseFetchOptions } from 'nuxt/app'

function request<T>(method: 'get' | 'post' | 'delete' | 'put', url: string, options?: UseFetchOptions<T>) {
  const config = useRuntimeConfig()
  return useFetch(url, {
    method,
    lazy: true,
    server: false,
    baseURL: config.public.API_PREFIX,
    ...options,
  })
}

export default function useClientFetch() {
  function get<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('get', url, options)
  }

  function post<T = any>(url: string, data?: any, options?: UseFetchOptions<any>) {
    return request<T>('post', url, {
      body: data,
      ...options,
    })
  }

  function put<T = any>(url: string, data?: any, options?: UseFetchOptions<any>) {
    return request<T>('put', url, {
      body: data,
      ...options,
    })
  }

  function del<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('delete', url, options)
  }

  return {
    get,
    del,
    post,
    put,
  }
}
