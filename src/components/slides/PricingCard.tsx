import { Check, X } from "lucide-react";

export default function PricingCard({
  tier,
  price,
  unit,
  items,
  excluded,
  badge,
  note,
  accent,
}: {
  tier: string;
  price: string;
  unit?: string;
  items: string[];
  excluded?: string[];
  badge?: string;
  note?: string;
  accent?: string;
}) {
  const accentColor = accent ?? "var(--briefing-accent)";
  const accentGlow = accent
    ? `${accent}1a`
    : "color-mix(in srgb, var(--briefing-accent) 10%, transparent)";

  return (
    <div
      className="relative flex h-full flex-col rounded-xl p-6"
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
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: accentColor }}
        >
          {badge}
        </span>
      )}
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
        {tier}
      </p>
      <p className="mb-4 text-3xl font-extrabold" style={{ color: "var(--briefing-heading)" }}>
        {price}
        {unit && <span className="text-base font-normal" style={{ color: "var(--briefing-body)" }}>{unit}</span>}
      </p>
      <div className="flex-1 space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accentColor }} />
            <span className="text-sm" style={{ color: "var(--briefing-body)" }}>{item}</span>
          </div>
        ))}
        {excluded?.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <X className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--briefing-excluded)" }} />
            <span className="text-sm" style={{ color: "var(--briefing-excluded)" }}>{item}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-4 text-xs" style={{ color: "var(--briefing-muted)" }}>{note}</p>
      )}
    </div>
  );
}
