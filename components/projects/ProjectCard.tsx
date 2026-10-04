import Link from "next/link";
import { Project } from "@/data/types";
import Tag from "@/components/ui/Tag";
import StatusBadge from "@/components/projects/StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-t border-line py-8 first:border-t-0 dark:border-dark-line"
    >
      <div className="flex flex-col gap-4 border-l-2 border-transparent pl-0 transition-[padding,border-color] duration-300 ease-signal group-hover:border-signal group-hover:pl-4 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="md:max-w-[60%]">
          <div className="flex items-center gap-3">
            <h3 className="text-xl text-ink transition-colors group-hover:text-signal dark:text-dark-ink">
              {project.name}
            </h3>
            <span className="font-mono text-xs text-steel dark:text-dark-steel">{project.year}</span>
          </div>
          <p className="mt-2 text-steel dark:text-dark-steel">{project.tagline}</p>
          <p className="mt-3 max-w-[52ch] text-sm text-ink/80 dark:text-dark-ink/80">{project.impact}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">
          <StatusBadge status={project.status} />
          <span className="font-mono text-xs text-steel dark:text-dark-steel">{project.type}</span>
          <span className="text-sm text-ink underline decoration-line underline-offset-4 group-hover:decoration-signal dark:text-dark-ink">
            View case study
          </span>
        </div>
      </div>
    </Link>
  );
}
