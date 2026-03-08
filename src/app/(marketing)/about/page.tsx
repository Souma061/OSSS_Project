"use client";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Typography } from "@/components/ui/typography";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Award, Globe, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(
    spring,
    (current) => Math.round(current) + suffix,
  );
  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);
  return <motion.span ref={ref}>{display}</motion.span>;
}
export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 overflow-hidden relative">
      {}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      {}
      <section className="relative px-4 md:px-6 container mx-auto max-w-6xl mb-24">
        {}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/20 blur-[128px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6"
            >
              Founded in Kolkata
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" className="mb-6 leading-tight">
                Engineering{" "}
                <span className="text-primary font-black italic">
                  Excellence
                </span>{" "}
                from the ground up.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="lead"
                className="max-w-2xl text-muted-foreground mb-8 text-lg"
              >
                For over 15 years, Om Sai Software Solutions has been the
                trusted technology partner for startups and enterprise giants
                alike. We believe in building custom, robust software that not
                only meets your needs today but scales for your tomorrow.
              </Typography>
            </motion.div>
          </div>
          {}
          <motion.div variants={fadeInUp} className="flex-1 w-full relative">
            <div className="aspect-square max-h-[500px] w-full relative rounded-full overflow-hidden border border-border/50 shadow-2xl isolate group cursor-pointer lg:ml-auto">
              <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                alt="Our Team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform scale-105 group-hover:scale-[1.15] transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
            {}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
              className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-card border border-border rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h4" className="mb-0">
                    15+ Years
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Proven Expertise
                  </Typography>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {}
      <section className="w-full bg-muted/40 border-y border-border py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <Users className="h-10 w-10 text-primary mb-6" />
              <Typography
                variant="h1"
                className="text-6xl font-black text-foreground mb-2"
              >
                <AnimatedCounter value={150} suffix="+" />
              </Typography>
              <Typography
                variant="large"
                className="text-muted-foreground uppercase tracking-wider font-semibold"
              >
                Trusted Clients
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <Award className="h-10 w-10 text-blue-500 mb-6" />
              <Typography
                variant="h1"
                className="text-6xl font-black text-foreground mb-2"
              >
                <AnimatedCounter value={15} suffix="+" />
              </Typography>
              <Typography
                variant="large"
                className="text-muted-foreground uppercase tracking-wider font-semibold"
              >
                Years Experience
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center pt-8 md:pt-0"
            >
              <Globe className="h-10 w-10 text-primary mb-6" />
              <Typography
                variant="h1"
                className="text-6xl font-black text-foreground mb-2"
              >
                <AnimatedCounter value={500} suffix="+" />
              </Typography>
              <Typography
                variant="large"
                className="text-muted-foreground uppercase tracking-wider font-semibold"
              >
                Deployments
              </Typography>
            </motion.div>
          </div>
        </div>
      </section>
      {}
      <TestimonialsSection />
      {}
      <section className="w-full py-24 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <Typography variant="h2" className="mb-6">
                Our Location
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground mb-10 max-w-lg"
              >
                Located in Kolkata, we provide tailored software solutions to
                meet diverse client needs across various industries, including
                our esteemed partnership with Indian Railways.
              </Typography>
              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-1 text-foreground">
                    Kolkata
                  </Typography>
                  <Typography variant="muted">Manicktala</Typography>
                </div>
                <div>
                  <Typography variant="h4" className="mb-1 text-foreground">
                    Hours
                  </Typography>
                  <Typography variant="muted">9 AM - 6 PM</Typography>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="w-full aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.262584144073!2d88.3615591901358!3d22.583694038755608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ab04d9a171%3A0xc4ebdbf6236b2816!2sManicktala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1710186100000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Om Sai Software Solutions Location"
                  className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700 hover:contrast-100"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {}
      <CTASection />
    </div>
  );
}
