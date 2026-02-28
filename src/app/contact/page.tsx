"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react"
import { useState } from "react"

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
    <div className="min-h-[80vh] w-full pt-20 pb-16 px-4 md:px-6 container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">

        {/* Left Column - Contact Info */}
        <div className="flex flex-col">
          <Typography variant="h1" className="mb-6">Let's build something <span className="text-primary italic">extraordinary.</span></Typography>
          <Typography variant="lead" className="mb-12 text-muted-foreground">
            Whether you need to overhaul legacy enterprise software or build a startup MVP from scratch, our engineers are ready to architect your solution.
          </Typography>

          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Email Us</Typography>
                <Typography variant="large">hello@osss.in</Typography>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <Typography variant="small" className="text-muted-foreground uppercase tracking-wider">Visit Us</Typography>
                <Typography variant="large">Kolkata, West Bengal, India</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - The Form */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
          <Typography variant="h3" className="mb-8">Send a message</Typography>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <Typography variant="h4">Message Sent!</Typography>
              <Typography variant="muted" className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</Typography>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Work Email</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell us about your requirements..."></textarea>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button disabled={isSubmitting} type="submit" variant="gradient" size="lg" className="w-full h-14 rounded-xl mt-4">
                {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
