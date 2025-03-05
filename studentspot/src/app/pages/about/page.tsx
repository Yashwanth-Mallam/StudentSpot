"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function About() {
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
          <h1 className="text-4xl font-bold">About Student Spot</h1>
          
          <div className="grid gap-6">
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Student Spot is dedicated to connecting students with opportunities that shape their future. We believe in creating a platform where education meets opportunity, enabling students to discover their potential and build meaningful careers.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  We provide a comprehensive platform that connects students with internships, job opportunities, mentorship programs, and educational resources. Our goal is to bridge the gap between academic learning and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                  <li>Innovation in Education</li>
                  <li>Student Success</li>
                  <li>Community Building</li>
                  <li>Professional Growth</li>
                  <li>Inclusive Learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}