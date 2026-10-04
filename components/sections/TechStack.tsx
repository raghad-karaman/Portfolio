import Container from "@/components/ui/Container";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-line py-20 dark:border-dark-line">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h2 className="text-display-md font-medium text-ink dark:text-dark-ink">Stack</h2>
            <p className="mt-3 max-w-[26ch] text-sm text-steel dark:text-dark-steel">
              Tools I've actually shipped projects with.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs text-steel dark:text-dark-steel">{group.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
