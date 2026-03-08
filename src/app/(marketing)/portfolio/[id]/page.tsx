"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Code2, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { projects } from "@/lib/data";
export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const projectId = parseInt(id);
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    notFound();
  }
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-16 px-4 md:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent -z-10 pointer-events-none"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </motion.div>
        {}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              {project.category}
            </div>
            <Typography variant="h1" className="mb-6 leading-tight">
              {project.title}
            </Typography>
            <Typography
              variant="lead"
              className="text-muted-foreground text-xl"
            >
              {project.description}
            </Typography>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-72 flex flex-col gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div>
              <Typography
                variant="small"
                className="text-muted-foreground uppercase tracking-wider mb-1 block"
              >
                Client
              </Typography>
              <Typography variant="large" className="font-semibold">
                {project.client}
              </Typography>
            </div>
            <div className="h-px w-full bg-border"></div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary h-5 w-5" />
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground uppercase tracking-wider mb-0.5 block"
                >
                  Duration
                </Typography>
                <Typography variant="p" className="font-medium m-0">
                  {project.duration}
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-primary h-5 w-5" />
              <div>
                <Typography
                  variant="small"
                  className="text-muted-foreground uppercase tracking-wider mb-0.5 block"
                >
                  Team Size
                </Typography>
                <Typography variant="p" className="font-medium m-0">
                  {project.teamSize}
                </Typography>
              </div>
            </div>
          </motion.div>
        </div>
        {}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 relative shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none"
          >
            <Typography variant="h2" className="mb-6">
              Project Overview
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground leading-relaxed text-lg"
            >
              {project.fullDescription}
            </Typography>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border rounded-2xl p-8 bg-muted/30 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-primary h-6 w-6" />
              <Typography variant="h3" className="m-0">
                Tech Stack
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
