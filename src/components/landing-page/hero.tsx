"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaDiscord, FaTwitch } from "react-icons/fa";
import { motion } from "framer-motion";
import { AwardIcon, HomeIcon, UserIcon } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function RunTheMixHero() {
  // Control the visibility of the GIF and the "explosion" logo
  const [showGif, setShowGif] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
      setShowExplosion(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/pHswF70ofKA?autoplay=1&mute=1&loop=1&playlist=pHswF70ofKA&start=37&end=47"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; loop; muted; fullscreen"
            allowFullScreen
            style={{
              transform: "scale(1.2)",
              transformOrigin: "center",
            }}
          ></iframe>
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* GIF: only visible when showGif = true */}
        {showGif && (
          <motion.div variants={fadeInUp} className="mb-8">
            <img
              src="hadouken1.gif"
              alt="Exciting Animation"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        )}

        {/* Explosive RTM Logo: only appears after the GIF disappears */}
        {showExplosion && (
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ scale: 1, rotate: 360, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src="/rtm-logo.png"
              alt="RunTheMix Explosion Logo"
              className="w-28 md:w-52"
            />
          </motion.div>
        )}
        <motion.h1
          className="text-lg sm:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight"
          variants={fadeInUp}
        >
          {/* If you want to remove the original RTM logo at the top, comment this out */}
          {/*
          <div className="flex justify-center pb-3">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/rtm-logo.png"
                  alt="RunTheMix Logo"
                  className="h-48 w-auto"
                />
              </Link>
            </div>
          </div>
          */}
          Play, Compete, and Connect <br /> Weekly events, community spaces, and more!
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeInUp}
        >
          <Button
            asChild
            size="lg"
            className="bg-black/80 border-2 border-red-600 text-red-600 font-bold py-3 px-6 rounded-full text-lg flex items-center gap-2 hover:bg-red-600 hover:text-white"
          >
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserIcon className="w-6 h-6" />
              Join the Community
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-black/80 border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full text-lg flex items-center gap-2 hover:bg-blue-600 hover:text-white"
          >
            <Link href="#weeklies">
              <AwardIcon className="w-6 h-6" />
              Check Out Weekly Events
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-black/80 border-2 border-green-600 text-green-600 font-bold py-3 px-6 rounded-full text-lg flex items-center gap-2 hover:bg-green-600 hover:text-white"
          >
            <Link href="#space-rental">
              <HomeIcon className="w-6 h-6" />
              Rent Our Space
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="relative z-10 mt-16 flex gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Link
            href="https://x.com/YourHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter className="w-8 h-8" />
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Link
            href="https://discord.gg/YourInvite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaDiscord className="w-8 h-8" />
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Link
            href="https://twitch.tv/YourChannel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitch className="w-8 h-8" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 opacity-70"></div>
    </div>
  );
}
