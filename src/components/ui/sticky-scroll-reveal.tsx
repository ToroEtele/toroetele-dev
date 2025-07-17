"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

import { Spotlight } from "./spotlight";
import DeviceMockup from "../primitives/device-mockup";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["20% 40%", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) =>
        Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc])
          ? index
          : acc,
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.section ref={ref} className="relative w-full py-10 lg:py-20">
      <div className="mx-auto flex max-w-8xl flex-col-reverse md:flex-row items-start justify-center gap-20">
        <div className="w-full md:max-w-md px-6 py-22 space-y-32">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="w-full md:w-auto text-center md:text-left min-h-[30vh] md:min-h-[50vh]"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl lg:text-3xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-4 text-xs lg:text-lg text-muted-foreground"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        <div className="sticky top-20 self-center md:self-auto">
          <DeviceMockup>{content[activeCard].content}</DeviceMockup>
        </div>
      </div>
    </motion.section>
  );
};
