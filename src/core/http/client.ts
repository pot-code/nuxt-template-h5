import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class HttpClient {
  constructor(private readonly client: AxiosInstance) {}

  async get<T = any>(url: string, config?: AxiosRequestConfig<any>) {
    const res = await this.client.get<T>(url, config)
    return res.data
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any>) {
    const res = await this.client.post<T>(url, data, config)
    return res.data
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any>) {
    const res = await this.client.put<T>(url, data, config)
    return res.data
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig<any>) {
    const res = await this.client.delete<T>(url, config)
    return res.data
  }

  async request<T>(method: string, url: string, config?: AxiosRequestConfig<any>) {
    const res = await this.client.request<T>({
      method,
      url,
      ...config,
    })
    return res.data
  }
}
