import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Services | OSSS",
  description: "Custom software development, system integration, and reliable tools tailored explicitly to your operational bottlenecks.",
  keywords: ["Enterprise Software", "Custom Software", "System Integration", "Kolkata Software Agency", "Legacy Modernization"]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
