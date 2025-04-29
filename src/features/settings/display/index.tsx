/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 14:43:03
 * @FilePath: /shadcn-admin/src/features/settings/display/index.tsx
 */
import ContentSection from '../components/content-section'
import { DisplayForm } from './display-form'

export default function SettingsDisplay() {
  return (
    <ContentSection
      title='显示'
      desc='打开或关闭项目以控制应用程序中显示的内容。'
    >
      <DisplayForm />
    </ContentSection>
  )
}
