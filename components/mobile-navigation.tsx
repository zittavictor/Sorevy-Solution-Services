"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavigationProps {
  items: {
    name: string
    href: string
    icon: LucideIcon
  }[]
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const pathname = usePathname()

  // Only show the first 5 items in the mobile navigation
  const visibleItems = items.slice(0, 5)

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white text-gray-700 border-t shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {visibleItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs",
                isActive ? "text-purple-600 bg-purple-50" : "text-gray-500 hover:text-purple-600 hover:bg-gray-100",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
