import type { Variants } from "framer-motion";
import type { AnimationPreset } from "./types";
import { MOTION } from "./motion-tokens";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: MOTION.duration.slow, ease: MOTION.ease.default } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: MOTION.duration.slow, ease: MOTION.ease.default } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: MOTION.duration.slow, ease: MOTION.ease.default } },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: MOTION.duration.slow, ease: MOTION.ease.default } },
};

const none: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export const presets: Record<AnimationPreset, Variants> = {
  fadeIn,
  slideUp,
  slideLeft,
  scaleUp,
  none,
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: MOTION.stagger.normal } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: MOTION.duration.normal, ease: MOTION.ease.default } },
};
