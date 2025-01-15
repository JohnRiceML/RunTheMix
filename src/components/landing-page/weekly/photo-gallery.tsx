import React from 'react'

export default function PhotoGallery() {
  const photos = [
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=300&width=400',
  ]

  return (
    <div className="mt-8">
      {/* <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Weekly event photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  )
}

