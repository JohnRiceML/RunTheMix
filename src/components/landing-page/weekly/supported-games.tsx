import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const games = [
  { name: 'Street Fighter 6', image: '/games/sf6.png' },
  { name: 'Guilty Gear Strive', image: '/games/ggs.png' },
  { name: 'Melty Blood Type Lumina', image: '/games/mbl.png' },
  { name: 'Tekken 7', image: '/games/t7.png' },
  { name: 'GranBlue Fantasy', image: '/games/gbf.png'}
]

export default function SupportedGames() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {games.map((game, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-black text-white">
                <h3 className="text-lg font-semibold text-center">{game.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

