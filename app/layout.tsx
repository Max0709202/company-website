import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ReimeiTech | AI-Powered Software Systems",
    template: "%s | ReimeiTech"
  },
  description:
    "ReimeiTech builds AI-powered apps, SaaS platforms, secure integrations, dashboards, portals, and production-ready business software.",
  keywords: [
    "AI automation development company",
    "SaaS development",
    "API integration services",
    "secure software development",
    "custom web applications",
    "workflow automation"
  ],
  openGraph: {
    title: "ReimeiTech | AI-Powered Software Systems",
    description:
      "AI automation, SaaS platforms, APIs, dashboards, portals, cloud backend systems, and secure development for growing teams.",
    type: "website"
  }
};

const navItems = [
  ["What We Build", "/what-we-build"],
  ["Demo Lab", "/demo-lab"],
  ["Case Studies", "/case-studies"],
  ["Process", "/process"],
  ["Technology", "/technology"]
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="nav">
            <div className="container nav-inner">
              <Link className="brand" href="/">
                <span className="brand-mark">R</span>
                <span>ReimeiTech</span>
              </Link>
              <nav className="nav-links" aria-label="Main navigation">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
                <Link className="button button-primary" href="/contact">
                  Start a Project
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="container grid grid-3">
              <div>
                <strong>ReimeiTech</strong>
                <p>AI-powered software systems for modern businesses.</p>
              </div>
              <div>
                <strong>Core focus</strong>
                <p>AI automation, SaaS, APIs, secure portals, dashboards, cloud backend systems.</p>
              </div>
              <div>
                <strong>Start</strong>
                <p>Tell us what is manual, disconnected, risky, or ready to become software.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
