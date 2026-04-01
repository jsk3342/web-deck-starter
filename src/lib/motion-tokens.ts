export const MOTION = {
  duration: { fast: 0.2, normal: 0.4, slow: 0.5, dramatic: 1.0 },
  ease: {
    default: "easeOut" as const,
    enter: [0.16, 1, 0.3, 1] as const,
    exit: [0.4, 0, 0.2, 1] as const,
  },
  stagger: { fast: 0.05, normal: 0.12, slow: 0.15 },
} as const;
