import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn 后台',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme 公司',
      logo: GalleryVerticalEnd,
      plan: '企业版',
    },
    {
      name: 'Acme 集团',
      logo: AudioWaveform,
      plan: '创业版',
    },
  ],
  navGroups: [
    {
      title: '作业',
      items: [
        {
          title: '首页',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: '已发布作业列表',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: '成绩统计',
          url: '/apps',
          icon: IconPackages,
        },
      ],
    },
    {
      title: '页面',
      items: [
        {
          title: '认证',
          icon: IconLockAccess,
          items: [
            {
              title: '登录',
              url: '/sign-in',
            },
            {
              title: '登录（双列）',
              url: '/sign-in-2',
            },
            {
              title: '注册',
              url: '/sign-up',
            },
            {
              title: '忘记密码',
              url: '/forgot-password',
            },
            {
              title: '验证码',
              url: '/otp',
            },
          ],
        },
        {
          title: '错误页面',
          icon: IconBug,
          items: [
            {
              title: '未授权',
              url: '/401',
              icon: IconLock,
            },
            {
              title: '禁止访问',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: '页面未找到',
              url: '/404',
              icon: IconError404,
            },
            {
              title: '服务器内部错误',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: '系统维护中',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: '其他',
      items: [
        {
          title: '设置',
          icon: IconSettings,
          items: [
            {
              title: '个人资料',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: '账户',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: '外观',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: '通知',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: '显示',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: '帮助中心',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
