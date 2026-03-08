"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
const reviews = [
  {
    text: "Incredible service from Om Sai! Their integrated systems have streamlined our processes, making operations smoother than ever. Highly recommend them for any custom software needs.",
    name: "Anita Roy",
    location: "Kolkata, India",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "Om Sai Software Solution exceeded our expectations with their innovative approach and reliability. Their customized solutions significantly improved our efficiency.",
    name: "Ravi Sharma",
    location: "Kolkata, India",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  },
];
export function TestimonialsSection({
  title = "Client Feedback",
  subtitle = "Hear what our clients say about our software solutions and services.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="w-full py-24 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="mb-4">
              {title}
            </Typography>
            <Typography
              variant="muted"
              className="text-muted-foreground max-w-xl mx-auto"
            >
              {subtitle}
            </Typography>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted/50 dark:bg-card border border-border rounded-2xl p-8 lg:p-12 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <Typography
                variant="p"
                className="text-foreground/90 mb-10 flex-grow text-lg"
              >
                &ldquo;{review.text}&rdquo;
              </Typography>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img
                    loading="lazy"
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <Typography variant="large" className="font-semibold m-0">
                    {review.name}
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    {review.location}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
