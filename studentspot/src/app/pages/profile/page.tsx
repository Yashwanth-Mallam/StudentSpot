"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Briefcase, GraduationCap, Award, Star } from "lucide-react"

export default function Profile() {
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
          <div className="flex items-center space-x-4">
            <div className="relative h-24 w-24">
              <Image
                src="/avathars/raj.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Rajkamal Panthagani</h1>
              <p className="text-xl text-muted-foreground">Founder at Student Spot</p>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    Passionate about connecting students with opportunities and building a community that empowers the next generation of leaders. Experienced in web development, community building, and educational technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Web Development", "Leadership", "Community Building", "React", "Next.js", "TypeScript", "Node.js"].map((skill) => (
                      <div key={skill} className="rounded-full bg-secondary px-3 py-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-4">
              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Founder & CEO</h3>
                    <p className="text-muted-foreground">Student Spot • 2023 - Present</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-muted-foreground">Tech Company • 2021 - 2023</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Master's in Computer Science</h3>
                    <p className="text-muted-foreground">University Name • 2019 - 2021</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bachelor's in Computer Science</h3>
                    <p className="text-muted-foreground">University Name • 2015 - 2019</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card className="transition-all duration-300 hover:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Awards & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Best Student Startup Award</h3>
                    <p className="text-muted-foreground">Startup Competition 2023</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Development Certification</h3>
                    <p className="text-muted-foreground">Tech Academy • 2022</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}