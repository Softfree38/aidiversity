"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 實現訂閱電子報邏輯
    console.log('訂閱電子郵件:', email)
    setEmail('')
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">訂閱我們的電子報</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="輸入您的電子郵件"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">訂閱</Button>
      </form>
    </section>
  )
}