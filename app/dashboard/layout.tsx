import type React from "react"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Dashboard | Sorevy",
  description: "Sorevy dashboard for managing your smart home and services",
}

// This is a simplified auth check for demonstration
// In a real app, you would use a proper auth solution
function getUser() {
  // This would be replaced with actual auth logic
  // For demo purposes, we'll assume the user is logged in
  return { isLoggedIn: true }
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = getUser()

  // If not logged in, redirect to login page
  if (!user.isLoggedIn) {
    redirect("/login")
  }

  return <>{children}</>
}
