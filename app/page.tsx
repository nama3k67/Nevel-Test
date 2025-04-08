import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedGames } from "@/components/sections/featured-games"
import { NewsSection } from "@/components/sections/news-section"
import { CommunitySection } from "@/components/sections/community-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturedGames />
      <NewsSection />
      <CommunitySection />
    </main>
  )
}
