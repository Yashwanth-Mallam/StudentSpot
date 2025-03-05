"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Bell, BookOpen, Briefcase, Users, Calendar } from "lucide-react"
import Image from "next/image"
import { MessageCircle, Linkedin, Instagram } from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen w-full bg-background ">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <MainNav />
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Welcome back, Rajkamal!</h1>
            <Button>Complete Profile</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Applied Jobs
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Connections
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Events
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="opportunities" className="space-y-4">
            <TabsList className="flex justify-center w-full">
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="opportunities" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {opportunities.map((opportunity, index) => (
                  <Card key={index} className="transition-all duration-300 hover:border-2">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12">
                          <Image
                            src={opportunity.companyLogo}
                            alt={opportunity.company}
                            fill
                            className="rounded-lg object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                          <CardDescription>{opportunity.company}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{opportunity.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{opportunity.location}</span>
                        <Button>Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="connections" className="space-y-4">
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {connections.map((connection, index) => (
      <Card key={index} className="transition-all duration-300 hover:border-2">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12">
              <Image
                src={connection.avatar}
                alt={connection.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{connection.name}</CardTitle>
              <CardDescription>{connection.role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{connection.company}</p>
          <a href={connection.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">Connect</Button>
          </a>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource, index) => (
                  <Card key={index} className="transition-all duration-300 hover:border-2">
                    <CardHeader>
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full h-12 w-12">
                        {resource.icon}
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription>{resource.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">Access Resource</Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const opportunities = [
  {
    "title": "Web Development Intern",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Assist in developing and maintaining web applications using modern technologies like React, Next.js, and Tailwind CSS.",
    "location": "San Francisco, CA"
  },
  {
    "title": "Content Creator",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Develop engaging and informative content for blogs, social media, and promotional materials.",
    "location": "Remote"
  },
  {
    "title": "UX Designer",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Design user-friendly interfaces, conduct user research, and enhance the overall user experience of our products.",
    "location": "New York, NY"
  },
  {
    "title": "Frontend Developer",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Develop responsive and interactive UI components using React, Tailwind CSS, and other frontend technologies.",
    "location": "New York, NY"
  },
  {
    "title": "Backend Developer",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Build and maintain APIs, manage databases, and ensure efficient backend operations using Node.js and MongoDB.",
    "location": "New York, NY"
  },
  {
    "title": "Campus Ambassador",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Promote Student Spot at your university, engage students, and organize events to expand our community.",
    "location": "Multiple Locations"
  },
  {
    "title": "Social Media Manager",
    "company": "Student Spot",
    "companyLogo": "/avathars/logo.jpg",
    "description": "Manage our social media platforms, create engaging content, and increase audience engagement.",
    "location": "New York, NY"
  }
]

const connections = [
  {
    name: "Rajkamal Panthagani",
    role: "The Founder of Student Spot",
    company: "Student Spot",
    avatar: "/avathars/raj.jpg",
    linkedin: "https://www.linkedin.com/in/rajkamalprls/", 
  },
  {
    name: "Mallam Yashwanth",
    role: "Senior Software Engineer",
    company: "Student Spot",
    avatar: "/avathars/yash.jpg",
    linkedin: "https://www.linkedin.com/in/yashwanth-mallam-55551a261/?originalSubdomain=in", 
  }
];


const resources = [
  {
    title: "WhatsApp Group",
    type: "Community",
    description: "Join our WhatsApp community for career discussions and updates.",
    link: "https://chat.whatsapp.com/your-group-link",
    icon: <MessageCircle className="text-green-500 h-8 w-8" />,
  },
  {
    title: "LinkedIn",
    type: "Professional Network",
    description: "Connect with us on LinkedIn to expand your professional network.",
    link: "https://www.linkedin.com/in/rajkamalprls",
    icon: <Linkedin className="text-blue-600 h-8 w-8" />,
  },
  {
    title: "Instagram",
    type: "Social Media",
    description: "Follow us on Instagram for the latest updates and insights.",
    link: "https://www.instagram.com/the_studentspot/",
    icon: <Instagram className="text-pink-500 h-8 w-8" />,
  },
]