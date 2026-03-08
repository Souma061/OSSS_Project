"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function CTASection() {
  return (
    <section className="w-full py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-3xl text-center"
      >
        <Typography variant="h2" className="mb-6">
          Ready to build something extraordinary?
        </Typography>
        <Typography
          variant="lead"
          className="text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Let&apos;s discuss how our engineers can architect the perfect
          solution for your unique challenges.
        </Typography>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link href="/contact">
            <Button
              variant="gradient"
              size="lg"
              className="rounded-full h-14 px-8 text-md group shadow-xl"
            >
              Start a Project{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
