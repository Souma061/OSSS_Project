"use client"

import { CTASection } from "@/components/sections/CTASection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { Typography } from "@/components/ui/typography"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { projects } from "@/lib/data"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 px-4 md:px-6 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" className="mb-6">Our Best Work</Typography>
            <Typography variant="lead" className="max-w-2xl text-muted-foreground mx-auto">
              Case Studies showcasing our massive integrations, like Indian Railways, down to sleek startup MVPs.
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/portfolio/${project.id}`} passHref className="w-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted overflow-hidden mb-6 isolation-auto">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-black rounded-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-3 text-sm font-medium text-primary">
                  <span>{project.category}</span>
                </div>
                <Link href={`/portfolio/${project.id}`}>
                  <Typography variant="h3" className="group-hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </Typography>
                </Link>
                <Typography variant="muted" className="text-muted-foreground text-base">
                  {project.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Feedback Section */}
      <TestimonialsSection title="Client Feedback" subtitle="Transformative software solutions tailored for various business needs." />

      {/* CTA */}
      <CTASection />

    </div>
  )
}
