import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--briefing-heading)" }}
        >
          Web Deck Starter
        </h1>
        <p className="text-lg" style={{ color: "var(--briefing-body)" }}>
          src/decks/ 에 덱을 만들면 자동으로 라우팅됩니다
        </p>
        <Link
          href="/example"
          className="inline-block rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--briefing-accent)" }}
        >
          예시 덱 보기 →
        </Link>
      </div>
    </div>
  );
}
