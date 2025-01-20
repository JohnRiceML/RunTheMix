'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, HomeIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const HEADER_OFFSET = 80; // Adjust this value based on your header height

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - HEADER_OFFSET;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            console.warn(`Section with id "${id}" not found.`);
        }
        setIsOpen(false)
    };

    return (
        <nav className="bg-black text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/rtm-logo.png"
                                alt="RunTheMix Logo"
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Centered navigation */}
                    <div className="hidden md:flex items-center justify-center flex-grow">
                        <div className="flex space-x-6">
                            <button
                                onClick={() => scrollToSection('#Home')}
                                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('#About')}
                                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('#Events')}
                                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                Events
                            </button>
                            <button
                                onClick={() => scrollToSection('#FAQ')}
                                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection('#Vods')}
                                className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            >
                                Vods
                            </button>
                        </div>
                    </div>

                    {/* Contact button */}
                    <div className="hidden space-x-2 md:block">
                        <Button
                            variant="outline"
                            className="text-white bg-black border-white hover:bg-white hover:text-black transition-colors duration-200"
                        >
                            <Phone className="mr-2 h-4 w-4" /> Contact
                        </Button>
                        <Button
                            variant="outline"
                            className="text-white bg-black border-white hover:bg-white hover:text-black transition-colors duration-200"
                        >
                            <HomeIcon className="mr-2 h-4 w-4" /> Book The Space
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: isOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? (
                                    <X className="block h-8 w-8" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-8 w-8" aria-hidden="true" />
                                )}
                            </motion.div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button
                                onClick={() => scrollToSection('#Home')}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('#About')}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('#Events')}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Events
                            </button>
                            <button
                                onClick={() => scrollToSection('#FAQ')}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection('#Vods')}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
                            >
                                Vods
                            </button>
                            <Button variant="outline" className="w-full mt-4 text-black border-white hover:bg-white hover:text-black transition-colors duration-200">
                                <Phone className="mr-2 h-4 w-4" /> Contact
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
