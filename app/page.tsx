import FeaturedPosts from '@/components/FeaturedPosts'
import LatestNews from '@/components/LatestNews'
import TrendingTopics from '@/components/TrendingTopics'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">歡迎來到 AI 多元化</h1>
      <FeaturedPosts />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2">
          <LatestNews />
        </div>
        <div>
          <TrendingTopics />
          <Newsletter />
        </div>
      </div>
    </div>
  )
}