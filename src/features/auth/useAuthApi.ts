import type { HttpResponse } from '~/types/http'

export default function useAuthApi() {
  const { post } = useClientFetch()

  return {
    login(payload: LoginPayload) {
      return post<HttpResponse<string>>('/auth/login', payload)
    },
    logout() {
      return post('/auth/logout')
    },
  }
}

export interface LoginPayload {
  username: string
  password: string
}
