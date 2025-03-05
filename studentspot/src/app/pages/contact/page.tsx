"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background m-6">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <MainNav />
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-6">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Your Message" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">contact@studentspot.com</p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    123 Student Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}