import { Button } from "@/components/ui/button"

const stats = [
  {
    id: 1,
    value: "10K+",
    label: "Active Players",
  },
  {
    id: 2,
    value: "500+",
    label: "Daily Tournaments",
  },
  {
    id: 3,
    value: "50+",
    label: "Game Titles",
  },
]

export function CommunitySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.id} className="p-6 rounded-lg bg-muted">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  )
} 