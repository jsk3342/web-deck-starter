"use client";

import { useState, useEffect } from "react";
import CanvasBackground from "@/components/canvas/CanvasBackground";
import SectionHeader from "@/components/slides/SectionHeader";
import ServiceCard from "@/components/slides/ServiceCard";
import PhaseCard from "@/components/slides/PhaseCard";
import PricingCard from "@/components/slides/PricingCard";
import AnimateIn from "@/components/ui/AnimateIn";

const THEMES = [
  { id: "corporate", label: "Corporate", desc: "깔끔한 그린", color: "#166534" },
  { id: "ocean", label: "Ocean", desc: "시원한 블루", color: "#1e40af" },
  { id: "warm", label: "Warm", desc: "따뜻한 앰버", color: "#92400e" },
] as const;

export default function CatalogPage() {
  const [theme, setTheme] = useState<string>("corporate");
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // 캔버스 리드로우
    setCanvasKey((k) => k + 1);
    return () => document.documentElement.removeAttribute("data-theme");
  }, [theme]);

  return (
    <div className="min-h-screen" style={{ background: "var(--briefing-bg)" }}>
      {/* ── 테마 스위처 ── */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ background: "color-mix(in srgb, var(--briefing-bg) 85%, transparent)", borderColor: "color-mix(in srgb, var(--briefing-heading) 8%, transparent)" }}>
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-sm font-bold tracking-tight" style={{ color: "var(--briefing-heading)" }}>
            Component Catalog
          </h1>
          <div className="flex gap-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all"
                style={{
                  background: theme === t.id ? t.color : "var(--briefing-card)",
                  color: theme === t.id ? "#fff" : "var(--briefing-body)",
                  border: theme === t.id ? "none" : "1px solid color-mix(in srgb, var(--briefing-heading) 10%, transparent)",
                }}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: t.color, border: theme === t.id ? "2px solid rgba(255,255,255,0.4)" : "none" }}
                />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-20">

        {/* ── ImpactSlide 미리보기 ── */}
        <section>
          <Label>ImpactSlide + AnimateIn</Label>
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "50vh", background: "var(--briefing-bg)" }}>
            <CanvasBackground key={`c1-${canvasKey}`} />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 py-20">
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--briefing-accent)" }}>
                Impact Slide
              </p>
              <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight tracking-tight" style={{ color: "var(--briefing-heading)" }}>
                큰 메시지는
                <br />
                <span style={{ color: "var(--briefing-accent)" }}>여기에 넣으세요.</span>
              </h1>
              <p className="mt-6 text-lg" style={{ color: "var(--briefing-body)" }}>
                scaleUp · fadeIn · slideUp · slideLeft
              </p>
            </div>
          </div>
        </section>

        {/* ── SectionHeader ── */}
        <section>
          <Label>SectionHeader</Label>
          <div className="relative rounded-2xl overflow-hidden p-12" style={{ background: "var(--briefing-bg)" }}>
            <CanvasBackground key={`c2-${canvasKey}`} />
            <div className="relative z-10 space-y-12">
              <SectionHeader badge="Default Accent" title="기본 포인트 컬러를 사용합니다" />
              <SectionHeader badge="Custom Blue" title="accent prop으로 색상을 바꿀 수 있습니다" accent="#3B82F6" />
              <SectionHeader badge="Custom Purple" title="섹션마다 다른 포인트 컬러" accent="#8B5CF6" />
            </div>
          </div>
        </section>

        {/* ── PhaseCard ── */}
        <section>
          <Label>PhaseCard — 단계 / 타임라인</Label>
          <div className="grid grid-cols-3 gap-5">
            <PhaseCard num="01" label="Discovery" title="문제 정의" detail="고객 인터뷰와 데이터 분석으로 핵심 문제를 정의합니다." accent="#3B82F6" />
            <PhaseCard num="02" label="Design" title="설계 & 프로토타입" detail="와이어프레임에서 클릭 가능한 프로토타입까지." accent="#EAB308" />
            <PhaseCard num="03" label="Deliver" title="개발 & 배포" detail="코드 구현, QA 테스트, 프로덕션 배포." accent="#A855F7" />
          </div>
          <div className="grid grid-cols-5 gap-3 mt-6">
            {["#3B82F6", "#8B5CF6", "#EAB308", "#F97316", "#10B981"].map((c, i) => (
              <PhaseCard key={c} num={`W${i + 1}`} label={`Week ${i + 1}`} title="1주" detail="작업 내용" accent={c} />
            ))}
          </div>
        </section>

        {/* ── ServiceCard ── */}
        <section>
          <Label>ServiceCard — 기능 비교 / Before·After</Label>
          <div className="grid grid-cols-2 gap-6">
            <ServiceCard
              title="기존 방식"
              description="수동 프로세스"
              highlights={["엑셀로 데이터 관리", "매주 수동 리포트 작성", "오류 발견까지 평균 3일"]}
              negative
            />
            <ServiceCard
              title="도입 후"
              description="자동화된 워크플로우"
              highlights={["실시간 대시보드", "자동 리포트 생성", "이상 감지 즉시 알림"]}
              badge="추천"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[
              { t: "분석", c: "#3B82F6", b: "핵심" },
              { t: "협업", c: "#10B981", b: undefined },
              { t: "보안", c: "#F59E0B", b: undefined },
              { t: "API", c: "#8B5CF6", b: undefined },
            ].map(({ t, c, b }) => (
              <ServiceCard
                key={t}
                title={t}
                description="기능 설명"
                highlights={["항목 A", "항목 B", "항목 C"]}
                accent={c}
                badge={b}
              />
            ))}
          </div>
        </section>

        {/* ── PricingCard ── */}
        <section>
          <Label>PricingCard — 가격 Tier</Label>
          <div className="grid grid-cols-3 gap-5">
            <PricingCard
              tier="Starter"
              price="무료"
              items={["프로젝트 3개", "기본 분석", "커뮤니티 지원"]}
              excluded={["팀 협업", "API 접근"]}
              note="개인 프로젝트에 적합"
            />
            <PricingCard
              tier="Pro"
              price="29,000"
              unit="원/월"
              items={["무제한 프로젝트", "고급 분석", "팀 협업 (5인)", "API 접근", "우선 지원"]}
              badge="인기"
              note="성장하는 팀에 추천"
            />
            <PricingCard
              tier="Enterprise"
              price="맞춤"
              items={["Pro 전체 포함", "무제한 팀원", "전담 매니저", "SLA 99.9%"]}
              note="도입 상담 문의"
              accent="#8B5CF6"
            />
          </div>
        </section>

        {/* ── AnimateIn 순차 등장 ── */}
        <section>
          <Label>AnimateIn — 순차 등장 패턴</Label>
          <div className="max-w-2xl mx-auto space-y-3">
            {["디자인 토큰으로 컬러 일괄 관리", "CSS 변수 한 곳에서 테마 변경", "accent prop으로 개별 오버라이드", "WCAG AA 접근성 기준 충족", "prefers-reduced-motion 자동 대응"].map((item, i) => (
              <AnimateIn key={item} preset="slideUp" delay={0.1 + i * 0.12}>
                <div
                  className="flex items-center gap-3 rounded-lg px-5 py-3.5"
                  style={{
                    background: "var(--briefing-card)",
                    border: "1px solid color-mix(in srgb, var(--briefing-accent) 8%, transparent)",
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "var(--briefing-accent)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm" style={{ color: "var(--briefing-heading)" }}>{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* ── 테마 비교 ── */}
        <section>
          <Label>테마 변경 방법</Label>
          <div className="rounded-2xl p-8" style={{ background: "var(--briefing-card)", border: "1px solid color-mix(in srgb, var(--briefing-heading) 8%, transparent)" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--briefing-body)" }}>
              <code className="text-xs px-2 py-1 rounded" style={{ background: "color-mix(in srgb, var(--briefing-heading) 6%, transparent)" }}>globals.css</code>의 <code className="text-xs px-2 py-1 rounded" style={{ background: "color-mix(in srgb, var(--briefing-heading) 6%, transparent)" }}>:root</code> 변수를 수정하거나, <code className="text-xs px-2 py-1 rounded" style={{ background: "color-mix(in srgb, var(--briefing-heading) 6%, transparent)" }}>data-theme</code> 속성으로 전환합니다.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className="rounded-xl p-5 text-left transition-all"
                  style={{
                    background: theme === t.id ? `color-mix(in srgb, ${t.color} 8%, var(--briefing-card))` : "color-mix(in srgb, var(--briefing-heading) 3%, transparent)",
                    border: theme === t.id ? `2px solid ${t.color}` : "1px solid color-mix(in srgb, var(--briefing-heading) 6%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full" style={{ background: t.color }} />
                    <span className="text-sm font-bold" style={{ color: "var(--briefing-heading)" }}>{t.label}</span>
                  </div>
                  <p className="text-xs" style={{ color: "var(--briefing-body)" }}>{t.desc}</p>
                  <code className="text-xs mt-2 block font-mono" style={{ color: "var(--briefing-muted)" }}>
                    data-theme=&quot;{t.id}&quot;
                  </code>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--briefing-muted)" }}>
      {children}
    </p>
  );
}
