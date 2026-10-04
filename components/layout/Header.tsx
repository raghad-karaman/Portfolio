import Link from "next/link";
import Container from "@/components/ui/Container";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur dark:border-dark-line dark:bg-dark-paper/90">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm text-ink dark:text-dark-ink">
          Ragad Karaman
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-steel transition-colors hover:text-ink dark:text-dark-steel dark:hover:text-dark-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/cv.pdf"
          download
          className="rounded-sm border border-ink px-3.5 py-1.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper dark:border-dark-ink dark:text-dark-ink dark:hover:bg-dark-ink dark:hover:text-dark-paper"
        >
          Download CV
        </a>
      </Container>
    </header>
  );
}
