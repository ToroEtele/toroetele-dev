"use client";

import Image from "next/image";
import { useLottie } from "lottie-react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";

import { HeaderSection } from "@/components/header-section";
import comaigSoon from "./animations/coming-soon.json";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={cn("min-h-[90vh] max-w-8xl mx-auto", className)}
    >
      <HeaderSection
        cardText="Projects"
        title="What did I build so far?"
        description="Over the years, I’ve been involved in building a variety of projects—both small and large—across different domains. Whether at work or during my free time, I enjoy developing applications that solve real problems and continuously challenge me to grow as a developer."
      />
      <StickyScroll content={content} />
    </section>
  );
}

const content = [
  {
    title: "Harvest Mate",
    description:
      "In my free time, I’m developing a comprehensive farm management tool designed to empower agricultural businesses. This app helps companies efficiently track daily tasks, manage multiple fields, monitor crop health, and keep detailed records of incomes and expenses. ",
    content: (
      <Image
        src="/harvest-mate-landing-page.png"
        width={600}
        height={400}
        className="z-50"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "New layer of farming",
    description:
      "The application is built using a diverse tech stack, including Next.js, Apollo, GraphQL, and Python. Thanks to the wide range of features it offers, I’ve had the opportunity to work with many different technologies throughout its development. One of the most exciting aspects has been exploring Earth observation data from the Sentinel satellites. Processing multispectral imagery to generate NDVI maps and other vegetation indexes has not only been technically rewarding but has also deepened my appreciation for the role of remote sensing in modern agriculture.",
    content: (
      <div className=" z-50 flex h-full w-full items-center justify-center text-white">
        <Image
          src="/harvest-mate-dashboard.png"
          width={600}
          height={300}
          className="z-50 h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Explore",
    description:
      "Although this project is not open-source, you can explore the features I’ve built by visiting harvest-mate.com or simply clicking the button below.",
    content: (
      <div className="z-50 flex h-full w-full items-center justify-center text-white">
        <Image
          src="/harvest-mate-field-view.png"
          width={600}
          height={300}
          className="z-50 h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "More to come",
    description:
      "You can find a link to my GitHub profile in the social section, although I don’t have many public repositories at the moment. Most of my experience comes from working on over six projects in a professional setting, as well as building my own farm management application in my free time. That said, I plan to start publishing more open-source projects soon to better showcase my skills through real-world use cases.",
    content: <ComingSoonAnimation />,
  },
];

export function ComingSoonAnimation() {
  const options = {
    animationData: comaigSoon,
    loop: true,
  };

  const { View } = useLottie(options, { height: 300 });

  return (
    <div className="z-50 flex h-full w-full items-center justify-center bg-white">
      {View}
    </div>
  );
}
