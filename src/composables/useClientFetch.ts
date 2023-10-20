import type { UseFetchOptions } from 'nuxt/app'

function request<T>(method: 'get' | 'post' | 'delete' | 'put', url: string, options?: UseFetchOptions<any>) {
  return useFetch<HttpResponse<T>>(url, {
    method,
    lazy: true,
    server: false,
    ...options,
  })
}

export default function useClientFetch() {
  function get<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('get', url, options)
  }

  function post<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('post', url, options)
  }

  function del<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('delete', url, options)
  }

  function put<T = any>(url: string, options?: UseFetchOptions<any>) {
    return request<T>('put', url, options)
  }

  return {
    get,
    del,
    post,
    put,
  }
}

interface HttpResponse<T> {
  code: number
  msg: string | null
  data: T | null
}
