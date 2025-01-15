import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Gamepad2 } from 'lucide-react'
import WeeklySchedule from './weekly-schedule'
import PhotoGallery from './photo-gallery'
import SupportedGames from './supported-games'
import Link from 'next/link'

export default function WeekliesSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <Card className="overflow-hidden">
                    <CardHeader className="bg-black text-white p-6">
                        <CardTitle className="text-3xl font-bold text-center"> Weekly Fighting Game Showdown!</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <Image
                            src="/banner.png" // Replace with the path to your image
                            alt="Run the Mix Tournament Search"
                            layout="responsive"
                            width={1200} // Adjust width based on the image dimensions
                            height={600} // Adjust height based on the image dimensions
                        />
                        <Link href="https://www.start.gg/tournament/runthemix-weekly-127/details">
                        <div className='flex justify-center mb-8'>
                            <Button
                                className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            >
                                <Calendar className="w-5 h-5" />
                                Explore Upcoming Events
                            </Button>
                        </div>
                        </Link>



                        <SupportedGames />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <Calendar className="mr-2" />
                                        <span>Every Wednesday</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Clock className="mr-2" />
                                        <span>Doors Open: 5:30 PM | Brackets Start: 6:45 PM</span>
                                    </li>
                                    <li className="flex items-center">
                                        <MapPin className="mr-2" />
                                        <span>[New Address]</span>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Parking:</h4>
                                    <p>Free parking available at GameZenter</p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Platforms:</h4>
                                    <p>PS4 for most games, PS5 for SF6</p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Entry Fee:</h4>
                                    <p>[Include details about pricing or venue fee]</p>
                                </div>
                                <Button className="mt-6" size="lg">
                                    Join the Action Every Wednesday!
                                </Button>
                            </div>
                            <div>

                                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                                <div className="aspect-video relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.453204102979!2d-93.18130719999999!3d45.01572470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32bf43a56616f%3A0x63b4f12f0b8e1d85!2s1935%20County%20Road%20B2%20W%2C%20St%20Paul%2C%20MN%2055113!5e0!3m2!1sen!2sus!4v1736961361926!5m2!1sen!2sus" width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <WeeklySchedule />
                        <PhotoGallery />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

