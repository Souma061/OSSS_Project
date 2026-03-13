"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setIsSuccess(true);
      setFormData({
        projectType: "",
        budget: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-[80vh] w-full pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 w-[min(500px,90vw)] h-[min(500px,90vw)] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="px-4 md:px-6 container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {}
          <motion.div
            className="flex flex-col"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" className="mb-6">
                Let's build something{" "}
                <span className="text-primary italic">extraordinary.</span>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="lead"
                className="mb-12 text-muted-foreground"
              >
                Whether you need to overhaul legacy enterprise software or build
                a startup MVP from scratch, our engineers are ready to architect
                your solution.
              </Typography>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="hidden md:block w-full h-64 md:h-72 rounded-3xl overflow-hidden mb-12 relative isolate shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 hover:scale-105 transition-transform duration-700"
                alt="Engineers collaborating"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent z-10 pointer-events-none"></div>
            </motion.div>
            <div className="flex flex-col gap-8 mt-auto">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="text-muted-foreground uppercase tracking-wider"
                  >
                    Email Us
                  </Typography>
                  <Typography
                    variant="large"
                    className="group-hover:text-primary transition-colors"
                  >
                    hello@osss.in
                  </Typography>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="text-muted-foreground uppercase tracking-wider"
                  >
                    Visit Us
                  </Typography>
                  <Typography variant="large">
                    Kolkata, West Bengal, India
                  </Typography>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
            {}
            {!isSuccess && (
              <div className="w-full bg-muted h-1 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "33%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            )}
            <Typography variant="h3" className="mb-8">
              Project Assessment
            </Typography>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <Typography variant="h4">Assessment Received!</Typography>
                <Typography
                  variant="muted"
                  className="mt-2 text-muted-foreground"
                >
                  Our engineers will reach out within 24 hours.
                </Typography>
              </motion.div>
            ) : (
              <form
                className="flex flex-col min-h-[350px]"
                onSubmit={handleSubmit}
              >
                <div className="flex-grow">
                  {}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <Typography variant="h4" className="mb-4 text-xl">
                        1. What kind of project is this?
                      </Typography>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              projectType: "Startup MVP",
                            })
                          }
                          className={`p-5 rounded-2xl border text-left transition-all hover:-translate-y-1 ${formData.projectType === "Startup MVP" ? "border-primary bg-primary/10 shadow-md ring-1 ring-primary" : "border-border bg-background hover:border-primary/50"}`}
                        >
                          <span className="block font-semibold text-lg text-foreground">
                            Startup MVP
                          </span>
                          <span className="text-sm text-muted-foreground mt-1 block">
                            Speed & Scale for high-growth
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              projectType: "Enterprise Integration",
                            })
                          }
                          className={`p-5 rounded-2xl border text-left transition-all hover:-translate-y-1 ${formData.projectType === "Enterprise Integration" ? "border-primary bg-primary/10 shadow-md ring-1 ring-primary" : "border-border bg-background hover:border-primary/50"}`}
                        >
                          <span className="block font-semibold text-lg text-foreground">
                            Enterprise{" "}
                          </span>
                          <span className="text-sm text-muted-foreground mt-1 block">
                            Robust & Secure systems
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <Typography variant="h4" className="mb-4 text-xl">
                        2. What is your estimated budget?
                      </Typography>
                      <div className="flex flex-col gap-3 mb-6">
                        {[
                          "Under $10k",
                          "$10k - $50k",
                          "$50k - $100k",
                          "$100k+",
                        ].map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget })}
                            className={`p-4 rounded-xl border text-left transition-all hover:-translate-y-1 ${formData.budget === budget ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary" : "border-border bg-background hover:border-primary/50"}`}
                          >
                            <span className="font-semibold text-foreground">
                              {budget}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <Typography variant="h4" className="mb-4 text-xl">
                        3. Details
                      </Typography>
                      <div className="flex flex-col gap-5 mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-muted-foreground">
                              First Name
                            </label>
                            <input
                              required
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstName: e.target.value,
                                })
                              }
                              className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:bg-background focus:bg-background"
                              placeholder="John"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-muted-foreground">
                              Last Name
                            </label>
                            <input
                              required
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lastName: e.target.value,
                                })
                              }
                              className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:bg-background focus:bg-background"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-muted-foreground">
                            Work Email
                          </label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="flex h-12 w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:bg-background focus:bg-background"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium text-muted-foreground">
                            Brief Details
                          </label>
                          <textarea
                            required
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className="flex min-h-[100px] w-full rounded-xl border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:bg-background focus:bg-background"
                            placeholder="Tell us about the problem you're trying to solve..."
                          ></textarea>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-destructive mb-4"
                  >
                    {error}
                  </motion.p>
                )}
                {}
                <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="w-[120px] h-14 rounded-xl"
                    >
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && !formData.projectType) ||
                        (step === 2 && !formData.budget)
                      }
                      variant="gradient"
                      className="flex-1 h-14 rounded-xl group"
                    >
                      Continue{" "}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="gradient"
                      className="flex-1 h-14 rounded-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <Loader2 className="animate-spin h-5 w-5" />
                        ) : (
                          <>
                            Submit Assessment{" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </Button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
