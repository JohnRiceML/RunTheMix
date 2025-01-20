"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function RunTheMixIntro() {
    const foundingYear = 2018; // Replace with the actual founding year

    // Ref for the section
    const sectionRef = useRef(null);

    // Determine if the section is in view
    const isInView = useInView(sectionRef, { once: true });

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.section
            ref={sectionRef}
            id="#About"
            className="relative py-12 bg-gray-100 overflow-hidden"
            style={{ backgroundImage: "url('/about-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Gradient Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/100 to-white/70 transform"
                style={{ zIndex: 0 }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8 text-black"
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Welcome to Run The Mix
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="space-y-4">
                        <motion.p className="text-lg" variants={textVariants}>
                            Run The Mix is proud to announce its new home in the heart of the Twin Cities.
                            With deep Minnesota roots, we&apos;ve been a cornerstone of the local gaming community,
                            and our new location allows us to serve you even better.
                        </motion.p>
                        <motion.p className="text-lg" variants={textVariants}>
                            Our passion for fighting games drives everything we do. We&apos;ve created a space where
                            gamers of all levels can come together, compete, and grow. From casual players to
                            tournament champions, everyone has a place at Run The Mix.
                        </motion.p>
                        <motion.p className="text-lg" variants={textVariants}>
                            Every week, we host fighting game events featuring titles like <em>Street Fighter 6</em>,
                            <em>Guilty Gear Strive</em>, <em>Melty Blood Type Lumina</em>, and <em>Tekken 7</em>.
                            But we&apos;re not just limited to these—any fighting game that comes through our doors is welcome!
                        </motion.p>
                        <motion.p className="text-lg font-semibold" variants={textVariants}>
                            Run The Mix is more than just a venue—it&apos;s a community hub for the Twin Cities gaming scene.
                            Join us and be a part of something amazing!
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <motion.div className="col-span-2 row-span-3" variants={imageVariants}>
                            <Image
                                src="/about/main.png"
                                alt="Venue interior"
                                width={800}
                                height={800}
                                className="rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={imageVariants}>
                            <Image
                                src="/about/image2.png"
                                alt="Players competing"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={imageVariants}>
                            <Image
                                src="/about/image3.png"
                                alt="Local tournament moment"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        </motion.div>
                        <motion.div variants={imageVariants}>
                            <Image
                                src="/about/image4.png"
                                alt="Community gathering"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p
                    className="text-xl font-bold text-center mt-8"
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    Proudly bringing the Minnesota gaming community together since {foundingYear}.
                </motion.p>
            </div>
        </motion.section>
    );
}
