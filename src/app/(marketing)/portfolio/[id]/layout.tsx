import { projects } from "@/lib/data"
import type { Metadata } from "next"

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  const project = projects.find(p => p.id === id)

  if (!project) {
    return { title: "Project Not Found | OSSS" }
  }

  return {
    title: `${project.title} | OSSS Portfolio`,
    description: project.description,
    keywords: project.techStack
  }
}

export default function PortfolioDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
