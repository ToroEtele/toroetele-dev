import Image from "next/image";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";

import comaigSoon from "./animations/coming-soon.json";
import { useLottie } from "lottie-react";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section className={cn("min-h-[90vh] max-w-8xl mx-auto", className)}>
      <h1 className="w-full text-5xl 3xl:text-6xl mb-4 md:mb-6 3xl:mb-16 text-center">
        Projects
      </h1>
      <StickyScroll content={content} />
    </section>
  );
}

const content = [
  {
    title: "Harvest Mate",
    description:
      "Track expenses, fieldwork, and crop health with ease. Harvest Mate is ready to work the land with you. Unlock a new layer of farm intelligence with multispectral satellite imagery — analyze crop health, spot issues early, and make data-driven decisions with confidence.",
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
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
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
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
