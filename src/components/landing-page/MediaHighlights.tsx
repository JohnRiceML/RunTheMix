"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const subHighlights = [
  { title: "Run The Mix PrEVO Party - Street Fighter 6 Top 8  ",  videoUrl: "https://www.youtube.com/embed/fgZDWDOdHto" },
  { title: "Tekken 8 Top 16 - Midwest Mixfest Winter '24  ", videoUrl: "https://www.youtube.com/embed/CzMkK9V7-YU" },
  { title: "Guilty Gear Strive Top 16 - Midwest Mixfest Winter '24  ",  videoUrl: "https://www.youtube.com/embed/hfByCfXtSNk" },
  { title: "GrandBlue Fantasy: Versus Rising - Midwest Mixfest Winter '24  ", videoUrl: "https://www.youtube.com/embed/1o6-fKAFUro" },
];

export default function MediaHighlights() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Relive the Action
        </h2>

        {/* Main Highlight */}
        <div className="space-y-6 mb-16">
          <iframe
            src="https://www.youtube.com/embed/KRD74hW3SqE"
            title="Last Major Tournament Highlights"
            width="100%"
            height="360"
            className="rounded-2xl shadow-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">2.5M views</span>
            <span className="text-gray-400">45:21</span>
          </div>
        </div>

        {/* Sub Highlights */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
            Grand Finals Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subHighlights.map((highlight, index) => (
              <div key={index} className="space-y-4">
                <iframe
                  src={highlight.videoUrl}
                  title={highlight.title}
                  width="100%"
                  height="180"
                  className="rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="flex flex-col">
                  <h4 className="font-medium text-lg text-white">
                    {highlight.title}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    {/* <span>{highlight.views} views</span>
                    <span>{highlight.duration}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Watch More Highlights
          </Button>
        </div>
      </div>
    </section>
  );
}
