"use client"

import { Typography } from "@/components/ui/typography"
import { motion } from "framer-motion"
import { ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Indian Railways Operations Dashboard",
    category: "Enterprise System Integration",
    description: "A comprehensive dashboard for monitoring train schedules, crew management, and resource allocation across multiple zones in real-time.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "NexLogix Supply Chain Platform",
    category: "Logistics SaaS MVP",
    description: "Cloud-based B2B platform managing end-to-end supply chain logistics, reducing operational overhead by 30% for early adopters.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "HealthSync Telemedicine App",
    category: "Healthcare Mobile App",
    description: "Secure, HIPAA-compliant patient portal connecting users with specialists via video consultations and electronic health record integration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "FinVault Banking Portal",
    category: "Fintech Web Application",
    description: "Next-generation corporate banking interface with advanced analytics, multi-currency wallets, and automated reconciliation features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "EduCore Learning Management",
    category: "EdTech Platform",
    description: "Scalable virtual classroom environment supporting 50k+ concurrent users with interactive video streaming and AI-graded assignments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "AgriSmart IoT Dashboard",
    category: "IoT & Data Visualization",
    description: "Real-time crop monitoring system aggregating data from thousands of soil sensors to optimize water usage and predict harvest yields.",
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop",
  }
]

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
      <section className="w-full py-24 px-4 md:px-6 mt-16 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" className="mb-4">Client Feedback</Typography>
              <Typography variant="muted" className="text-muted-foreground max-w-xl mx-auto">
                Transformative software solutions tailored for various business needs.
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Review 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#EAF5FD] rounded-2xl p-8 lg:p-12 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-slate-900 text-slate-900" />
                ))}
              </div>
              <Typography variant="p" className="text-slate-900/90 mb-10 flex-grow text-lg">
                "Incredible service from Om Sai! Their integrated systems have streamlined our processes, making operations smoother than ever. Highly recommend them for any custom software needs."
              </Typography>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="Anita Roy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <Typography variant="large" className="font-semibold text-slate-900 m-0">Anita Roy</Typography>
                  <Typography variant="small" className="text-slate-600">Kolkata, India</Typography>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#EAF5FD] rounded-2xl p-8 lg:p-12 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-slate-900 text-slate-900" />
                ))}
              </div>
              <Typography variant="p" className="text-slate-900/90 mb-10 flex-grow text-lg">
                "Om Sai Software Solution exceeded our expectations with their innovative approach and reliability. Their customized solutions significantly improved our efficiency."
              </Typography>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Ravi Sharma" className="w-full h-full object-cover" />
                </div>
                <div>
                  <Typography variant="large" className="font-semibold text-slate-900 m-0">Ravi Sharma</Typography>
                  <Typography variant="small" className="text-slate-600">Kolkata, India</Typography>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}
