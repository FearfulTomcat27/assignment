/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 14:41:54
 * @FilePath: /shadcn-admin/src/features/settings/account/index.tsx
 */
import ContentSection from '../components/content-section'
import { AccountForm } from './account-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='账户'
      desc='更新您的账户设置。设置您的首选语言和时区。'
    >
      <AccountForm />
    </ContentSection>
  )
}
