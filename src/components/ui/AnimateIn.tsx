"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { presets } from "@/lib/animations";
import type { AnimationPreset } from "@/lib/types";

interface AnimateInProps {
  preset?: AnimationPreset;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateIn({
  preset = "fadeIn",
  children,
  className,
  delay = 0,
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? presets.none : presets[preset];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={prefersReducedMotion ? { duration: 0 } : { delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
