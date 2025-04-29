import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'

const ACCESS_TOKEN = 'thisisjustarandomstring'

interface AuthUser {
  accountNo: string
  email: string
  role: string[]
  exp: number
}

interface AuthState {
  auth: {
    user: AuthUser | null
    setUser: (user: AuthUser | null) => void
    accessToken: string
    setAccessToken: (accessToken: string) => void
    resetAccessToken: () => void
    reset: () => void
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => {
      const cookieState = Cookies.get(ACCESS_TOKEN)
      const initToken = cookieState ? JSON.parse(cookieState) : ''
      return {
        auth: {
          user: null,
          setUser: (user) =>
            set((state) => ({ ...state, auth: { ...state.auth, user } })),
          accessToken: initToken,
          setAccessToken: (accessToken) =>
            set((state) => {
              Cookies.set(ACCESS_TOKEN, JSON.stringify(accessToken))
              return { ...state, auth: { ...state.auth, accessToken } }
            }),
          resetAccessToken: () =>
            set((state) => {
              Cookies.remove(ACCESS_TOKEN)
              return { ...state, auth: { ...state.auth, accessToken: '' } }
            }),
          reset: () =>
            set((state) => {
              Cookies.remove(ACCESS_TOKEN)
              return {
                ...state,
                auth: { ...state.auth, user: null, accessToken: '' },
              }
            }),
        },
      }
    },
    {
      name: 'auth-storage', // 存储的键名
      partialize: (state) => ({
        auth: {
          user: state.auth.user,
          accessToken: state.auth.accessToken,
        },
      }), // 只持久化 user 和 accessToken
    }
  )
)

// export const useAuth = () => useAuthStore((state) => state.auth)
