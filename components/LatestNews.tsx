import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const latestNews = [
  { id: 1, title: "DeepMind的AlphaFold以前所未有的準確度預測蛋白質結構", date: "2023-05-15" },
  { id: 2, title: "Google推出PaLM 2：更高效且功能更強大的語言模型", date: "2023-05-10" },
  { id: 3, title: "AI生成藝術贏得重大比賽，引發爭議", date: "2023-05-05" },
  { id: 4, title: "國際聯盟提出新的AI倫理準則", date: "2023-04-30" },
]

export default function LatestNews() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">最新消息</h2>
      <div className="space-y-4">
        {latestNews.map((news) => (
          <Card key={news.id}>
            <CardHeader>
              <CardTitle className="text-lg">{news.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{news.date}</p>
              <Link href={`/news/${news.id}`} className="text-primary hover:underline text-sm">閱讀全文</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}