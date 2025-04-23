import { LineChart, BarChart, Battery, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/page-title"

export function Monitoring() {
  return (
    <div className="space-y-6">
      <PageTitle title="Monitoring" description="Track your energy production and usage" />

      <Tabs defaultValue="daily" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Apr 23, 2025
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="daily" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Energy Production</CardTitle>
                <CardDescription>Solar panel output in kWh</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div>
                  <p className="text-sm font-medium">Total Today</p>
                  <p className="text-2xl font-bold">24.5 kWh</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Peak</p>
                  <p className="text-2xl font-bold">4.2 kWh</p>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Battery Levels</CardTitle>
                <CardDescription>Battery charge percentage over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div>
                  <p className="text-sm font-medium">Current Level</p>
                  <div className="flex items-center gap-2">
                    <Battery className="h-5 w-5 text-primary" />
                    <p className="text-2xl font-bold">78%</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Estimated Runtime</p>
                  <p className="text-2xl font-bold">14h</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Monthly Savings</CardTitle>
                <CardDescription>Financial savings from solar energy</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px] w-full flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div>
                  <p className="text-sm font-medium">This Month</p>
                  <p className="text-2xl font-bold">₦45,231</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Last Month</p>
                  <p className="text-2xl font-bold">₦38,450</p>
                </div>
                <div>
                  <p className="text-sm font-medium">YTD Savings</p>
                  <p className="text-2xl font-bold">₦156,780</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weekly" className="mt-4">
          <div className="flex items-center justify-center h-[400px] border rounded-lg">
            <p className="text-muted-foreground">Weekly data visualization would appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="mt-4">
          <div className="flex items-center justify-center h-[400px] border rounded-lg">
            <p className="text-muted-foreground">Monthly data visualization would appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
