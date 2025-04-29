import { HTMLAttributes, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'
import { IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react'
import { toast } from 'sonner'
import { useAuthStore } from '@/stores/authStore'
import { useLoadingStore } from '@/stores/loadingStore'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'

type UserAuthFormProps = HTMLAttributes<HTMLFormElement>

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '请输入您的邮箱' })
    .email({ message: '邮箱格式不正确' }),
  password: z
    .string()
    .min(1, {
      message: '请输入您的密码',
    })
    .min(6, {
      message: '密码必须至少6个字符',
    }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const navigate = useNavigate()
  const { setUser, setAccessToken } = useAuthStore((state) => state.auth)
  const { startLoading, stopLoading } = useLoadingStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsFormSubmitting(true)
    startLoading() // 开始显示进度条

    // 模拟登录API调用
    setTimeout(() => {
      // 模拟成功登录
      const mockUser = {
        accountNo: 'ACC12345',
        email: data.email,
        role: ['teacher'],
        exp: Math.floor(Date.now() / 1000) + 3600, // 1小时后过期
      }
      const mockToken =
        'mock-jwt-token-' + Math.random().toString(36).substring(2)

      // 存储用户信息和token
      setUser(mockUser)
      setAccessToken(mockToken)

      setIsFormSubmitting(false)
      stopLoading() // 停止进度条
      toast.success('登录成功！')
      navigate({ to: '/' })
    }, 1000)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-3', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>邮箱</FormLabel>
              <FormControl>
                <Input placeholder='name@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='relative'>
              <FormLabel>密码</FormLabel>
              <FormControl>
                <PasswordInput placeholder='********' {...field} />
              </FormControl>
              <FormMessage />
              <Link
                to='/forgot-password'
                className='text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75'
              >
                忘记密码?
              </Link>
            </FormItem>
          )}
        />
        <Button className='mt-2' disabled={isFormSubmitting}>
          登录
        </Button>

        <div className='relative my-2'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background text-muted-foreground px-2'>
              或继续使用
            </span>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2'>
          <Button variant='outline' type='button' disabled={isFormSubmitting}>
            <IconBrandGithub className='h-4 w-4' /> GitHub
          </Button>
          <Button variant='outline' type='button' disabled={isFormSubmitting}>
            <IconBrandFacebook className='h-4 w-4' /> Facebook
          </Button>
        </div>
      </form>
    </Form>
  )
}
