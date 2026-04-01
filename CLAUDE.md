# Web Deck Starter

코드로 만드는 웹 프레젠테이션. Next.js 16 + Tailwind v4 + Framer Motion.

파워포인트 대신 URL로 공유하는 풀스크린 슬라이드 덱을 만듭니다.

## 빠른 시작

```bash
pnpm install
pnpm dev        # localhost:3000
```

`src/decks/example/slides.tsx`에 예시 덱이 있습니다 → `localhost:3000/example`

## 덱 만들기

`src/decks/<이름>/slides.tsx` 파일을 만들면 `/<이름>` URL에서 자동 접근됩니다.

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
  title: "내 프레젠테이션",
  date: "2026-04-01",
};

export const slides = [
  <ImpactSlide key="s1">
    <AnimateIn preset="fadeIn">
      <h1 className="text-6xl font-bold">첫 번째 슬라이드</h1>
    </AnimateIn>
  </ImpactSlide>,
  <LightSlide key="s2">
    <div className="w-full">
      <SectionHeader badge="Section" title="두 번째 슬라이드" />
      {/* 여기에 카드 등 콘텐츠 */}
    </div>
  </LightSlide>,
];
```

## 슬라이드 래퍼 (2종)

모든 슬라이드는 래퍼 컴포넌트로 감쌉니다. 래퍼가 배경과 레이아웃을 처리합니다.

### LightSlide — 콘텐츠 슬라이드
카드, 리스트, 비교 등 정보 전달용. 캔버스 텍스처 배경 + max-w 콘텐츠 영역.
```tsx
<LightSlide>
  <div className="w-full">
    {/* 카드, 그리드 등 */}
  </div>
</LightSlide>
```

### ImpactSlide — 임팩트 슬라이드
큰 숫자, 핵심 메시지, CTA 등 한 가지에 집중. 센터 정렬.
```tsx
<ImpactSlide>
  <h1 className="text-7xl font-black">핵심 메시지</h1>
</ImpactSlide>
```
- `bg` prop으로 배경색 오버라이드 가능 (기본: `--briefing-bg`)

## 콘텐츠 컴포넌트 (4종)

### SectionHeader
슬라이드 상단 제목 영역. 영문 뱃지(uppercase) + 한글 제목.
```tsx
<SectionHeader
  badge="Overview"          // 영문 라벨 (자동 uppercase)
  title="우리 서비스 소개"    // 메인 제목
  accent="#3B82F6"           // 선택: 뱃지 색상 (기본: --briefing-accent)
/>
```

### ServiceCard
체크리스트 카드. 서비스 설명, 기능 비교, Before/After에 활용.
```tsx
<ServiceCard
  title="카드 제목"
  description="한 줄 설명"
  highlights={["항목 1", "항목 2", "항목 3"]}
  badge="추천"              // 선택: 상단 배지 → accent 테두리 강조
  negative                  // 선택: true면 체크 대신 X 아이콘 (비교 시 "기존 방식" 측)
  accent="#3B82F6"           // 선택: 포인트 컬러
/>
```

### PhaseCard
넘버 워터마크 카드. 타임라인, 단계 설명, 순서가 있는 항목에 활용.
```tsx
<PhaseCard
  num="01"                  // 배경 워터마크 숫자
  label="Phase 1"           // 영문 라벨 (accent 색상)
  title="기획 단계"          // 메인 제목
  detail="요구사항 분석과 설계를 진행합니다"
  accent="#3B82F6"           // 선택: 포인트 컬러
/>
```

### PricingCard
가격 카드. Tier별 비교에 활용. 포함/미포함 항목 구분.
```tsx
<PricingCard
  tier="Pro"                // Tier 이름
  price="29"                // 가격
  unit="/월"                // 선택: 단위
  items={["기능 A", "기능 B"]}          // 포함 항목 (✓)
  excluded={["기능 C"]}                 // 선택: 미포함 항목 (✗)
  badge="인기"              // 선택: 상단 배지 → accent 강조
  note="연간 결제 시 20% 할인"          // 선택: 하단 주석
  accent="#3B82F6"           // 선택: 포인트 컬러
/>
```

## 애니메이션 (AnimateIn)

콘텐츠를 감싸면 진입 애니메이션이 적용됩니다. `prefers-reduced-motion` 자동 대응.

```tsx
<AnimateIn preset="slideUp" delay={0.3}>
  <p>이 텍스트가 아래에서 올라옵니다</p>
</AnimateIn>
```

| 프리셋 | 효과 |
|--------|------|
| `fadeIn` | 투명→불투명 (기본값) |
| `slideUp` | 아래→위 등장 |
| `slideLeft` | 오른쪽→왼쪽 등장 |
| `scaleUp` | 작게→크게 등장 |
| `none` | 애니메이션 없음 |

`delay` prop으로 순차 등장 효과: 0, 0.2, 0.4… 순서로 증가.

## 슬라이드 네비게이션

| 키 | 동작 |
|----|------|
| → / Space | 다음 |
| ← | 이전 |
| f | 풀스크린 |
| Home / End | 처음 / 끝 |

## 커스터마이징

### 브랜드 컬러 변경
`src/app/globals.css`의 CSS 변수를 수정하면 전체 덱에 반영됩니다.

```css
:root {
  --briefing-accent: #166534;    /* ← 이 값을 브랜드 컬러로 변경 */
  --briefing-bg: #f5f5f6;       /* 슬라이드 배경 */
  --briefing-card: #ffffff;      /* 카드 배경 */
  --briefing-heading: #1e1e24;   /* 제목 색상 */
  --briefing-body: #606069;      /* 본문 색상 (WCAG AA 충족) */
}
```

- **전역 변경**: `--briefing-accent` 수정 → 모든 컴포넌트 기본 포인트 컬러 변경
- **개별 오버라이드**: 각 컴포넌트의 `accent` prop → 해당 컴포넌트만 다른 색상

### 타이포그래피 토큰
반응형 텍스트 크기. `clamp()`로 뷰포트에 맞게 자동 조절.
```css
--slide-text-kpi: clamp(4rem, 10vw, 8rem);     /* 핵심 숫자 */
--slide-text-h1: clamp(1.875rem, 3.5vw, 3rem); /* 대제목 */
--slide-text-body: clamp(0.875rem, 1.2vw, 1rem); /* 본문 */
```

### 차트 팔레트
`--chart-1` ~ `--chart-10` (Tableau 10 기반). 차트 라이브러리 도입 시 활용.

### 모션 토큰
`src/lib/motion-tokens.ts`에서 애니메이션 속도/이징 조절.

## 자주 쓰는 레이아웃 패턴

### 2단 비교
```tsx
<div className="grid grid-cols-2 gap-6">
  <ServiceCard title="Before" highlights={[...]} negative />
  <ServiceCard title="After" highlights={[...]} badge="추천" />
</div>
```

### 3단 카드
```tsx
<div className="grid grid-cols-3 gap-5">
  <PhaseCard num="01" label="Step 1" title="..." detail="..." accent="#3B82F6" />
  <PhaseCard num="02" label="Step 2" title="..." detail="..." accent="#EAB308" />
  <PhaseCard num="03" label="Step 3" title="..." detail="..." accent="#A855F7" />
</div>
```

### 3-Tier 가격
```tsx
<div className="grid grid-cols-3 gap-5">
  <PricingCard tier="Basic" price="9" unit="/월" items={[...]} />
  <PricingCard tier="Pro" price="29" unit="/월" items={[...]} badge="인기" />
  <PricingCard tier="Enterprise" price="99" unit="/월" items={[...]} />
</div>
```

### 순차 등장 리스트
```tsx
{items.map((item, i) => (
  <AnimateIn key={item} preset="slideUp" delay={0.1 + i * 0.12}>
    <div>...</div>
  </AnimateIn>
))}
```

## 새 컴포넌트 추가

`src/components/slides/`에 컴포넌트를 만들고 `index.ts`에 등록.

규칙:
- 컬러는 CSS 변수 참조 (`var(--briefing-heading)` 등)
- accent prop은 `accent?: string`으로 선언, 기본값은 `var(--briefing-accent)`
- 배경은 `var(--briefing-card)`, 본문은 `var(--briefing-body)`

## 배포

```bash
pnpm build    # 빌드 확인
```

Vercel에 연결 → `git push`로 자동 배포. URL로 프레젠테이션 공유.

## 파일 구조

```
src/
├── app/
│   ├── globals.css         ← 디자인 토큰 (컬러, 타이포, 레이아웃)
│   ├── [deck]/page.tsx     ← 덱 뷰어 (키보드 내비, 풀스크린)
│   └── layout.tsx
├── components/
│   ├── canvas/             ← CanvasBackground (텍스처 배경)
│   ├── slides/             ← 슬라이드 컴포넌트 6종
│   └── ui/                 ← AnimateIn (애니메이션)
├── decks/
│   └── example/slides.tsx  ← 예시 덱 (참고용)
└── lib/
    ├── animations.ts       ← 애니메이션 프리셋
    ├── motion-tokens.ts    ← 모션 속도/이징 상수
    └── types.ts            ← 타입 정의
```
