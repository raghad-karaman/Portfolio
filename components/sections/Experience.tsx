import Container from "@/components/ui/Container";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20 dark:border-dark-line">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h2 className="text-display-md font-medium text-ink dark:text-dark-ink">Experience</h2>
          </div>
          <ol className="space-y-10">
            {experience.map((entry) => (
              <li key={entry.org} className="grid gap-2 border-t border-line pt-6 first:border-t-0 first:pt-0 dark:border-dark-line sm:grid-cols-[160px_1fr] sm:gap-8">
                <div>
                  <p className="font-mono text-xs text-steel dark:text-dark-steel">{entry.period}</p>
                  <p className="mt-1 text-ink dark:text-dark-ink">{entry.org}</p>
                  <p className="text-sm text-steel dark:text-dark-steel">{entry.role}</p>
                </div>
                <ul className="space-y-2 text-steel dark:text-dark-steel">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel dark:bg-dark-steel" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
