import { ProjectStatus } from "@/data/types";

const dotColor: Record<ProjectStatus, string> = {
  "In active development": "bg-signal",
  Completed: "bg-steel",
  Deployed: "bg-emerald-600"
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] text-steel dark:text-dark-steel">
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor[status]}`} aria-hidden />
      {status}
    </span>
  );
}
