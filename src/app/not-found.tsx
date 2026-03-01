"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { motion } from "framer-motion"
import { ArrowLeft, Ghost } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="inline-block mb-8"
        >
          <Ghost className="h-24 w-24 text-muted-foreground/40" />
        </motion.div>

        <Typography variant="h1" className="text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          404
        </Typography>
        <Typography variant="h3" className="mb-4 text-foreground">
          Page not found
        </Typography>
        <Typography variant="lead" className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Link href="/">
            <Button variant="gradient" size="lg" className="rounded-full h-14 px-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
