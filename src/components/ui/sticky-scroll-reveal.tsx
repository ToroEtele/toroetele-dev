"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

import { DeviceMockup } from "../primitives/device-mockup";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: React.ReactNode;
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
    <motion.section ref={ref} className="relative w-full lg:py-20">
      <div className="mx-auto flex max-w-8xl flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-8 xl:gap-20">
        <div className="lg:max-w-md py-22 space-y-22 lg:space-y-32">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="min-h-[30vh] lg:min-h-[50vh] w-[350px] md:w-[500px] lg:w-auto text-center px-6 lg:text-left"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl 2xl:text-3xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-4 text-xs lg:text-sm 2xl:text-lg text-muted-foreground"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="sticky top-0 self-center lg:self-auto z-10">
          <div className="relative pt-20 pb-10 w-full h-full">
            <div className="absolute inset-0 bg-background z-0" />

            <DeviceMockup className="relative z-10">
              {content[activeCard].content}
            </DeviceMockup>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
