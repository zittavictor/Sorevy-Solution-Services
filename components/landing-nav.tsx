"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2023%2C%202025%2C%2009_47_23%20AM-zHMgWNgplMWUVXKFMhx0C1vlvvF356.png"
            alt="Sorevy Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-600">
            Features
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-purple-600">
            Services
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-purple-600">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-purple-600">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-purple-600">
            Contact
          </Link>
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t flex flex-col gap-3">
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
