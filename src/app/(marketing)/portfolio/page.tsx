import { Typography } from "@/components/ui/typography"

export default function PortfolioPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <Typography variant="h1" className="mb-4">Our Best Work</Typography>
      <Typography variant="lead" className="max-w-2xl text-muted-foreground">
        Case Studies showcasing our massive integrations, like Indian Railways, down to sleek startup MVPs.
      </Typography>
    </div>
  )
}
