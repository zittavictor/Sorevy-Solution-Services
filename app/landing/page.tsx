import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Home } from "lucide-react"
import { LandingNav } from "@/components/landing-nav"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-grid-black/[0.02] bg-[center_top_1rem] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Connect with Professional <span className="text-purple-600">Handymen</span> in Nigeria
            </h1>
            <p className="text-xl text-muted-foreground max-w-[800px] mb-8">
              Sorevy connects you with skilled professionals for all your home service needs, from solar installation to
              plumbing, electrical work, and smart home automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-purple-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Sorevy?</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                We provide a seamless experience connecting you with the best handymen in Nigeria, with features
                designed to make your life easier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-purple-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Energy Monitoring</h3>
                  <p className="text-muted-foreground">
                    Track your energy production and usage in real-time with detailed analytics and insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-purple-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Security System</h3>
                  <p className="text-muted-foreground">
                    Protect your home with integrated security systems and real-time monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-purple-100 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Smart Home</h3>
                  <p className="text-muted-foreground">
                    Control your entire home with our smart home integration and automation features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 max-w-[600px] mx-auto mb-8">
              Join thousands of satisfied customers who have transformed their homes with Sorevy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Access Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-purple-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Have questions or need more information? Our team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="rounded-full w-10 h-10 bg-purple-100 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-purple-600"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+234 800 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-full w-10 h-10 bg-purple-100 flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-purple-600"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@sorevy.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="border-purple-200 focus-visible:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-purple-200 focus-visible:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                        className="border-purple-200 focus-visible:ring-purple-500"
                      />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2023%2C%202025%2C%2009_47_23%20AM-zHMgWNgplMWUVXKFMhx0C1vlvvF356.png"
                alt="Sorevy Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-purple-300 mb-4">
                Connecting you with professional handymen in Nigeria for all your home service needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/login" className="text-purple-300 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-purple-300 hover:text-white">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-purple-300 hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-300 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300">
            <p>&copy; 2025 Sorevy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
