import {
  IconBookUpload,
  IconClipboardCheck,
  IconMessageChatbot,
  IconReportAnalytics,
  IconUserCheck,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export default function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-6 space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight'>
            智能作业提交批改系统
          </h1>
          <p className='text-muted-foreground'>
            欢迎使用我们的智能作业提交批改系统，为师生提供便捷、高效的作业管理解决方案
          </p>
        </div>

        <div className='space-y-8'>
          {/* 系统简介 */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>系统简介</CardTitle>
              <CardDescription>
                我们的系统旨在简化作业管理流程，提高教学效率
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground leading-relaxed'>
                本系统为教师和学生提供了一个集中的平台，用于作业的发布、提交、批改和反馈。
                通过智能化的管理方式，我们帮助师生节省时间，提高教学质量，实现教学过程的数字化转型。
                系统支持多种类型的作业，包括文本、图片、文档等，并提供实时反馈和数据分析功能。
              </p>
            </CardContent>
          </Card>

          {/* 核心功能 */}
          <div>
            <h2 className='mb-4 text-2xl font-semibold'>核心功能</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardHeader className='flex flex-row items-start space-y-0 pb-2'>
                  <div className='bg-primary/10 mr-4 rounded-lg p-2'>
                    <IconBookUpload size={24} className='text-primary' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>作业发布与提交</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='text-muted-foreground list-inside list-disc space-y-2'>
                    <li>教师可快速发布各类作业及要求</li>
                    <li>支持多种格式的作业提交</li>
                    <li>自动记录提交时间和状态</li>
                    <li>支持截止日期和提醒功能</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-start space-y-0 pb-2'>
                  <div className='bg-primary/10 mr-4 rounded-lg p-2'>
                    <IconClipboardCheck size={24} className='text-primary' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>智能批改与评分</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='text-muted-foreground list-inside list-disc space-y-2'>
                    <li>自动批改客观题目</li>
                    <li>AI辅助主观题评阅</li>
                    <li>自定义评分标准和权重</li>
                    <li>批量处理多份作业</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-start space-y-0 pb-2'>
                  <div className='bg-primary/10 mr-4 rounded-lg p-2'>
                    <IconMessageChatbot size={24} className='text-primary' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>反馈与互动</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='text-muted-foreground list-inside list-disc space-y-2'>
                    <li>个性化作业反馈和建议</li>
                    <li>师生在线讨论和答疑</li>
                    <li>作业修改和再提交功能</li>
                    <li>同伴互评与协作学习</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-start space-y-0 pb-2'>
                  <div className='bg-primary/10 mr-4 rounded-lg p-2'>
                    <IconReportAnalytics size={24} className='text-primary' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>数据分析与报告</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='text-muted-foreground list-inside list-disc space-y-2'>
                    <li>作业完成率和成绩分析</li>
                    <li>学生能力和进步趋势图表</li>
                    <li>班级整体表现报告</li>
                    <li>个性化学习建议生成</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='flex flex-row items-start space-y-0 pb-2'>
                  <div className='bg-primary/10 mr-4 rounded-lg p-2'>
                    <IconUserCheck size={24} className='text-primary' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>用户管理与权限</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='text-muted-foreground list-inside list-disc space-y-2'>
                    <li>多角色用户管理（教师/学生/管理员）</li>
                    <li>班级和小组管理功能</li>
                    <li>灵活的权限分配系统</li>
                    <li>用户行为日志和安全审计</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 系统优势 */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>系统优势</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='space-y-2'>
                  <h3 className='font-medium'>提高效率</h3>
                  <p className='text-muted-foreground text-sm'>
                    自动化批改和管理流程，节省教师大量时间，让教师可以更专注于教学内容
                  </p>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-medium'>增强互动</h3>
                  <p className='text-muted-foreground text-sm'>
                    提供丰富的互动功能，促进师生交流和同伴学习，创造更加活跃的学习氛围
                  </p>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-medium'>数据驱动</h3>
                  <p className='text-muted-foreground text-sm'>
                    通过数据分析发现学习模式，帮助教师调整教学策略，实现精准教学和因材施教
                  </p>
                </div>
                <div className='space-y-2'>
                  <h3 className='font-medium'>便捷使用</h3>
                  <p className='text-muted-foreground text-sm'>
                    简洁直观的界面设计，支持移动端访问，随时随地管理和提交作业，提升用户体验
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 开始使用 */}
          <div className='bg-card rounded-lg border p-6 text-center shadow-sm'>
            <h2 className='mb-2 text-xl font-semibold'>立即开始使用</h2>
            <p className='text-muted-foreground mx-auto mb-4 max-w-2xl'>
              我们的系统已经准备就绪，可以帮助您提升教学效率和学习体验。
              点击下方按钮探索更多功能，或查看使用指南了解详情。
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button size='lg' className='gap-2'>
                浏览作业
              </Button>
              <Button size='lg' variant='outline' className='gap-2'>
                查看使用指南
              </Button>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
