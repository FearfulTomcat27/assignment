/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 13:49:18
 * @FilePath: /shadcn-admin/src/components/navigation-progress.tsx
 */
import { useEffect, useRef } from 'react'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'
import { useLoadingStore } from '@/stores/loadingStore'

export function NavigationProgress() {
  const ref = useRef<LoadingBarRef>(null)
  const { isLoading } = useLoadingStore()

  useEffect(() => {
    if (isLoading) {
      ref.current?.continuousStart()
    } else {
      ref.current?.complete()
    }
  }, [isLoading])

  return (
    <LoadingBar
      color='var(--muted-foreground)'
      ref={ref}
      shadow={true}
      height={2}
    />
  )
}
