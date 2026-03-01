"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Code2, Cpu, ShieldCheck, Star, Train } from "lucide-react"
import Link from "next/link"

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-6">
        {/* Subtle Background Grid/Gradients */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-primary/20 blur-[128px] rounded-full translate-x-[-50%]"></motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }} className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-blue-500/20 blur-[128px] rounded-full translate-x-[50%]"></motion.div>

        <motion.div
          className="container max-w-5xl mx-auto text-center flex flex-col items-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            15+ Years of Proven Expertise
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 leading-tight">
              Tailor-Made Software <br className="hidden md:block" /> Solutions for Your Business
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="lead" className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Empowering operations with innovative software tailored to your unique needs and industry requirements. Based in Kolkata, we deliver reliable solutions for startups and enterprise giants alike.
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="gradient" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-md group">
                Start a Project <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-md backdrop-blur-sm bg-background/50 transition-colors hover:bg-background/80">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Image */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-5xl mx-auto mt-16 relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 cursor-pointer group/hero"
          >
            <Link href="/portfolio/4" className="absolute inset-0 z-30"></Link>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full relative rounded-xl overflow-hidden bg-muted shadow-inner transition-transform duration-700 group-hover/hero:scale-[1.01]"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. "Trusted By" Infinite Marquee */}
      <section className="w-full py-12 border-y border-border bg-muted/30 overflow-hidden flex flex-col items-center">
        <Typography variant="muted" className="mb-6 uppercase tracking-widest font-semibold">
          Trusted by 150+ Clients Including
        </Typography>
        <div className="relative flex w-full max-w-[100vw] overflow-hidden group">
          <ul className="flex animate-marquee items-center gap-16 py-4 whitespace-nowrap min-w-full">
            {/* Indian Railways is highlighted */}
            <li className="flex items-center gap-2 font-bold text-2xl text-foreground">
              <Train className="h-8 w-8 text-primary" /> INDIAN RAILWAYS
            </li>
            <li className="font-semibold text-xl text-muted-foreground/50">TECHCORP</li>
            <li className="font-semibold text-xl text-muted-foreground/50">NEXUS LOGISTICS</li>
            <li className="font-semibold text-xl text-muted-foreground/50">GLOBEX</li>
            <li className="font-semibold text-xl text-muted-foreground/50">APEX SYSTEMS</li>
          </ul>
          {/* Duplicate for infinite loop effect */}
          <ul className="flex animate-marquee items-center gap-16 py-4 whitespace-nowrap min-w-full absolute top-0 -translate-x-[100%]">
            <li className="flex items-center gap-2 font-bold text-2xl text-foreground">
              <Train className="h-8 w-8 text-primary" /> INDIAN RAILWAYS
            </li>
            <li className="font-semibold text-xl text-muted-foreground/50">TECHCORP</li>
            <li className="font-semibold text-xl text-muted-foreground/50">NEXUS LOGISTICS</li>
            <li className="font-semibold text-xl text-muted-foreground/50">GLOBEX</li>
            <li className="font-semibold text-xl text-muted-foreground/50">APEX SYSTEMS</li>
          </ul>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="w-full py-24 bg-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-white text-white" />
              ))}
            </div>
            <Typography variant="h3" className="text-2xl md:text-4xl font-normal leading-relaxed mb-10 text-white">
              "Om Sai Software Solutions transformed our operations with innovative, reliable tools that truly empower our business."
            </Typography>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white/20">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200&h=200" alt="P. Sharma" className="w-full h-full object-cover" />
              </div>
              <Typography variant="large" className="font-semibold text-white">P. Sharma</Typography>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Bento Box Grid */}
      <section className="w-full py-24 px-4 md:px-6 container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Typography variant="h2">Empowering Your Business Through Technology</Typography>
          <Typography variant="muted" className="max-w-xl text-lg mt-4">
            Custom software development for startups and large organizations, enhancing operational efficiency and innovation.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-card p-10 flex flex-col justify-between shadow-sm group cursor-pointer"
          >
            <Link href="/portfolio/2" className="absolute inset-0 z-30"></Link>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <Code2 className="h-10 w-10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <Typography variant="h3" className="mb-2 transition-colors group-hover:text-primary">Tailor-Made Solutions</Typography>
              <Typography variant="muted" className="text-base text-muted-foreground mb-6">
                Our portfolio includes a range of tailor-made software solutions, designed to meet the unique needs of various industries, ensuring reliability and efficiency in every project we undertake.
              </Typography>
            </div>
            <div className="w-full h-48 mt-4 mb-6 rounded-2xl overflow-hidden relative z-10">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Team collaborating" />
            </div>
            <div className="flex items-center text-sm font-medium text-primary mt-auto relative z-10 transition-transform group-hover:translate-x-1">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm group cursor-pointer"
          >
            <Link href="/portfolio/3" className="absolute inset-0 z-30"></Link>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ShieldCheck className="h-10 w-10 text-primary mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
            <Typography variant="h4" className="mb-2 relative z-10 transition-colors group-hover:text-primary">Innovative System Integration</Typography>
            <Typography variant="muted" className="text-base text-muted-foreground flex-grow mb-6 relative z-10">
              Seamless integration solutions tailored to enhance your business operations and technology stack.
            </Typography>
            <div className="flex items-center text-sm font-medium text-primary mt-auto relative z-10 transition-transform group-hover:translate-x-1">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-3 lg:col-span-1 relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col shadow-sm group cursor-pointer"
          >
            <Link href="/portfolio/5" className="absolute inset-0 z-30"></Link>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Cpu className="h-10 w-10 text-primary mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <Typography variant="h4" className="mb-2 relative z-10 transition-colors group-hover:text-primary">Reliable Software Tools</Typography>
            <Typography variant="muted" className="text-base text-muted-foreground flex-grow mb-6 relative z-10">
              Efficient software tools designed to empower your operations and meet specific client needs.
            </Typography>
            <div className="flex items-center text-sm font-medium text-primary mt-auto relative z-10 transition-transform group-hover:translate-x-1">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </motion.div>

          {/* Large Graphic Card 4 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:col-span-3 lg:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/90 to-blue-900 p-10 flex flex-col justify-center items-center text-center shadow-lg group isolate cursor-pointer"
          >
            <Link href="/portfolio/1" className="absolute inset-0 z-30"></Link>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 w-full h-full pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop"
              alt="Train Background"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Typography variant="h3" className="text-white mb-2 relative z-20 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">Indian Railways Project</Typography>
            <Typography variant="muted" className="text-white/80 max-w-lg mb-6 relative z-20 mx-auto transition-transform duration-500 group-hover:-translate-y-1">
              We proudly provide custom software solutions that enhance operational efficiency for Indian Railways, showcasing our commitment to quality and innovation in the transportation sector.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-20 mt-2">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full font-bold shadow-xl flex items-center group/btn">
                Explore the Case Study <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
