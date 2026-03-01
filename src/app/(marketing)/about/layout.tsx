import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | OSSS — 15+ Years of Software Engineering Excellence",
  description: "Learn about Om Sai Software Solutions — a Kolkata-based software agency with 15+ years of experience building enterprise systems for Indian Railways and custom solutions for startups.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
