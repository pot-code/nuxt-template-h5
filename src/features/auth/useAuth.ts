import { useMutation } from '@tanstack/vue-query'
import { authApi, type LoginPayload } from './api'
import useTokenStore from '~/composables/useTokenStore'

export default function useAuth() {
  const router = useRouter()
  const { token, setToken, clearToken } = useTokenStore()
  const loginMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess({ data }) {
      if (data) {
        setToken(data.token)
        router.push({ name: 'home' })
      }
    },
  })
  const logoutMutate = useMutation({
    mutationFn: authApi.logout,
    onSuccess() {
      clearToken()
    },
  })

  function login(payload: LoginPayload) {
    loginMutate.mutate(payload)
  }

  function logout() {
    logoutMutate.mutate()
  }

  return {
    isLoggingIn: loginMutate.isPending,
    isLoggingOut: logoutMutate.isPending,
    token,
    login,
    logout,
  }
}
