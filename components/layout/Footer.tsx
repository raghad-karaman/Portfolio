import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 dark:border-dark-line">
      <Container className="flex flex-col gap-4 text-sm text-steel dark:text-dark-steel sm:flex-row sm:items-center sm:justify-between">
        <p>Gaziantep, Türkiye</p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
