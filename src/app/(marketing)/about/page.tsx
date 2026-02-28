import { Typography } from "@/components/ui/typography"

export default function AboutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <Typography variant="h1" className="mb-4">Our Story</Typography>
      <Typography variant="lead" className="max-w-2xl text-muted-foreground">
        15 years of proven expertise starting from the heart of Kolkata.
      </Typography>
    </div>
  )
}
