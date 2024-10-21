import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI 多元化 - 探索人工智慧的前沿',
  description: '探索從大型語言模型到電腦視覺等最新的人工智慧技術。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={notoSansTC.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}