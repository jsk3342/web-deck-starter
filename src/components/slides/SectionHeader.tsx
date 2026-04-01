export default function SectionHeader({
  badge,
  title,
  accent,
}: {
  badge: string;
  title: string;
  accent?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p
        className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest"
        style={{ color: accent ?? "var(--briefing-accent)" }}
      >
        {badge}
      </p>
      <h2
        className="text-3xl font-bold leading-tight tracking-tight"
        style={{ color: "var(--briefing-heading)" }}
      >
        {title}
      </h2>
    </div>
  );
}
