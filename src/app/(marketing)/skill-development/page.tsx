"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Typography } from "@/components/ui/typography";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  Database,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const courses = [
  {
    title: "Full-Stack Web Development",
    description:
      "Learn to build modern, scalable web applications from scratch using the MERN stack.",
    icon: <MonitorPlay className="w-6 h-6" />,
    duration: "12 Weeks",
    level: "Beginner to Advanced",
  },
  {
    title: "Mobile App Development",
    description:
      "Master React Native and Flutter to build cross-platform mobile applications.",
    icon: <Code className="w-6 h-6" />,
    duration: "10 Weeks",
    level: "Intermediate",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Dive deep into data analysis, visualization, and machine learning with Python.",
    icon: <Database className="w-6 h-6" />,
    duration: "16 Weeks",
    level: "Advanced",
  },
  {
    title: "Cyber Security Fundamentals",
    description:
      "Understand the core concepts of network security, ethical hacking, and threat mitigation.",
    icon: <ShieldCheck className="w-6 h-6" />,
    duration: "8 Weeks",
    level: "Beginner",
  },
];
const internships = [
  {
    title: "Software Engineering Summer Internship",
    description:
      "Join our core engineering team to build scalable systems. You will work on real-world projects and get mentored by industry veterans.",
    tags: ["Frontend", "Backend", "Agile"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design Internship",
    description:
      "Collaborate with our design team to create user-centric interfaces. Gain experience in wireframing, prototyping, and user testing.",
    tags: ["Figma", "Research", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
  },
];
export default function SkillDevelopmentPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 overflow-hidden relative">
      {}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      {}
      <section className="relative px-4 md:px-6 container mx-auto max-w-6xl mb-24">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/20 blur-[128px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6"
          >
            Grow With Us
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="mb-6 leading-tight">
              Empowering the next generation of{" "}
              <span className="text-primary font-black italic">Innovators</span>
              .
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="lead"
              className="text-muted-foreground mb-8 text-lg"
            >
              Explore our comprehensive courses and hands-on internship programs
              designed to accelerate your career in tech.
            </Typography>
          </motion.div>
        </motion.div>
      </section>
      {}
      <section className="w-full py-16 px-4 md:px-6 bg-muted/30 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-8 h-8 text-primary" />
            <Typography variant="h2" className="m-0">
              Our Courses
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  {course.icon}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {course.icon}
                </div>
                <Typography
                  variant="h4"
                  className="mb-3 text-foreground line-clamp-2"
                >
                  {course.title}
                </Typography>
                <Typography
                  variant="p"
                  className="text-muted-foreground text-sm mb-6 line-clamp-3"
                >
                  {course.description}
                </Typography>
                <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium text-primary">
                      {course.level}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full block text-center py-2.5 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Join Course
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {}
      <section className="w-full py-24 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="w-8 h-8 text-primary" />
            <Typography variant="h2" className="m-0">
              Internship Programs
            </Typography>
          </div>
          <div className="flex flex-col gap-12">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
              >
                {}
                <div className="flex-1 w-full relative">
                  <div className="aspect-video w-full rounded-3xl overflow-hidden border border-border bg-muted shadow-2xl relative group">
                    <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <Image
                      src={internship.image}
                      alt={internship.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                </div>
                {}
                <div className="flex-1 w-full space-y-6">
                  <Typography variant="h3" className="mb-2">
                    {internship.title}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-muted-foreground text-lg"
                  >
                    {internship.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {internship.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl active:scale-95 transform duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {}
      <CTASection />
    </div>
  );
}
