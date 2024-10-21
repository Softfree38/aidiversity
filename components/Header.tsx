"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          AI 多元化
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/blog" className="hover:text-primary">部落格</Link>
          <Link href="/about" className="hover:text-primary">關於我們</Link>
          <Link href="/contact" className="hover:text-primary">聯絡我們</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Input type="search" placeholder="搜尋..." className="w-64" />
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">登入</Button>
        </div>
      </div>
    </header>
  )
}