# Web Deck Starter

웹 프레젠테이션 시스템. Next.js 16 + Tailwind v4 + Framer Motion.

## 덱 생성

`src/decks/<name>/slides.tsx` 파일을 만들면 `/<name>` 경로에서 자동 접근.

```tsx
import AnimateIn from "@/components/ui/AnimateIn";
import LightSlide from "@/components/slides/LightSlide";
import ImpactSlide from "@/components/slides/ImpactSlide";
import SectionHeader from "@/components/slides/SectionHeader";
import ServiceCard from "@/components/slides/ServiceCard";
import PhaseCard from "@/components/slides/PhaseCard";
import PricingCard from "@/components/slides/PricingCard";
import type { DeckMetadata } from "@/lib/types";

export const metadata: DeckMetadata = {
  title: "덱 제목",
  date: "2026-04-01",
};

export const slides = [
  <ImpactSlide key="s1">...</ImpactSlide>,
  <LightSlide key="s2">...</LightSlide>,
];
```

## 4막 구조 (기-승-전-결)

Impact(한 단어/숫자) ↔ Info(카드/리스트) 리듬을 교차시킨다.

| 막 | 역할 | 권장 컴포넌트 |
|----|------|-------------|
| 기 (起) | 클라이언트 관점의 질문으로 시작 | ImpactSlide + AnimateIn |
| 승 (承) | 신뢰 구축 — 스코프, 타임라인 | LightSlide + PhaseCard, ServiceCard |
| 전 (轉) | 킬링 파트 — 비교, 가격 | ImpactSlide, ServiceCard(negative), PricingCard |
| 결 (結) | 결정 유도 — CTA | ServiceCard + ImpactSlide |

기본 12장, 최소 4장, 최대 15장.

## 컴포넌트 레퍼런스

### LightSlide
라이트 배경 래퍼. 캔버스 텍스처 배경 위에 콘텐츠 배치.
```tsx
<LightSlide>{children}</LightSlide>
```

### ImpactSlide
센터 정렬 래퍼. 한 단어, 숫자, 킬링 워드용.
```tsx
<ImpactSlide bg?>{children}</ImpactSlide>
```

### SectionHeader
섹션 구분. badge(uppercase 라벨) + title.
```tsx
<SectionHeader badge="Timeline" title="2~3주면 완성됩니다" accent?="#3B82F6" />
```

### ServiceCard
체크리스트 카드. 기능 비교, 서비스 설명에 사용.
```tsx
<ServiceCard
  title="서비스명"
  description="한 줄 설명"
  highlights={["항목1", "항목2", "항목3"]}
  badge?="추천"           // 상단 배지
  negative?               // true면 X 아이콘 (비교 시)
  accent?="#3B82F6"        // 포인트 컬러
/>
```

### PhaseCard
넘버 카드. 타임라인, 단계별 설명에 사용.
```tsx
<PhaseCard
  num="01"
  label="착수"
  title="1~2일"
  detail="킥오프 미팅, 콘텐츠 수령"
  accent?="#3B82F6"
/>
```

### PricingCard
가격 카드. 3-Tier 비교에 사용.
```tsx
<PricingCard
  tier="Standard"
  price="547"
  unit?="만원"
  items={["포함 항목1", "포함 항목2"]}
  excluded?={["미포함 항목"]}
  badge?="추천"
  note?="VAT 별도"
  accent?="#3B82F6"
/>
```

### AnimateIn
진입 애니메이션 래퍼. `prefers-reduced-motion` 자동 대응.
```tsx
<AnimateIn preset="fadeIn" delay={0.3}>
  {children}
</AnimateIn>
```
프리셋: `fadeIn` | `slideUp` | `slideLeft` | `scaleUp` | `none`

## 디자인 토큰

`src/app/globals.css`의 `:root`에 정의. 값을 바꾸면 전체 덱에 반영.

### 컬러 토큰
```css
--briefing-bg: #f5f5f6;       /* 슬라이드 배경 */
--briefing-card: #ffffff;      /* 카드 배경 */
--briefing-heading: #1e1e24;   /* 제목 */
--briefing-body: #606069;      /* 본문 (WCAG AA 5.7:1) */
--briefing-accent: #166534;    /* 기본 포인트 컬러 */
--briefing-muted: #9ca3af;     /* 캡션/주석 */
--briefing-negative: #ef4444;  /* 부정 아이콘 */
--briefing-excluded: #d1d5db;  /* 미포함 항목 */
```

accent 커스텀: 각 컴포넌트의 `accent` prop으로 개별 오버라이드 가능.
전역 변경: `--briefing-accent` 값을 바꾸면 기본 포인트 컬러 전체 변경.

### 타이포그래피 토큰
```css
--slide-text-kpi: clamp(4rem, 10vw, 8rem);
--slide-text-h1: clamp(1.875rem, 3.5vw, 3rem);
--slide-text-h2: clamp(1.25rem, 2vw, 1.75rem);
--slide-text-body: clamp(0.875rem, 1.2vw, 1rem);
--slide-text-caption: clamp(0.625rem, 0.8vw, 0.75rem);
```

### 차트 팔레트 (Tableau 10)
`--chart-1` ~ `--chart-10` — Recharts/D3 도입 시 사용.

## 모션 토큰

`src/lib/motion-tokens.ts`에 정의. duration/easing/stagger 값.
```ts
MOTION.duration.fast    // 0.2s
MOTION.duration.normal  // 0.4s
MOTION.duration.slow    // 0.5s
MOTION.duration.dramatic // 1.0s
MOTION.stagger.normal   // 0.12s
```

## 네비게이션

| 키 | 동작 |
|----|------|
| → / Space | 다음 슬라이드 |
| ← | 이전 슬라이드 |
| f | 풀스크린 토글 |
| Home / End | 처음 / 끝 |

## 색상 규칙

- PhaseCard accent: `#3B82F6`(파랑), `#EAB308`(노랑), `#A855F7`(보라) 교차 사용
- ServiceCard negative: 빨간 X 아이콘 — 비교 슬라이드의 "기존 방식" 측
- ServiceCard badge: 추천 옵션에만 — badge 있으면 accent 테두리 강조

## 배포

```bash
pnpm build   # 빌드 확인
```

Vercel에 연결하면 `git push`로 자동 배포.

## 레퍼런스 덱

`src/decks/example/slides.tsx` — 4장짜리 예시 덱. 새 덱 만들 때 참고.
