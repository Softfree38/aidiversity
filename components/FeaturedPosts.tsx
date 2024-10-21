import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const featuredPosts = [
  { id: 1, title: "GPT-4的崛起：語言AI的新時代", excerpt: "探索OpenAI最新語言模型的能力和影響。", category: "LLM" },
  { id: 2, title: "醫療保健中的電腦視覺：革新診斷", excerpt: "AI驅動的圖像分析如何改變醫學影像和患者護理。", category: "CV" },
  { id: 3, title: "NLP突破：前所未有的理解上下文", excerpt: "推動AI理解邊界的自然語言處理最新進展。", category: "NLP" },
]

export default function FeaturedPosts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">精選文章</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">{post.category}</span>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">閱讀更多</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}