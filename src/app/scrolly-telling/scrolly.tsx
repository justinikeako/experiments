"use client";

import { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";

/**
 * TODO
 * Add resizing support for responsive scrolly
 * Add border radius support
 * Add scale correction hooks for children
 * Add rotation support (remove dependence on transform origin top-left)
 */

const MotionSlot = motion(Slot);

type Transform = { x: number; y: number; scaleX: number; scaleY: number };
const defaultTransform = { x: 0, y: 0, scaleX: 1, scaleY: 1 };

export function ScrollyElement({
  scrollyId,
  children,
}: React.PropsWithChildren<{ scrollyId: string }>) {
  const [scrollRange, setScrollRange] = useState<number[]>([0, 1]);
  const [transformArr, setTransformArr] = useState<Transform[]>([
    defaultTransform,
    defaultTransform,
  ]);

  const { scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    scrollRange,
    transformArr.map(({ x }) => x),
  );
  const y = useTransform(
    scrollYProgress,
    scrollRange,
    transformArr.map(({ y }) => y),
  );
  const scaleX = useTransform(
    scrollYProgress,
    scrollRange,
    transformArr.map(({ scaleX }) => scaleX),
  );
  const scaleY = useTransform(
    scrollYProgress,
    scrollRange,
    transformArr.map(({ scaleY }) => scaleY),
  );

  useEffect(() => {
    const elements = document.querySelectorAll(
      `[data-scrolly-id=${scrollyId}]`,
    );
    elements.forEach((element, key) => {
      if (key > 0) element.setAttribute("style", "opacity:0;");
    });

    const domRects = Array.from(elements).map((element) =>
      element.getBoundingClientRect(),
    );

    const transformArr: Transform[] = [];

    let initialDomRect: DOMRect = domRects[0];

    for (const domRect of domRects) {
      transformArr.push({
        x: domRect.x - initialDomRect.x,
        y: domRect.y - initialDomRect.y,
        scaleX: domRect.width / initialDomRect.width,
        scaleY: domRect.height / initialDomRect.height,
      });
    }

    if (scrollyId === "box2") console.log(domRects);

    const sectionCount = elements.length;

    setTransformArr(transformArr);
    setScrollRange(
      Array.from(Array(sectionCount)).map((_, index) =>
        index === 0 ? 0 : index / (sectionCount - 1),
      ),
    );
  }, [scrollyId, setTransformArr]);

  return (
    <MotionSlot data-scrolly-id={scrollyId} style={{ x, y, scaleX, scaleY }}>
      {children}
    </MotionSlot>
  );
}
