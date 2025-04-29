/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 14:43:37
 * @FilePath: /shadcn-admin/src/features/settings/profile/index.tsx
 */
import ContentSection from '../components/content-section'
import ProfileForm from './profile-form'

export default function SettingsProfile() {
  return (
    <ContentSection title='个人资料' desc='这是其他人在网站上看到您的方式。'>
      <ProfileForm />
    </ContentSection>
  )
}
