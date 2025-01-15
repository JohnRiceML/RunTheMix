import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Twitter, Twitch } from 'lucide-react'
import { DiscIcon as Discord } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Y7eIF06bofU?autoplay=1&mute=1&loop=1&playlist=Y7eIF06bofU&start=97"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; loop"
          allowFullScreen
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50" />

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <Gamepad2 className="h-12 w-12 text-purple-400" />
            <h1 className="ml-3 text-3xl font-extrabold sm:text-5xl">
              Run the Mix
            </h1>
          </div>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed lg:mx-0 mx-auto">
            Your weekly dose of competitive gaming action. Join the elite, showcase your skills, and dominate the leaderboards.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center lg:justify-start">
            <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" className="w-full sm:w-auto border-purple-400 text-purple-400 hover:bg-purple-400/10">
              View Schedule
            </Button>
          </div>

          {/* Social Media Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Button variant="ghost" size="icon" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">X (Twitter)</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10">
              <Discord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-400 hover:text-purple-300 hover:bg-purple-400/10">
              <Twitch className="h-5 w-5" />
              <span className="sr-only">Twitch</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 animate-gradient-x" />
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-500 to-purple-400 animate-gradient-y" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-400 to-blue-500 animate-gradient-y" />
    </div>
  )
}
