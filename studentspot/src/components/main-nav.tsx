"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="" className="mr-6 flex  items-center space-x-2">
        <div className="relative h-12 w-12">
          <Image 
            src="/avathars/logo.jpg" 
            fill 
            className="object-cover rounded-full" 
            alt="Logo"
          />
        </div>
        <span className="hidden font-bold sm:inline-block">
          The Student Spot
        </span>
      </Link>
      <Link
        href="/pages/about"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </Link>
      
      <Link
        href="/pages/contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact
      </Link>
      <Link
        href="/pages/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Profile
      </Link>
    </nav>
  )
}