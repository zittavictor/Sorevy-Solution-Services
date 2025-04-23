import { ArrowUpRight, BatteryMedium, Bolt, Lightbulb, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PageTitle } from "@/components/page-title"

export function Dashboard() {
  return (
    <div className="space-y-6">
      <PageTitle title="Dashboard" description="Overview of your system" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solar Production</CardTitle>
            <Bolt className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5 kWh</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +12% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
            <BatteryMedium className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="mt-2 h-2 w-full rounded-full bg-purple-100">
              <div className="h-2 rounded-full bg-purple-600" style={{ width: "78%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Savings</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-purple-600"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +18% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Smart Devices</CardTitle>
            <Lightbulb className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">92% operational</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader>
            <CardTitle>Upcoming Installations</CardTitle>
            <CardDescription>Your scheduled installations for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-200 text-purple-700">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Solar Panel Installation</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                    <p className="text-xs text-muted-foreground">12 Wuse Zone 5, Lagos, Nigeria</p>
                  </div>
                </div>
                <Badge className="bg-purple-600">Confirmed</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-200 text-purple-700">AO</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Smart Home Setup</p>
                    <p className="text-xs text-muted-foreground">Friday, 2:00 PM</p>
                    <p className="text-xs text-muted-foreground">8 Maitama District, Abuja, Nigeria</p>
                  </div>
                </div>
                <Badge className="bg-purple-600">Confirmed</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-200 text-purple-700">TS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Battery Backup Installation</p>
                    <p className="text-xs text-muted-foreground">Saturday, 11:30 AM</p>
                    <p className="text-xs text-muted-foreground">15 Garki Area 2, Abuja, Nigeria</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  Pending
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full hover:bg-purple-100 hover:text-purple-900 border-purple-200">
              View All Installations
            </Button>
          </CardFooter>
        </Card>
        <Card className="hover:shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] transition-shadow border-purple-100">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>System alerts that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border border-purple-100 p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">Battery backup low</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Battery level below 20%. Consider charging or reducing usage.
                </p>
                <Button
                  size="sm"
                  className="mt-2 w-full bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]"
                >
                  Resolve Issue
                </Button>
              </div>
              <div className="rounded-lg border border-purple-100 p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">Efficiency drop</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Solar panel efficiency has dropped by 15%. Cleaning may be required.
                </p>
                <Button
                  size="sm"
                  className="mt-2 w-full bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]"
                >
                  Schedule Cleaning
                </Button>
              </div>
              <div className="rounded-lg border border-purple-100 p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium">Firmware update</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">New firmware available for 3 smart devices.</p>
                <Button
                  size="sm"
                  className="mt-2 w-full bg-purple-600 hover:bg-purple-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]"
                >
                  Update Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
