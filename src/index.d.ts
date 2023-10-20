declare module '#app' {
  interface PageMeta {
    /** 导航标题 */
    title?: string
    /** 是否在导航栏显示返回按钮 */
    backwards?: boolean
    /** tab 标题 */
    label?: string
    /** tab 图标 */
    icon?: string
    /** 是否需要登录 */
    requireAuth?: boolean
  }
}

export {}
