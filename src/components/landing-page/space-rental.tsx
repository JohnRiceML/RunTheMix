import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SpaceRental() {
  const spaceFeatures = [
    "Gaming stations with PS4/PS5 setups",
    "Comfortable seating and social areas",
    "Capacity for up to 50 people",
    "High-speed internet for smooth gaming experience",
    "Large screen displays for spectating"
  ]

  const localBusinesses = [
    { name: "TechStart Meetup", event: "Monthly Developer Networking" },
    { name: "Pixel Warriors", event: "Annual eSports Tournament" },
    { name: "GameDev Studios", event: "Game Testing Sessions" }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Host Your Next Gaming or Community Event with Us!
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">Space Features:</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              {spaceFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <p className="mb-6">
              <strong>Ideal for:</strong> Tournaments, community meetups, or private gaming parties.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Pricing and Booking:</h3>
              <p>
                Our space rental starts at $100/hour with a minimum of 2 hours. 
                For full-day events, we offer a special rate of $800 for 10 hours.
              </p>
              <p className="mt-2">
                To book, please contact us at <a href="mailto:booking@gamehub.com" className="text-blue-600 hover:underline">booking@gamehub.com</a> or call (123) 456-7890.
              </p>
            </div>
            
            <Button size="lg" className="w-full md:w-auto">
              Reserve Your Space Today!
            </Button>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Our Space:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=200&width=300&text=Space+Image+${i}`}
                    alt={`Gaming space image ${i}`}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Who&apos;s Used Our Space:</h3>
              <div className="grid gap-4">
                {localBusinesses.map((business, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{business.name}</h4>
                      <p className="text-sm text-gray-600">{business.event}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

