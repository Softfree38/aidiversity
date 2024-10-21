import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const trendingTopics = [
  "GPT-4", "電腦視覺", "強化學習", "AI倫理", "量子機器學習",
  "聯邦學習", "醫療AI", "生成式AI", "可解釋AI", "邊緣AI"
]

export default function TrendingTopics() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">熱門主題</h2>
      <div className="flex flex-wrap gap-2">
        {trendingTopics.map((topic, index) => (
          <Link href={`/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {topic}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  )
}