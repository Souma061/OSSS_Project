import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | OSSS — Start Your Software Project",
  description: "Get in touch with Om Sai Software Solutions. Whether you need an enterprise integration or a startup MVP, our engineers are ready to architect your solution.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
