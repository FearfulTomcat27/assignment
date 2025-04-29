/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 14:39:00
 * @FilePath: /shadcn-admin/src/features/settings/appearance/index.tsx
 */
import ContentSection from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='外观'
      desc='自定义应用程序的外观。自动在日间和夜间主题之间切换。'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
