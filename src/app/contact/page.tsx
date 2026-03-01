"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { motion, Variants } from "framer-motion"
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react"
import { useState } from "react"

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error("Failed to send message")

      setIsSuccess(true)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
    } catch (err) {
      setError("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[80vh] w-full pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="px-4 md:px-6 container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">

          {/* Left Column - Contact Info */}
          <motion.div
            className="flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" className="mb-6">Let's build something <span className="text-primary italic">extraordinary.</span></Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="lead" className="mb-12 text-muted-foreground">
                Whether you need to overhaul legacy enterprise software or build a startup MVP from scratch, our engineers are ready to architect your solution.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full h-64 md:h-72 rounded-3xl overflow-hidden mb-12 relative isolate shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 hover:scale-105 transition-transform duration-700"
                alt="Engineers collaborating"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent z-10 pointer-events-none"></div>
            </motion.div>

            <div className="flex flex-col gap-8 mt-auto">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Email Us</Typography>
                  <Typography variant="large" className="group-hover:text-primary transition-colors">hello@osss.in</Typography>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Visit Us</Typography>
                  <Typography variant="large">Kolkata, West Bengal, India</Typography>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - The Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
            <Typography variant="h3" className="mb-8">Send a message</Typography>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <Typography variant="h4">Message Sent!</Typography>
                <Typography variant="muted" className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</Typography>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:bg-background focus:bg-background" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:bg-background focus:bg-background" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:bg-background focus:bg-background" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:bg-background focus:bg-background" placeholder="Tell us about your requirements..."></textarea>
                </div>

                {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-destructive">{error}</motion.p>}

                <Button disabled={isSubmitting} type="submit" variant="gradient" size="lg" className="w-full h-14 rounded-xl mt-4 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : <>Send Message <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
