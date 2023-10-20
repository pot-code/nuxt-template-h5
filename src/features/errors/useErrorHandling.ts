import type { Subscription } from 'rxjs'
import { showNotify } from 'vant'
import { HttpErrorStream } from '~/core/http/event'
import useTokenStore from '~/composables/useTokenStore'

export default function useErrorHandling() {
  const subs: Subscription[] = []
  const { clearToken } = useTokenStore()

  onMounted(() => {
    subs.push(
      HttpErrorStream.subscribe((err) => {
        if (err.code === 401) {
          clearToken()
        }
        showNotify({
          message: err.message,
          type: 'danger',
        })
      }),
    )
  })

  onUnmounted(() => {
    subs.forEach((sub) => sub.unsubscribe())
  })
}
