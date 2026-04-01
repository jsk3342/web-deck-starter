import AnimateIn from "@/components/ui/AnimateIn";
import LightSlide from "@/components/slides/LightSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import SectionHeader from "@/components/slides/SectionHeader";
import ServiceCard from "@/components/slides/ServiceCard";
import PhaseCard from "@/components/slides/PhaseCard";
import PricingCard from "@/components/slides/PricingCard";
import type { DeckMetadata } from "@/lib/types";

export const metadata: DeckMetadata = {
  title: "Component Showcase",
  date: "2026-04-02",
  description: "모든 컴포넌트를 한눈에",
};

export const slides = [
  /* s1. ImpactSlide + AnimateIn 프리셋 */
  <ImpactSlide key="s1">
    <AnimateIn preset="fadeIn">
      <p
        className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--briefing-accent)" }}
      >
        ImpactSlide + AnimateIn
      </p>
      <h1
        className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight tracking-tight"
        style={{ color: "var(--briefing-heading)" }}
      >
        큰 메시지는
        <br />
        <span style={{ color: "var(--briefing-accent)" }}>ImpactSlide로.</span>
      </h1>
    </AnimateIn>
    <AnimateIn preset="fadeIn" delay={0.5}>
      <p className="mt-8 text-lg" style={{ color: "var(--briefing-body)" }}>
        fadeIn · slideUp · slideLeft · scaleUp · none
      </p>
    </AnimateIn>
  </ImpactSlide>,

  /* s2. SectionHeader + PhaseCard 3종 */
  <LightSlide key="s2">
    <div className="w-full">
      <SectionHeader badge="PhaseCard" title="단계별 설명에 사용합니다" />
      <div className="grid grid-cols-3 gap-5">
        <PhaseCard
          num="01"
          label="Discovery"
          title="문제 정의"
          detail="고객 인터뷰와 데이터 분석으로 핵심 문제를 정의합니다."
          accent="#3B82F6"
        />
        <PhaseCard
          num="02"
          label="Design"
          title="설계 & 프로토타입"
          detail="와이어프레임 → 디자인 → 클릭 가능한 프로토타입."
          accent="#EAB308"
        />
        <PhaseCard
          num="03"
          label="Deliver"
          title="개발 & 배포"
          detail="코드 구현, QA 테스트, 프로덕션 배포까지."
          accent="#A855F7"
        />
      </div>
    </div>
  </LightSlide>,

  /* s3. ServiceCard 비교 (negative vs positive) */
  <LightSlide key="s3">
    <div className="w-full">
      <SectionHeader badge="ServiceCard" title="Before / After 비교" />
      <div className="grid grid-cols-2 gap-6">
        <ServiceCard
          title="기존 방식"
          description="수동으로 처리"
          highlights={[
            "엑셀로 데이터 관리",
            "매주 수동 리포트 작성",
            "오류 발견까지 평균 3일",
            "팀 간 정보 불일치",
          ]}
          negative
        />
        <ServiceCard
          title="도입 후"
          description="자동화된 워크플로우"
          highlights={[
            "실시간 대시보드",
            "자동 리포트 생성",
            "이상 감지 즉시 알림",
            "Single Source of Truth",
          ]}
          badge="추천"
        />
      </div>
    </div>
  </LightSlide>,

  /* s4. ServiceCard accent 커스텀 + 4 grid */
  <LightSlide key="s4">
    <div className="w-full">
      <SectionHeader badge="Features" title="서비스 카드 — accent 커스텀" accent="#7C3AED" />
      <div className="grid grid-cols-2 gap-5">
        <ServiceCard
          title="분석 대시보드"
          description="핵심 지표를 한눈에"
          highlights={["실시간 트래픽 모니터링", "전환율 퍼널 분석", "커스텀 리포트 생성"]}
          accent="#3B82F6"
          badge="핵심"
        />
        <ServiceCard
          title="팀 협업"
          description="함께 더 빠르게"
          highlights={["실시간 공동 편집", "댓글 & 멘션", "버전 히스토리"]}
          accent="#10B981"
        />
        <ServiceCard
          title="보안"
          description="엔터프라이즈급 보호"
          highlights={["2FA 인증", "역할 기반 접근 제어", "감사 로그"]}
          accent="#F59E0B"
        />
        <ServiceCard
          title="API & 연동"
          description="어디서든 연결"
          highlights={["REST & GraphQL API", "Webhook 지원", "Zapier 연동"]}
          accent="#8B5CF6"
        />
      </div>
    </div>
  </LightSlide>,

  /* s5. ImpactSlide — scaleUp 숫자 강조 */
  <ImpactSlide key="s5">
    <AnimateIn preset="fadeIn">
      <p
        className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--briefing-muted)" }}
      >
        업계 평균 대비
      </p>
    </AnimateIn>
    <AnimateIn preset="scaleUp" delay={0.3}>
      <h1
        className="text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter"
        style={{ color: "var(--briefing-accent)" }}
      >
        3.2배
      </h1>
    </AnimateIn>
    <AnimateIn preset="fadeIn" delay={0.6}>
      <p className="mt-4 text-xl" style={{ color: "var(--briefing-body)" }}>
        전환율 향상 — 도입 6개월 기준
      </p>
    </AnimateIn>
  </ImpactSlide>,

  /* s6. PhaseCard 5단 타임라인 */
  <LightSlide key="s6">
    <div className="w-full">
      <SectionHeader badge="Timeline" title="5단계 로드맵" />
      <div className="grid grid-cols-5 gap-4">
        {[
          { num: "W1", label: "킥오프", title: "1주", detail: "요구사항 확정", accent: "#3B82F6" },
          { num: "W2", label: "설계", title: "1주", detail: "IA + 와이어프레임", accent: "#8B5CF6" },
          { num: "W3-4", label: "개발", title: "2주", detail: "프론트 + 백엔드", accent: "#EAB308" },
          { num: "W5", label: "QA", title: "1주", detail: "테스트 + 수정", accent: "#F97316" },
          { num: "W6", label: "런칭", title: "D-day", detail: "배포 + 모니터링", accent: "#10B981" },
        ].map((p) => (
          <PhaseCard key={p.num} {...p} />
        ))}
      </div>
    </div>
  </LightSlide>,

  /* s7. PricingCard 3-Tier */
  <LightSlide key="s7">
    <div className="w-full">
      <SectionHeader badge="Pricing" title="플랜을 선택하세요" />
      <div className="grid grid-cols-3 gap-5">
        <PricingCard
          tier="Starter"
          price="무료"
          items={["프로젝트 3개", "기본 분석", "커뮤니티 지원"]}
          excluded={["팀 협업", "API 접근", "커스텀 도메인"]}
          note="개인 프로젝트에 적합"
        />
        <PricingCard
          tier="Pro"
          price="29,000"
          unit="원/월"
          items={[
            "무제한 프로젝트",
            "고급 분석 & 리포트",
            "팀 협업 (5인)",
            "API 접근",
            "우선 지원",
          ]}
          badge="인기"
          note="성장하는 팀에 추천"
        />
        <PricingCard
          tier="Enterprise"
          price="맞춤"
          items={[
            "Pro 전체 포함",
            "무제한 팀원",
            "전담 매니저",
            "SLA 99.9%",
            "커스텀 연동",
          ]}
          note="도입 상담 문의"
          accent="#8B5CF6"
        />
      </div>
      <p className="text-center text-xs mt-6" style={{ color: "var(--briefing-muted)" }}>
        VAT 별도 · 연간 결제 시 20% 할인
      </p>
    </div>
  </LightSlide>,

  /* s8. 순차 등장 리스트 패턴 */
  <LightSlide key="s8">
    <div className="w-full max-w-2xl mx-auto">
      <SectionHeader badge="AnimateIn Stagger" title="순차 등장 리스트" />
      <div className="space-y-3">
        {[
          "디자인 토큰으로 컬러 일괄 관리",
          "CSS 변수 기반 — globals.css 한 곳에서 변경",
          "accent prop으로 컴포넌트별 오버라이드",
          "WCAG AA 접근성 기준 충족 (4.5:1 이상)",
          "prefers-reduced-motion 자동 대응",
          "Framer Motion 기반 부드러운 전환",
        ].map((item, i) => (
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
              <span className="text-sm" style={{ color: "var(--briefing-heading)" }}>
                {item}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  </LightSlide>,

  /* s9. CTA 마무리 */
  <ImpactSlide key="s9">
    <AnimateIn preset="scaleUp">
      <h1
        className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter"
        style={{ color: "var(--briefing-accent)" }}
      >
        시작하세요.
      </h1>
    </AnimateIn>
    <AnimateIn preset="fadeIn" delay={0.4}>
      <p className="mt-6 text-xl leading-relaxed" style={{ color: "var(--briefing-body)" }}>
        CLAUDE.md를 읽고 &quot;내 프레젠테이션 만들어&quot;라고 하면 됩니다.
      </p>
    </AnimateIn>
    <AnimateIn preset="slideUp" delay={0.8}>
      <p className="mt-4 text-sm" style={{ color: "var(--briefing-muted)" }}>
        github.com/jsk3342/web-deck-starter
      </p>
    </AnimateIn>
  </ImpactSlide>,
];
