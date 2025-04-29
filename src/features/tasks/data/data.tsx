/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-27 13:14:51
 * @FilePath: /shadcn-admin/src/features/tasks/data/data.tsx
 */
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconCircleCheck,
  IconCircleX,
  IconStopwatch,
} from '@tabler/icons-react'

export const labels = [
  {
    value: '数学',
    label: '数学',
  },
  {
    value: '英语',
    label: '英语',
  },
  {
    value: '计算机',
    label: '计算机',
  },
  {
    value: '物理',
    label: '物理',
  },
  {
    value: '其他',
    label: '其他',
  },
]

export const statuses = [
  {
    value: '进行中',
    label: '进行中',
    icon: IconStopwatch,
  },
  {
    value: '已完成',
    label: '已完成',
    icon: IconCircleCheck,
  },
  {
    value: '已取消',
    label: '已取消',
    icon: IconCircleX,
  },
]

export const priorities = [
  {
    label: '低',
    value: '低',
    icon: IconArrowDown,
  },
  {
    label: '中',
    value: '中',
    icon: IconArrowRight,
  },
  {
    label: '高',
    value: '高',
    icon: IconArrowUp,
  },
]
