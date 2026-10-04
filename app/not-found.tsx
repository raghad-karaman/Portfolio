import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container>
        <p className="font-mono text-xs text-steel dark:text-dark-steel">404</p>
        <h1 className="mt-4 text-display-md font-medium text-ink dark:text-dark-ink">Page not found</h1>
        <p className="mt-3 max-w-[46ch] text-steel dark:text-dark-steel">
          That page doesn't exist. It may have moved, or the link might be wrong.
        </p>
        <Link href="/" className="mt-6 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-signal dark:text-dark-ink">
          Back to home
        </Link>
      </Container>
    </section>
  );
}
