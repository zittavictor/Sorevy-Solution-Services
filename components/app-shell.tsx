"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Header } from "@/components/header"
import {
  LayoutDashboard,
  Calendar,
  Home,
  Wrench,
  Lightbulb,
  ShieldCheck,
  LineChart,
  MapPin,
  HelpCircle,
  Users,
  Settings,
  User,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
    { name: "Rooms", href: "/dashboard/rooms", icon: Home },
    { name: "Installation", href: "/dashboard/installation", icon: Wrench },
    { name: "Smart Devices", href: "/dashboard/smart-devices", icon: Lightbulb },
    { name: "Security", href: "/dashboard/security", icon: ShieldCheck },
    { name: "Monitoring", href: "/dashboard/monitoring", icon: LineChart },
    { name: "Location", href: "/dashboard/location", icon: MapPin },
    { name: "Support", href: "/dashboard/support", icon: HelpCircle },
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Account", href: "/dashboard/account", icon: User },
  ]

  const handleLogout = () => {
    // In a real app, this would handle logout logic
    window.location.href = "/login"
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-purple-50">
        <Sidebar className="hidden md:flex bg-white text-gray-700 border-r">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%2023%2C%202025%2C%2009_47_23%20AM-zHMgWNgplMWUVXKFMhx0C1vlvvF356.png"
                alt="Sorevy Logo"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className="hover:bg-gray-100 data-[active=true]:bg-purple-50 data-[active=true]:text-purple-600"
                  >
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 data-[active=true]:text-purple-600" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t">
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
              <div className="text-sm text-gray-500">
                <span>© 2025 Sorevy</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
          {isMobile && <MobileNavigation items={navigationItems} />}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
