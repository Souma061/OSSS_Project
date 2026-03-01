"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, MessageSquare, ShieldCheck, Train } from "lucide-react"
import Link from "next/link"



export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* 1. Header Section */}
      <section className="px-4 md:px-6 container mx-auto max-w-5xl text-center mb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
            What We Do
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="mb-6 leading-tight max-w-4xl mx-auto">
              Custom Software Solutions built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Unprecedented Scale.</span>
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="lead" className="max-w-2xl text-muted-foreground mx-auto">
              We don't just write code; we architect systems. From high-throughput APIs to immersive user interfaces, our solutions drive operational excellence.
            </Typography>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Services Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="md:col-span-2 lg:col-span-1 relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <Code2 className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
            <Typography variant="h3" className="mb-3 transition-colors group-hover:text-primary">Tailor-Made Solutions</Typography>
            <Typography variant="muted" className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
              Custom software development tailored explicitly to your operational bottlenecks. We build robust, scalable applications from startups to large organizations, ensuring absolute reliability.
            </Typography>
            <ul className="flex flex-wrap gap-2 mt-auto mb-6 text-sm text-muted-foreground">
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Enterprise Web Apps</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Scalable APIs</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Legacy Modernization</li>
            </ul>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="md:col-span-1 lg:col-span-1 relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <ShieldCheck className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6" />
            <Typography variant="h3" className="mb-3 transition-colors group-hover:text-primary">System Integration</Typography>
            <Typography variant="muted" className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
              Seamlessly connect disparate tools and platforms. We build custom middleware and data pipelines that bridge the gaps in your technology stack, eliminating data silos.
            </Typography>
            <ul className="flex flex-wrap gap-2 mt-auto mb-6 text-sm text-muted-foreground">
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Custom Middleware</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">3rd-Party APIs</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Data Pipelines</li>
            </ul>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="md:col-span-1 lg:col-span-1 relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <Cpu className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-6" />
            <Typography variant="h3" className="mb-3 transition-colors group-hover:text-primary">Reliable Tools</Typography>
            <Typography variant="muted" className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
              Efficient, targeted software tools designed to empower internal operations and meet specific, highly technical client needs with precision and minimal overhead.
            </Typography>
            <ul className="flex flex-wrap gap-2 mt-auto mb-6 text-sm text-muted-foreground">
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">DevOps Auto</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Internal Dashboards</li>
              <li className="font-mono text-xs font-semibold bg-muted/50 px-2.5 py-1 rounded-md text-foreground border border-border/50">Performance Ops</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 3. Featured Integration Case Study */}
      <section className="w-full bg-muted/30 border-y border-border py-24 px-4 md:px-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-primary font-semibold mb-6">
                <Train className="h-8 w-8" />
                <span className="uppercase tracking-widest text-sm">Featured Integration</span>
              </div>
              <Typography variant="h2" className="mb-6">Empowering Indian Railways.</Typography>
              <Typography variant="lead" className="text-muted-foreground mb-8">
                We're incredibly proud to provide custom software solutions that enhance operational efficiency for one of the world's largest transportation networks.
              </Typography>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">✓</div>
                  <Typography variant="p" className="text-muted-foreground m-0">Massive-scale resource allocation dashboards.</Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">✓</div>
                  <Typography variant="p" className="text-muted-foreground m-0">Real-time scheduling and crew management nodes.</Typography>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">✓</div>
                  <Typography variant="p" className="text-muted-foreground m-0">Fault-tolerant backend architecture handling millions of events.</Typography>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link href="/portfolio/1">
                  <Button variant="gradient" size="lg" className="rounded-full shadow-lg group/btn h-14 px-8">
                    View the Case Study <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Interactive Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop"
                alt="Indian Railways"
                className="w-full h-full object-cover filter brightness-75 transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" className="mb-6">Ready to scale your operations?</Typography>
          <Typography variant="lead" className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our custom software solutions can specifically address your unique business bottlenecks.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 text-md group/btn shadow-xl">
                <MessageSquare className="mr-2 h-5 w-5" /> Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
