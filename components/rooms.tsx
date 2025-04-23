import { Plus, Pencil, Trash2, Lightbulb, Thermometer, Tv, Fan } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTitle } from "@/components/page-title"

export function Rooms() {
  return (
    <div className="space-y-6">
      <PageTitle title="Rooms" description="Manage your rooms and connected devices" />

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Rooms</h2>
        <Button className="bg-primary hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
          <Plus className="mr-2 h-4 w-4" />
          Add Room
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Living Room</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart Lights (3)</span>
                </div>
                <Badge variant="outline" className="text-green-500">
                  On
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart Thermostat</span>
                </div>
                <Badge variant="outline" className="text-green-500">
                  24°C
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tv className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart TV</span>
                </div>
                <Badge variant="outline" className="text-red-500">
                  Off
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-muted-foreground">Energy Usage</span>
              <span className="text-sm font-medium">1.2 kWh/day</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Kitchen</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart Lights (2)</span>
                </div>
                <Badge variant="outline" className="text-red-500">
                  Off
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <path d="M4 19h16"></path>
                    <path d="M4 15h16"></path>
                    <path d="M4 11h16"></path>
                    <path d="M4 7h16"></path>
                  </svg>
                  <span className="text-sm">Smart Refrigerator</span>
                </div>
                <Badge variant="outline" className="text-green-500">
                  On
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <path d="M3 7h18"></path>
                    <path d="M12 7v10"></path>
                    <path d="M3 17h18"></path>
                  </svg>
                  <span className="text-sm">Smart Oven</span>
                </div>
                <Badge variant="outline" className="text-red-500">
                  Off
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-muted-foreground">Energy Usage</span>
              <span className="text-sm font-medium">2.8 kWh/day</span>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Bedroom</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart Lights (2)</span>
                </div>
                <Badge variant="outline" className="text-red-500">
                  Off
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Fan className="h-4 w-4 text-primary" />
                  <span className="text-sm">Smart Fan</span>
                </div>
                <Badge variant="outline" className="text-green-500">
                  On
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-primary"
                  >
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <polyline points="17 2 12 7 7 2"></polyline>
                  </svg>
                  <span className="text-sm">Smart Curtains</span>
                </div>
                <Badge variant="outline" className="text-red-500">
                  Closed
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-muted-foreground">Energy Usage</span>
              <span className="text-sm font-medium">0.8 kWh/day</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
