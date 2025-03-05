"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Users, BookOpen, Plus, Minus } from "lucide-react";
import { Twitter, Linkedin, Instagram, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const MotionSpan = dynamic(
  () => import("framer-motion").then(mod => mod.motion.span),
  { ssr: false }
);
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col m-4">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
          <div className="absolute top-6 right-6">
            <ThemeToggle />
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container flex flex-col items-center text-center"
          >
            {/* Logo */}
            <MotionDiv
              variants={itemVariants}
              className="relative h-24 w-24 mb-6"
            >
              <Image
                src="/avathars/logo.jpg"
                alt="The Student Spot Logo"
                fill
                className="rounded-full object-contain shadow-lg"
              />
            </MotionDiv>

            {/* Title with Animated Hand Wave */}
            <MotionDiv variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 flex items-center">
              <MotionSpan
                animate={{
                  rotate: [0, 10, 20, 0, -20, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                👋
              </MotionSpan>
              &nbsp;Welcome to{" "}
              <span className="text-primary">&nbsp;The Student Spot</span>
            </MotionDiv>

            {/* Subtitle */}
            <MotionDiv
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mb-8"
            >
              Unlock career opportunities, connect with professionals, and
              access exclusive resources to shape your future.{" "}
              <span className="text-primary font-medium">
                Let's grow together!
              </span>
            </MotionDiv>

            {/* Buttons */}
            <MotionDiv
              variants={itemVariants}
              className="flex gap-4"
            >
              <Link href="/pages/signup">
                <Button size="lg">Join Now</Button>
              </Link>
              <Link href="/pages/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </MotionDiv>
          </MotionDiv>
        </section>
        {/* World Map Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-48 mt-4 rounded-lg bg-muted"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/avathars/worldmap.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
          </div>

          <div className="relative container flex flex-col items-center justify-center text-center text-white">
            <MotionDiv
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-6"
            >
              World's Largest Growing Community
            </MotionDiv>

            <MotionDiv
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-sm"
            >
              Connecting people globally to learn, grow, and innovate together.
            </MotionDiv>

            <MotionDiv
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[109%] left-[71%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <MapPin className="h-6 w-6 text-red-500 drop-shadow-lg" />
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Features Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 container"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  backgroundColor: "var(--background)",
                }}
                className="p-6 rounded-lg border bg-card transition-all duration-300 hover:border-primary cursor-pointer"
              >
                <feature.icon className="h-12 w-12 mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Testimonials Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 container"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                className="p-6 rounded-lg border bg-card transition-all duration-300 hover:border-primary"
              >
                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* FAQ Section */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 container"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-4 w-4 text-primary" />
                  ) : (
                    <Plus className="h-4 w-4 text-primary" />
                  )}
                </button>
                <MotionDiv
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </main>

      <footer className="border-t">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center text-center">
            {/* Company Section */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section with Icons */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/rajkamalprls/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/the_studentspot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="h-5 w-5 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <span>Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 The Student Spot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Career Opportunities",
    description: "Access thousands of job listings and internship opportunities tailored for students.",
    icon: GraduationCap,
  },
  {
    title: "Professional Network",
    description: "Connect with industry professionals, mentors, and fellow students.",
    icon: Users,
  },
  {
    title: "Learning Resources",
    description: "Access comprehensive learning materials, guides, and career development resources.",
    icon: BookOpen,
  },
];

const testimonials = [
  {
    content: "The Student Spot helped me land my dream internship at a top tech company. The resources and connections are invaluable!",
    name: "𝐑𝐚𝐣𝐤𝐚𝐦𝐚𝐥 𝐏𝐚𝐧𝐭𝐡𝐚𝐠𝐚𝐧𝐢",
    role: "Computer Science Student",
    avatar: "/avathars/rajj.jpg",
  },
  {
    content: "As a career mentor, I've found The Student Spot to be an excellent platform for connecting with ambitious students.",
    name: "Michael Rodriguez",
    role: "Senior Software Engineer",
    avatar: "/avathars/priya.jpg",
  },
  {
    content: "The career resources and guidance available here made my job search process so much easier and more effective.",
    name: "Priya Patel",
    role: "Recent Graduate",
    avatar: "/avathars/yash.jpg",
  },
];

const faqs = [
  {
    question: "What is The Student Spot?",
    answer: "The Student Spot is a comprehensive platform designed to help students and recent graduates connect with career opportunities, professional mentors, and educational resources. We bridge the gap between education and professional success.",
  },
  {
    question: "Is The Student Spot free to use?",
    answer: "Yes, The Student Spot offers a free basic membership that gives you access to job listings, basic networking features, and learning resources. We also offer premium plans with advanced features for those who want to maximize their career potential.",
  },
  {
    question: "How can I find job opportunities?",
    answer: "Once you create an account, you can browse our job board, filter opportunities by location, industry, and experience level, and apply directly through our platform. Our smart matching system also recommends relevant positions based on your profile.",
  },
  {
    question: "Can I connect with mentors?",
    answer: "Absolutely! Our platform allows you to connect with industry professionals who are passionate about mentoring students. You can search for mentors based on their industry, expertise, and experience level.",
  },
  {
    question: "What kind of resources are available?",
    answer: "We offer a wide range of resources including resume templates, interview preparation guides, industry insights, skill development courses, and career planning tools. All resources are curated by experts to ensure quality and relevance.",
  },
];