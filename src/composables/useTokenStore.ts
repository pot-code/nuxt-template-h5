import { isNil } from 'lodash-es'
import { LocalStorage } from '~/core/storage/browser'
import TokenCache from '~/core/token/cache'

const tokenCache = new TokenCache('app-token', new LocalStorage())

export default function useTokenStore() {
  const token = useState<string>('token', () => '')
  const isAuthenticated = computed(() => !isNil(token.value))

  function setToken(data: string) {
    token.value = data
    tokenCache.save(data)
  }

  function clearToken() {
    token.value = ''
    tokenCache.clear()
  }

  async function loadTokenFromCache() {
    const cache = await tokenCache.get()
    if (!isNil(cache)) {
      setToken(cache)
    }
  }

  return {
    isAuthenticated,
    token,
    setToken,
    clearToken,
    loadTokenFromCache,
  }
}
