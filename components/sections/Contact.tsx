import Container from "@/components/ui/Container";

const links = [
  { label: "Email", value: "ragadkaraman22@gmail.com", href: "mailto:ragadkaraman22@gmail.com" },
  { label: "GitHub", value: "github.com/raghad-karaman", href: "https://github.com/raghad-karaman" },
  { label: "Phone", value: "+90 551 083 31 24", href: "tel:+905510833124" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h2 className="text-display-md font-medium text-ink dark:text-dark-ink">Get in touch</h2>
          </div>
          <div>
            <p className="max-w-[46ch] text-steel dark:text-dark-steel">
              Open to full‑stack, backend, and AI/ML‑leaning roles — remote or in Türkiye. If you've
              got a problem that needs a working system, not just a mockup, I'd like to hear about
              it. The fastest way to reach me is email — I'll usually reply within a day or two.
            </p>
            <ul className="mt-8 space-y-4">
              {links.map((link) => (
                <li key={link.label} className="flex items-baseline gap-4 border-t border-line pt-4 first:border-t-0 first:pt-0 dark:border-dark-line">
                  <span className="w-20 font-mono text-xs text-steel dark:text-dark-steel">{link.label}</span>
                  <a
                    href={link.href}
                    className="text-lg text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal dark:text-dark-ink"
                  >
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
