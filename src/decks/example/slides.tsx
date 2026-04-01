import AnimateIn from "@/components/ui/AnimateIn";
import LightSlide from "@/components/slides/LightSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import SectionHeader from "@/components/slides/SectionHeader";
import ServiceCard from "@/components/slides/ServiceCard";
import PhaseCard from "@/components/slides/PhaseCard";
import PricingCard from "@/components/slides/PricingCard";
import type { DeckMetadata } from "@/lib/types";

export const metadata: DeckMetadata = {
  title: "예시 브리핑 덱",
  date: "2026-04-02",
  description: "Web Deck Starter 예시",
};

export const slides = [
  /* ═══ 기 (起) — 오프닝 ═══ */

  <ImpactSlide key="s1">
    <AnimateIn preset="fadeIn">
      <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--briefing-accent)" }}>
        Web Deck Starter
      </p>
      <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-tight tracking-tight"
        style={{ color: "var(--briefing-heading)" }}>
        이 프레젠테이션,
        <br />
        <span style={{ color: "var(--briefing-accent)" }}>코드로 만들었습니다.</span>
      </h1>
    </AnimateIn>
    <AnimateIn preset="fadeIn" delay={0.4}>
      <p className="mt-8 text-lg" style={{ color: "var(--briefing-body)" }}>
        Next.js + Tailwind CSS + Framer Motion
      </p>
    </AnimateIn>
  </ImpactSlide>,

  /* ═══ 승 (承) — 구성 요소 ═══ */

  <LightSlide key="s2">
    <div className="w-full">
      <SectionHeader badge="Components" title="6가지 컴포넌트로 구성됩니다" />
      <div className="grid grid-cols-3 gap-5">
        <PhaseCard num="01" label="LightSlide" title="라이트 래퍼" detail="캔버스 텍스처 배경 위에 콘텐츠를 배치합니다" accent="#3B82F6" />
        <PhaseCard num="02" label="ImpactSlide" title="임팩트 래퍼" detail="한 단어, 숫자, 킬링 워드를 센터에 띄웁니다" accent="#EAB308" />
        <PhaseCard num="03" label="ServiceCard" title="서비스 카드" detail="체크리스트 기반 기능 비교에 사용합니다" accent="#A855F7" />
      </div>
    </div>
  </LightSlide>,

  /* ═══ 전 (轉) — 비교 ═══ */

  <LightSlide key="s3">
    <div className="w-full">
      <SectionHeader badge="Comparison" title="파워포인트 vs 웹 덱" />
      <div className="grid grid-cols-2 gap-6">
        <ServiceCard
          title="파워포인트"
          description="전통적인 방식"
          highlights={[
            "파일 전송 필요 — 메일, 카톡",
            "폰트 깨짐 — 환경마다 다름",
            "수정 시 재전송 필요",
            "인터랙티브 불가능",
          ]}
          negative
        />
        <ServiceCard
          title="웹 덱"
          description="URL 하나면 끝"
          highlights={[
            "링크 공유 — 어디서든 접속",
            "웹 폰트 — 환경 무관 동일",
            "수정 즉시 반영 — 재전송 없음",
            "애니메이션 + 인터랙티브",
          ]}
          badge="추천"
        />
      </div>
    </div>
  </LightSlide>,

  /* ═══ 결 (結) — CTA ═══ */

  <ImpactSlide key="s4">
    <AnimateIn preset="scaleUp">
      <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter"
        style={{ color: "var(--briefing-accent)" }}>
        시작하세요.
      </h1>
    </AnimateIn>
    <AnimateIn preset="fadeIn" delay={0.4}>
      <p className="mt-6 text-lg" style={{ color: "var(--briefing-body)" }}>
        CLAUDE.md를 읽고 &quot;내 브리핑 덱 만들어&quot;라고 말하면 됩니다.
      </p>
    </AnimateIn>
  </ImpactSlide>,
];
