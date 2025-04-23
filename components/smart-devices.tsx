import { Search, Filter, Power, RefreshCw, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { PageTitle } from "@/components/page-title"

export function SmartDevices() {
  return (
    <div className="space-y-6">
      <PageTitle title="Smart Devices" description="Manage your connected devices" />

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search devices..." className="w-full pl-8 md:w-[300px]" />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex gap-2 w-full md:w-auto">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button className="bg-primary w-full md:w-auto">
            <Power className="mr-2 h-4 w-4" />
            Toggle All
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Living Room Lights</CardTitle>
              <CardDescription>Phillips Hue</CardDescription>
            </div>
            <Switch checked={true} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-500">Online</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 2 mins ago</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Smart Thermostat</CardTitle>
              <CardDescription>Nest</CardDescription>
            </div>
            <Switch checked={true} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-500">Online</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 5 mins ago</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Smart TV</CardTitle>
              <CardDescription>Samsung</CardDescription>
            </div>
            <Switch checked={false} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant="outline" className="text-amber-500 border-amber-500">
                Firmware Update Available
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 1 hour ago</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Smart Refrigerator</CardTitle>
              <CardDescription>LG</CardDescription>
            </div>
            <Switch checked={true} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-500">Online</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 30 mins ago</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Smart Fan</CardTitle>
              <CardDescription>Dyson</CardDescription>
            </div>
            <Switch checked={true} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-500">Online</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 15 mins ago</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Smart Curtains</CardTitle>
              <CardDescription>Lutron</CardDescription>
            </div>
            <Switch checked={false} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant="outline" className="text-red-500 border-red-500">
                Offline
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-3 w-3" />
              Configure
            </Button>
            <span className="text-xs text-muted-foreground">Last updated: 2 days ago</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
