export default function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-panel px-2.5 py-1 font-mono text-[11px] leading-none text-steel dark:border-dark-line dark:bg-dark-panel dark:text-dark-steel">
      {children}
    </span>
  );
}
