import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Logo } from "@/components/Logo";
import { brand, hq } from "@/lib/content";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Integrity. Excellence. Innovation.`,
    template: `%s | ${brand.name}`
  },
  description: brand.promise,
  keywords: [
    "international AI software company",
    "AI automation development",
    "SaaS development",
    "API integration services",
    "secure software development",
    "custom web applications",
    "Austin AI company"
  ],
  openGraph: {
    title: `${brand.name} | Integrity. Excellence. Innovation.`,
    description: brand.promise,
    type: "website",
    locale: "en_US",
    siteName: brand.name
  }
};

const navItems = [
  ["What We Build", "/what-we-build"],
  ["Demo Lab", "/demo-lab"],
  ["Blueprints", "/case-studies"],
  ["Process", "/process"],
  ["Technology", "/technology"],
  ["Company", "/company"]
];

const footerCols: [string, [string, string][]][] = [
  [
    "Company",
    [
      ["About maxIEI", "/company"],
      ["The team", "/company#team"],
      ["Headquarters", "/company#hq"],
      ["Process", "/process"]
    ]
  ],
  [
    "Capabilities",
    [
      ["What we build", "/what-we-build"],
      ["AI & automation", "/services/ai-and-automation/ai-automation-systems"],
      ["SaaS & product", "/services/saas-and-product/saas-mvp-development"],
      ["Technology", "/technology"]
    ]
  ],
  [
    "Evidence",
    [
      ["Demo Lab", "/demo-lab"],
      ["Blueprints", "/case-studies"],
      ["Start a project", "/contact"]
    ]
  ]
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <header className="nav">
          <div className="wrap nav-inner">
            <Link href="/" aria-label={`${brand.name} home`}>
              <Logo />
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
            <Link className="btn btn-primary btn-sm nav-cta" href="/contact">
              Start a project
            </Link>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="wrap">
            <div className="footer-top">
              <div className="footer-brand">
                <Logo />
                <p>
                  An international AI software company headquartered in {hq.city}, {hq.state}, with engineers across
                  seven countries. We build trusted AI solutions with uncompromising quality.
                </p>
              </div>
              {footerCols.map(([heading, links]) => (
                <div className="footer-col" key={heading}>
                  <h4>{heading}</h4>
                  <ul>
                    {links.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} {brand.legal} · {hq.label}
              </span>
              <span className="footer-values">
                <b>Integrity.</b>
                <b>Excellence.</b>
                <b>Innovation.</b>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
