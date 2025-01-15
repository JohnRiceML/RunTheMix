'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, HomeIcon } from 'lucide-react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-black text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    {/* <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl tracking-wide">RunTheMix</Link>
          </div> */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/rtm-logo.png"
                                alt="RunTheMix Logo"
                                className="h-16 w-auto" // Adjust height and width as needed
                            />
                        </Link>
                    </div>


                    {/* Centered navigation */}
                    <div className="hidden md:flex items-center justify-center flex-grow">
                        <div className="flex space-x-6">
                            <Link href="/dashboard" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</Link>
                            <Link href="/analytics" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">Events</Link>
                            <Link href="/integrations" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">FAQ</Link>
                            <Link href="/integrations" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">Event Space</Link>
                            <Link href="/activity" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">Vods</Link>
                        </div>
                    </div>

                    {/* Contact button */}
                    <div className="hidden space-x-2 md:block">
                        <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black transition-colors duration-200">
                            <Phone className="mr-2 h-4 w-4" /> Contact
                        </Button>
                        <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black transition-colors duration-200">
                            <HomeIcon /> Book The Space
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-8 w-8" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-8 w-8" aria-hidden="true" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Dashboard</Link>
                        <Link href="/analytics" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Analytics</Link>
                        <Link href="/integrations" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Integrations</Link>
                        <Link href="/activity" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Activity</Link>
                        <Button variant="outline" className="w-full mt-4 text-black border-white hover:bg-white hover:text-black transition-colors duration-200">
                            <Phone className="mr-2 h-4 w-4" /> Contact
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation

