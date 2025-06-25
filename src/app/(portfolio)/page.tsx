/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

import { TechStackSection } from "./(components)/tech-stack-section";
import { ProjectsSection } from "./(components)/projects-section";
import { ContactSection } from "./(components)/contact-section";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation className="relative h-[92vh] pt-20 md:pt-28 px-4 mx-auto text-center sm:text-center">
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col items-center p-1 bg-background rounded-lg gap-1">
          <a
            href="https://www.linkedin.com/in/etele-tor%C3%B3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/ToroEtele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-10 h-10 hover:opacity-80"
            />
          </a>
          <ThemeSwitcher className="mt-1 cursor-pointer" />
        </div>

        <div className="px-4 py-10 md:py-16 3xl:py-40">
          <h1 className="relative z-10 mx-auto max-w-3xl 3xl:max-w-6xl text-5xl lg:text-6xl 3xl:text-8xl text-center font-bold text-slate-300">
            {"Hi, I'm Etele — I build reliable, full-stack solutions"
              .split(" ")
              .map((word, index) =>
                word === "full-stack" ? (
                  <PointerHighlight
                    key={index}
                    rectangleClassName="leading-loose border-white"
                    pointerClassName="text-yellow-500 h-3 w-3"
                    containerClassName="inline-block mr-1"
                  >
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      }}
                      className="mr-2 inline-block"
                    >
                      {word}
                    </motion.span>
                  </PointerHighlight>
                ) : (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                )
              )}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg 3xl:text-xl font-normal text-neutral-400"
          >
            I design and develop complete digital experiences—from intuitive
            frontends to powerful backends, topped with streamlined DevOps
            workflows that keep everything running smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              View My Work
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </BackgroundGradientAnimation>
      <TechStackSection className="pt-20 px-6" />
      <ProjectsSection className="pt-12 px-6" />
      <ContactSection />
    </>
  );
}
