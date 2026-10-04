import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://ragadkaraman.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ragad Karaman | Computer Engineer & Software Developer",
    template: "%s | Ragad Karaman"
  },
  description:
    "Portfolio of Ragad Karaman, a Computer Engineering graduate working across full-stack development, backend services, and applied AI/ML — including an AI-powered blood donation management system.",
  keywords: [
    "Ragad Karaman",
    "Computer Engineer",
    "Full-Stack Developer",
    "FastAPI",
    "Next.js",
    "React Native",
    "Machine Learning",
    "Blood Donation Management System"
  ],
  openGraph: {
    title: "Ragad Karaman | Computer Engineer & Software Developer",
    description:
      "Full-stack developer working across FastAPI, Next.js, React Native, and applied AI/ML. See the projects, including an AI-powered blood donation management system.",
    url: siteUrl,
    siteName: "Ragad Karaman",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragad Karaman | Computer Engineer & Software Developer",
    description:
      "Full-stack developer working across FastAPI, Next.js, React Native, and applied AI/ML."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
