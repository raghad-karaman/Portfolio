import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="border-b border-line py-20 dark:border-dark-line">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h2 className="text-display-md font-medium text-ink dark:text-dark-ink">Selected work</h2>
            <p className="mt-3 max-w-[26ch] text-sm text-steel dark:text-dark-steel">
              A mix of solo and team projects, ordered by how much of my current focus they represent.
            </p>
          </div>
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
