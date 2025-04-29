/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 13:42:49
 * @FilePath: /shadcn-admin/src/routes/__root.tsx
 */
import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  redirect,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAuthStore } from '@/stores/authStore'
import { Toaster } from '@/components/ui/sonner'
import { NavigationProgress } from '@/components/navigation-progress'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => {
    return (
      <>
        <NavigationProgress />
        <Outlet />
        <Toaster duration={5000} />
        {import.meta.env.MODE === 'development' && (
          <>
            <ReactQueryDevtools buttonPosition='bottom-left' />
            <TanStackRouterDevtools position='bottom-right' />
          </>
        )}
      </>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
  beforeLoad: ({ location }) => {
    // 获取当前路径
    const pathname = location.pathname

    // 检查是否已登录
    const isLoggedIn = !!useAuthStore.getState().auth.accessToken

    // 排除不需要登录的路径
    const publicPaths = [
      '/sign-in',
      '/sign-up',
      '/forgot-password',
      '/otp',
      '/sign-in-2',
      '/401',
      '/403',
      '/404',
      '/500',
      '/503',
    ]

    // 如果当前路径不在公开路径列表中，且用户未登录，则重定向到登录页面
    if (!publicPaths.some((path) => pathname.startsWith(path)) && !isLoggedIn) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: pathname === '/' ? undefined : pathname,
        },
      })
    }

    // 如果用户已登录且访问登录页面，则重定向到首页
    if (
      isLoggedIn &&
      (pathname === '/sign-in' ||
        pathname === '/sign-up' ||
        pathname === '/sign-in-2')
    ) {
      throw redirect({
        to: '/',
      })
    }
  },
})
