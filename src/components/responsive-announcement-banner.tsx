"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

interface ResponsiveAnnouncementBannerProps {
  message: string;
  link: string;
  linkText: string;
}

export default function ResponsiveAnnouncementBanner({
  message,
  link,
  linkText,
}: ResponsiveAnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get the current day in Minnesota time
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Chicago",
      weekday: "long", // Explicitly set to a valid type
    };
    const dayInMinnesota = new Intl.DateTimeFormat("en-US", options).format(now);

    if (dayInMinnesota === "Wednesday") {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p className="ml-3 font-medium truncate">
              <span className="md:hidden">{message.split(" ").slice(0, 5).join(" ")}...</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={link}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              {linkText}
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              onClick={() => setIsVisible(false)}
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
