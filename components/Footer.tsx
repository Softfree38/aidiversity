import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI 多元化</h3>
            <p className="text-sm text-muted-foreground">探索人工智慧的前沿</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-primary">部落格</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">關於我們</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">聯絡我們</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">分類</h4>
            <ul className="space-y-2">
              <li><Link href="/category/llm" className="text-sm hover:text-primary">大型語言模型</Link></li>
              <li><Link href="/category/cv" className="text-sm hover:text-primary">電腦視覺</Link></li>
              <li><Link href="/category/nlp" className="text-sm hover:text-primary">自然語言處理</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">關注我們</h4>
            <div className="flex space-x-4">
              {/* 在此添加社交媒體圖標 */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI 多元化。保留所有權利。
        </div>
      </div>
    </footer>
  )
}