import { Check, X } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  highlights,
  badge,
  negative,
  accent,
}: {
  title: string;
  description: string;
  highlights: string[];
  badge?: string;
  negative?: boolean;
  accent?: string;
}) {
  const accentColor = accent ?? "var(--briefing-accent)";
  const accentGlow = accent
    ? `${accent}1a`
    : "color-mix(in srgb, var(--briefing-accent) 10%, transparent)";

  return (
    <div
      className="relative rounded-xl p-6 flex flex-col h-full"
      style={{
        background: "var(--briefing-card)",
        border: badge
          ? `2px solid ${accentColor}`
          : `1px solid color-mix(in srgb, ${accentColor} 10%, transparent)`,
        boxShadow: badge ? `0 4px 24px ${accentGlow}` : undefined,
      }}
    >
      {badge && (
        <span
          className="absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: accentColor }}
        >
          {badge}
        </span>
      )}
      <h3 className="text-lg font-bold mb-1.5" style={{ color: "var(--briefing-heading)" }}>
        {title}
      </h3>
      <p className="text-sm mb-5" style={{ color: "var(--briefing-body)" }}>
        {description}
      </p>
      <div className="flex-1 space-y-2.5">
        {highlights.map((h) => (
          <div key={h} className="flex items-start gap-2">
            {negative ? (
              <X className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--briefing-negative)", opacity: 0.7 }} />
            ) : (
              <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
            )}
            <span className="text-sm" style={{ color: "var(--briefing-body)" }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
