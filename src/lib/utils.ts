/*
 * @Date: 2025-04-26 18:36:20
 * @LastEditors: FearfulTomcat27 1471335448@qq.com
 * @LastEditTime: 2025-04-29 14:18:51
 * @FilePath: /shadcn-admin/src/lib/utils.ts
 */
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import sha256 from 'crypto-js/sha256';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * 生成 Gravatar URL - 同步版本，使用简单哈希
 * 适用于不需要精确 MD5 的场景
 */
export function getGravatarUrl(
  email: string = '',
  size: number = 80,
  defaultImage: string = 'identicon'
): string {
  const trimmedEmail = email.trim().toLowerCase()
  const hash = sha256(trimmedEmail).toString()
  return `https://www.gravatar.com/avatar/${hash}?d=${defaultImage}&s=${size}`
}