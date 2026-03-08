import Link from "next/link";
export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                O
              </div>
              <span className="font-bold text-xl tracking-tight">OSSS.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Kolkata-based custom software development agency pushing the
              boundaries of enterprise-grade integrations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services#custom-software"
                  className="hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services#integrations"
                  className="hover:text-primary transition-colors"
                >
                  System Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services#startups"
                  className="hover:text-primary transition-colors"
                >
                  Startup MVP
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Om Sai Software Solution. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
