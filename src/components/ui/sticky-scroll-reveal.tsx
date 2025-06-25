"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { IPadMockup } from "react-device-mockup";
import { Spotlight } from "./spotlight";

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
      <div className="mx-auto flex max-w-8xl flex-col lg:flex-row items-start justify-center gap-20 px-6">
        <div className="max-w-md py-22 space-y-32">
          {content.map((item, index) => (
            <div key={item.title + index} className="min-h-[50vh]">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-4 text-lg text-muted-foreground"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        <Spotlight />

        <div className="sticky top-20">
          {/* <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-[600px] h-[400px] rounded-[30px] bg-[#7f5af0]/20 blur-3xl" />
          </div> */}
          <IPadMockup
            screenWidth={550}
            isLandscape
            hideNavBar
            hideStatusBar
            frameColor="#000"
            className="relative z-40 overflow-auto"
          >
            {content[activeCard].content}
          </IPadMockup>
        </div>
      </div>
    </motion.section>
  );
};
