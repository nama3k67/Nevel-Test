import { BannerCarousel3D } from "@/components/sections/banner-carousel-3d"
import { FeaturesSection } from "@/components/sections/features"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-6">
      <BannerCarousel3D />
      <FeaturesSection />
    </main>
  )
}
