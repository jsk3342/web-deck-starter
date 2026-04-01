export default function PhaseCard({
  num,
  label,
  title,
  detail,
  accent,
}: {
  num: string;
  label: string;
  title: string;
  detail: string;
  accent?: string;
}) {
  const accentColor = accent ?? "var(--briefing-accent)";

  return (
    <div
      className="flex flex-col gap-3 rounded-xl border p-6"
      style={{
        background: "var(--briefing-card)",
        borderColor: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
      }}
    >
      <p className="font-mono text-4xl font-bold leading-none" style={{ color: accentColor, opacity: 0.18 }}>
        {num}
      </p>
      <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
        {label}
      </p>
      <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--briefing-heading)" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--briefing-body)" }}>
        {detail}
      </p>
    </div>
  );
}
