"use client";
import { CTASection } from "@/components/sections/CTASection";
import { Typography } from "@/components/ui/typography";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Product Manager",
    image:
      "https://images.unsplash.com/photo-1723092514593-3cbe7e7e1258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwZW9wbGVzJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    bio: "Over 15 years of experience building scalable enterprise software solutions.",
  },
  {
    name: "Aisha Sharma",
    role: "Head of Product Design",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate about creating intuitive and visually stunning user experiences.",
  },
  {
    name: "Rahul Verma",
    role: "Senior Backend Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in distributed systems, cloud architecture, and high-performance APIs.",
  },
  {
    name: "Priya Patel",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Loves building interactive and dynamic web applications with modern frameworks.",
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Specializes in CI/CD pipelines, infrastructure as code, and cloud security.",
  },
  {
    name: "Akash Gupta",
    role: "Quality Assurance Lead",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Ensures that every product we deliver meets the highest standards of quality.",
  },
];
export default function TeamsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 overflow-hidden relative">
      {}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      {}
      <section className="relative px-4 md:px-6 container mx-auto max-w-6xl mb-24">
        {}
        <div className="absolute top-0 right-1/4 -z-10 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-primary/20 blur-[128px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
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
            Meet Our Experts
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="mb-6 leading-tight">
              The minds behind the{" "}
              <span className="text-primary font-black italic">magic</span>.
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="lead"
              className="text-muted-foreground mb-8 text-lg"
            >
              Our team consists of industry veterans and passionate innovators
              dedicated to building robust software solutions.
            </Typography>
          </motion.div>
        </motion.div>
      </section>
      {}
      <section className="w-full py-12 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 p-2"
              >
                {}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-20">
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-md text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
                    >
                      <Mail className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                {}
                <div className="px-4 pb-6 flex flex-col flex-1 text-center">
                  <Typography variant="h3" className="mb-1 text-foreground">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-primary font-medium mb-3"
                  >
                    {member.role}
                  </Typography>
                  <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <Typography
                    variant="p"
                    className="text-muted-foreground text-sm line-clamp-3"
                  >
                    {member.bio}
                  </Typography>
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
