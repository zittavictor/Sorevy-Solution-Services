import { CalendarIcon, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTitle } from "@/components/page-title"

export function Schedule() {
  return (
    <div className="space-y-6">
      <PageTitle title="Schedule" description="Manage your appointments" />

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>April 2025</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="solar">Solar</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="interior">Interior Design</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </Button>
        </div>

        <Button className="bg-primary">Schedule New Appointment</Button>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-3">
            <CardTitle className="text-base">Today, April 23</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-lg border p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary">Solar</Badge>
                    <span className="text-sm font-medium">Solar Panel Maintenance</span>
                  </div>
                  <p className="text-xs text-muted-foreground">10:00 AM - 12:00 PM</p>
                  <p className="text-xs text-muted-foreground">12 Wuse Zone 5, Lagos, Nigeria</p>
                  <p className="text-xs text-muted-foreground">Technician: John Doe</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive hover:bg-destructive/10"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-3">
            <CardTitle className="text-base">Tomorrow, April 24</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-lg border p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500">Electrical</Badge>
                    <span className="text-sm font-medium">Home Wiring Inspection</span>
                  </div>
                  <p className="text-xs text-muted-foreground">9:00 AM - 11:00 AM</p>
                  <p className="text-xs text-muted-foreground">8 Maitama District, Lagos, Nigeria</p>
                  <p className="text-xs text-muted-foreground">Technician: Alice Johnson</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive hover:bg-destructive/10"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500">Plumbing</Badge>
                    <span className="text-sm font-medium">Water Heater Installation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">2:00 PM - 4:00 PM</p>
                  <p className="text-xs text-muted-foreground">15 Garki Area 2, Lagos, Nigeria</p>
                  <p className="text-xs text-muted-foreground">Technician: Samuel Okafor</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive hover:bg-destructive/10"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-3">
            <CardTitle className="text-base">Friday, April 25</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-lg border p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-500">Interior</Badge>
                    <span className="text-sm font-medium">Smart Home Design Consultation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">1:00 PM - 3:00 PM</p>
                  <p className="text-xs text-muted-foreground">22 Asokoro, Lagos, Nigeria</p>
                  <p className="text-xs text-muted-foreground">Designer: Fatima Ibrahim</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive hover:bg-destructive/10"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
