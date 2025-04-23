import { CreditCard, Lock, LogOut, History, Receipt, Shield, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { PageTitle } from "@/components/page-title"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function Account() {
  return (
    <div className="space-y-6">
      <PageTitle title="Account" description="Manage your account settings and preferences" />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-5">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="payment-methods"
            className="hidden md:block data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Payment Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" defaultValue="John Doe" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+234 800 123 4567" defaultValue="+234 800 123 4567" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="12 Wuse Zone 5, Lagos, Nigeria"
                    defaultValue="12 Wuse Zone 5, Lagos, Nigeria"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 bg-primary/5">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground">All features included</p>
                    <Badge className="mt-2 bg-primary">Active</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      ₦15,000<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Next billing date: May 23, 2025</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="outline" className="flex-1">
                  Change Plan
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 text-destructive border-destructive hover:bg-destructive/10"
                >
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-medium">Premium Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Apr 23, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₦15,000</p>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      Paid
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-medium">Premium Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Mar 23, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₦15,000</p>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      Paid
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Premium Plan - Monthly</p>
                    <p className="text-sm text-muted-foreground">Feb 23, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₦15,000</p>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      Paid
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <History className="mr-2 h-4 w-4" />
                View All Transactions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
                <Lock className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">SMS Authentication</h4>
                  <p className="text-sm text-muted-foreground">Receive a code via SMS to verify your identity</p>
                </div>
                <Switch checked={true} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Authenticator App</h4>
                  <p className="text-sm text-muted-foreground">
                    Use an authenticator app to generate verification codes
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Manage Security Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch checked={true} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">SMS Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                </div>
                <Switch checked={true} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
                <Bell className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/26</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Paystack</p>
                      <p className="text-sm text-muted-foreground">Connected to john@example.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                        <path d="M2 13h10" />
                        <path d="m9 16 3-3-3-3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Flutterwave</p>
                      <p className="text-sm text-muted-foreground">Connected to +234 800 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(124,58,237,0.6)]">
                Add Payment Method
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Receipt className="mr-2 h-4 w-4" />
                Manage Billing
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible account actions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Once you delete your account, there is no going back. This action cannot be undone and all your data will be
            permanently deleted.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Delete Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
