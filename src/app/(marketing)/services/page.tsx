import { Typography } from "@/components/ui/typography"

export default function ServicesPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <Typography variant="h1" className="mb-4">What We Do</Typography>
      <Typography variant="lead" className="max-w-2xl text-muted-foreground">
        From Custom Software to Innovative System Integration.
      </Typography>
    </div>
  )
}
