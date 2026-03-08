import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio | OSSS — Enterprise Case Studies & Startup MVPs",
  description:
    "Explore our portfolio of production-grade software — from Indian Railways' operations dashboard to fintech portals and IoT platforms.",
};
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
