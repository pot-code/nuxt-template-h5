import useTokenStore from '~/composables/useTokenStore'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useTokenStore()
  if (to.meta.requireAuth && !isAuthenticated) {
    return navigateTo('/login')
  }
})
