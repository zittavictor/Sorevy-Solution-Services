import { Shield, Camera, Bell, AlertTriangle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { PageTitle } from "@/components/page-title"

export function Security() {
  return (
    <div className="space-y-6">
      <PageTitle title="Security" description="Manage your security system" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Alarm System</CardTitle>
              <CardDescription>Main security system</CardDescription>
            </div>
            <Switch checked={true} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge className="bg-green-500">Armed</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last Triggered</span>
              <span className="text-sm">Never</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Shield className="mr-2 h-3 w-3" />
              Disarm
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-3 w-3" />
              Test Alarm
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Emergency Contacts</CardTitle>
              <CardDescription>Who to call in emergencies</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Police</span>
                </div>
                <span className="text-sm">112</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Fire Department</span>
                </div>
                <span className="text-sm">112</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Medical Emergency</span>
                </div>
                <span className="text-sm">112</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-3 w-3" />
              Add Contact
            </Button>
            <Button variant="outline" size="sm">
              <AlertTriangle className="mr-2 h-3 w-3" />
              Test Emergency Call
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-base">Security Logs</CardTitle>
              <CardDescription>Recent security events</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex flex-col gap-1 border-b pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Front Door Opened</span>
                  <Badge variant="outline">Today, 8:32 AM</Badge>
                </div>
                <span className="text-xs text-muted-foreground">User: John Doe</span>
              </div>
              <div className="flex flex-col gap-1 border-b pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Motion Detected</span>
                  <Badge variant="outline">Today, 7:15 AM</Badge>
                </div>
                <span className="text-xs text-muted-foreground">Location: Backyard</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Armed</span>
                  <Badge variant="outline">Yesterday, 10:45 PM</Badge>
                </div>
                <span className="text-xs text-muted-foreground">User: John Doe</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" size="sm" className="w-full">
              View All Logs
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-lg font-medium mt-6">Camera Feeds</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Front Door</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Camera className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4">
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-3 w-3" />
              Live View
            </Button>
            <Button variant="outline" size="sm">
              View Recordings
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Backyard</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Camera className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4">
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-3 w-3" />
              Live View
            </Button>
            <Button variant="outline" size="sm">
              View Recordings
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Living Room</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Camera className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4">
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-3 w-3" />
              Live View
            </Button>
            <Button variant="outline" size="sm">
              View Recordings
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
