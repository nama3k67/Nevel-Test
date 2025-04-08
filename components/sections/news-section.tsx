import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: 1,
    title: "New Game Releases",
    description: "Check out the hottest games coming this month",
    image: "/images/news-1.jpg",
    date: "April 8, 2024",
  },
  {
    id: 2,
    title: "Gaming Events",
    description: "Upcoming tournaments and events you don't want to miss",
    image: "/images/news-2.jpg",
    date: "April 7, 2024",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Gaming News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription className="mb-4">{item.description}</CardDescription>
                <Button variant="link" className="p-0 h-auto">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 