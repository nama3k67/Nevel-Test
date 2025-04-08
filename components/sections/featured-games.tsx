import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredGames = [
  {
    id: 1,
    title: "Epic Adventure",
    description: "Embark on an unforgettable journey through mystical realms",
    image: "/images/game-1.jpg",
  },
  {
    id: 2,
    title: "Racing Master",
    description: "Experience high-speed thrills in the ultimate racing experience",
    image: "/images/game-2.jpg",
  },
  {
    id: 3,
    title: "Strategy Quest",
    description: "Test your tactical skills in this challenging strategy game",
    image: "/images/game-3.jpg",
  },
]

export function FeaturedGames() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <Card key={game.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 