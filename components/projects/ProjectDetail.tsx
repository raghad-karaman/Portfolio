import Container from "@/components/ui/Container";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/projects/StatusBadge";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";
import { Project, ProjectScreenshot } from "@/data/types";

// A report link that points straight at a download (e.g. Google Drive's
// "uc?export=download" URLs) gets the `download` hint; anything else (e.g.
// a Drive "view" link) opens as a normal page in a new tab. Based on the
// URL itself rather than which project it is, so this keeps working for
// any future project's report link without extra code changes.
function isDirectDownloadLink(url: string): boolean {
  return url.includes("export=download") || /\.(pdf|docx?|pptx?)$/i.test(url);
}

export default function ProjectDetail({
  project,
  screenshots
}: {
  project: Project;
  screenshots: ProjectScreenshot[];
}) {
  return (
    <article>
      <header className="border-b border-line py-16 dark:border-dark-line">
        <Container>
          <p className="font-mono text-xs text-steel dark:text-dark-steel">
            {project.type} · {project.year}
          </p>
          <h1 className="mt-4 max-w-[24ch] text-display-md font-medium text-ink dark:text-dark-ink">
            {project.name}
          </h1>
          <p className="mt-4 max-w-[56ch] text-lg text-steel dark:text-dark-steel">{project.tagline}</p>
          <p className="mt-4 max-w-[56ch] border-l-2 border-signal pl-4 text-ink dark:text-dark-ink">{project.impact}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <StatusBadge status={project.status} />
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-signal dark:text-dark-ink">
                GitHub repository
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-signal dark:text-dark-ink">
                Live demo
              </a>
            )}
            {project.links.report && (
              <a
                href={project.links.report}
                target="_blank"
                rel="noreferrer"
                {...(isDirectDownloadLink(project.links.report) ? { download: true } : {})}
                className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-signal dark:text-dark-ink"
              >
                Project report (PDF)
              </a>
            )}
          </div>
          {project.statusNote && (
            <p className="mt-6 max-w-[56ch] rounded-sm border border-line bg-panel p-4 text-sm text-steel dark:border-dark-line dark:bg-dark-panel dark:text-dark-steel">
              {project.statusNote}
            </p>
          )}
        </Container>
      </header>

      <section className="border-b border-line py-16 dark:border-dark-line">
        <Container>
          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
            <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Overview</h2>
            <div className="max-w-[64ch] space-y-5 text-steel dark:text-dark-steel">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="text-ink dark:text-dark-ink">
                <span className="font-mono text-xs text-steel dark:text-dark-steel">My contribution — </span>
                {project.role}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-16 dark:border-dark-line">
        <Container>
          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
            <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {project.metrics && project.metrics.length > 0 && (
        <section className="border-b border-line py-16 dark:border-dark-line">
          <Container>
            <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
              <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Results</h2>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="sr-only">{metric.label}</dt>
                    <dd className="font-mono text-2xl text-ink dark:text-dark-ink">{metric.value}</dd>
                    <p className="mt-2 max-w-[24ch] text-sm text-steel dark:text-dark-steel">{metric.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-line py-16 dark:border-dark-line">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Key features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-steel dark:text-dark-steel">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel dark:bg-dark-steel" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Architecture</h2>
                <ul className="mt-4 space-y-3">
                  {project.architecture.map((line) => (
                    <li key={line} className="flex gap-3 text-steel dark:text-dark-steel">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel dark:bg-dark-steel" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {project.challenges && project.challenges.length > 0 && (
        <section className="border-b border-line py-16 dark:border-dark-line">
          <Container>
            <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
              <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Challenges &amp; solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((item) => (
                  <div key={item.challenge} className="border-t border-line pt-4 first:border-t-0 first:pt-0 dark:border-dark-line">
                    <p className="text-ink dark:text-dark-ink">{item.challenge}</p>
                    <p className="mt-1 text-steel dark:text-dark-steel">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
            <div>
              <h2 className="font-mono text-xs text-steel dark:text-dark-steel">Interface preview</h2>
              {screenshots.length > 0 && (
                <p className="mt-2 text-xs text-steel/70 dark:text-dark-steel/70">Interface language: Turkish</p>
              )}
            </div>
            <ScreenshotGallery screenshots={screenshots} projectName={project.name} />
          </div>
        </Container>
      </section>
    </article>
  );
}