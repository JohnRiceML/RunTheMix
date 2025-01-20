"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'
import FightingGame from './FightingGame'
import { Badge } from './ui/badge'

import { motion } from "framer-motion"

import { Sword, Shield, Zap } from "lucide-react"

export default function PeteBio() {
    const [showFightGame, setShowFightGame] = useState(true)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
            {showFightGame ?

                <Card
                    className="w-full max-w-3xl mx-auto overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #2D3748 0%, #1A202C 100%)",
                    }}
                >
                    <CardHeader className="relative overflow-hidden pb-0">
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: 'url("/background-pattern.svg")',
                                opacity: 0.1,
                            }}
                        />
                        <CardTitle className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Pete&quot;s Character Bio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 grid grid-cols-2 items-center gap-8 p-6">
                        <motion.div
                            className="flex-1 space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-lg font-semibold px-3 py-1">
                                Fighter
                                </Badge>
                                <Badge variant="secondary" className="text-lg font-semibold px-3 py-1">
                                    Level 30
                                </Badge>
                            </div>
                            <div className="space-y-2">
                                <p className="flex items-center gap-2">
                                    <Sword className="w-5 h-5 text-purple-400" />
                                    <span className="text-gray-300">
                                        Name: <span className="font-semibold text-white">Pete</span>
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-purple-400" />
                                    <span className="text-gray-300">
                                        Class: <span className="font-semibold text-white">Fighter</span>
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-purple-400" />
                                    <span className="text-gray-300">
                                        Special Ability: <span className="font-semibold text-white">FGC Beam</span>
                                    </span>
                                </p>
                            </div>
                            <p className="italic text-gray-400 text-sm">"I&quot;m Pete, and I&quot;m always ready for a challenge!"</p>
                            <Button
                            onClick={() => setShowFightGame(false)}
                            className="w-full text-lg font-semibold py-6"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                background: isHovered
                                    ? "linear-gradient(135deg, #9F7AEA 0%, #ED64A6 100%)"
                                    : "linear-gradient(135deg, #805AD5 0%, #D53F8C 100%)",
                                transition: "all 0.3s ease",
                            }}
                        >
                            Challenge Pete
                        </Button>
                        </motion.div>
                        <motion.div
                            className="flex justify-center items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src="/pete-sp1.png"
                                alt="Petes character"
                                width={190}
                                height={150}
                                className="rounded-lg object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/50"
                            />
                        </motion.div>
                    </CardContent>
                    <CardFooter className="pb-6">
                      
                    </CardFooter>
                </Card>
                :
                <FightingGame />
            }
        </>
    )
}

