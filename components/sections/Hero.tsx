import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";

const focusAreas = [
  { label: "Backend", detail: "FastAPI · ASP.NET · Laravel" },
  { label: "Web & mobile", detail: "Next.js · React Native" },
  { label: "Data layer", detail: "PostgreSQL · MySQL · SQL Server" },
  { label: "AI / ML", detail: "Scikit-learn · XGBoost · GNNs" }
];

export default function Hero() {
  return (
    <section className="border-b border-line pt-16 pb-16 dark:border-dark-line md:pt-24 md:pb-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-8">
          <div>
            <p className="reveal-in [animation-delay:0ms] font-mono text-xs text-steel dark:text-dark-steel">
              Computer Engineer, Gaziantep, Türkiye
            </p>
            <h1 className="reveal-in [animation-delay:90ms] mt-4 text-display-lg font-medium text-ink dark:text-dark-ink">
              Ragad Karaman builds full‑stack systems that make decisions easier under pressure.
            </h1>
            <p className="reveal-in [animation-delay:180ms] mt-6 max-w-[46ch] text-lg text-steel dark:text-dark-steel">
              A Computer Engineering graduate who ships the whole system — backend, web, mobile,
              and the model behind it. My graduation project explores how blood donation coordination can be brought into a single AI-assisted platform, built solo from the database up.
            </p>
            <div className="reveal-in [animation-delay:260ms] mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-sm bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-signal dark:bg-dark-ink dark:text-dark-paper"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink dark:border-dark-line dark:text-dark-ink dark:hover:border-dark-ink"
              >
                Contact me
              </a>
              <a
                href="https://github.com/raghad-karaman"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-steel underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-signal dark:text-dark-steel dark:hover:text-dark-ink"
              >
                GitHub profile
              </a>
            </div>
          </div>

          <div className="reveal-in [animation-delay:220ms] self-start rounded-sm border border-line bg-panel p-5 font-mono text-xs dark:border-dark-line dark:bg-dark-panel">
            <p className="text-steel dark:text-dark-steel">Currently working across</p>
            <ul className="mt-4 space-y-4">
              {focusAreas.map((area) => (
                <li key={area.label} className="border-t border-line pt-3 first:border-t-0 first:pt-0 dark:border-dark-line">
                  <p className="text-ink dark:text-dark-ink">{area.label}</p>
                  <p className="mt-1 text-steel dark:text-dark-steel">{area.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="mt-16 border-t border-line pt-10 dark:border-dark-line md:mt-20">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-3xl text-ink dark:text-dark-ink">{stat.value}</dd>
                <p className="mt-2 max-w-[22ch] text-sm text-steel dark:text-dark-steel">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
