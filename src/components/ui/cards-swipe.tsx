"use client";
import { motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import type React from "react";
import { clx } from "../../lib/clx-merge";

export const CardsSwipeContainer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={clx("relative size-52", props.className)} />
);

type CardSwipeProps = {
  children: React.ReactNode;
  onSendToBack: () => void;
};

export function CardSwipe({ children, onSendToBack }: CardSwipeProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 180;
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      className="absolute h-52 w-52 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}