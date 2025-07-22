/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HeaderSection } from "@/components/header-section";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

interface TechStackSectionProps {
  className?: string;
}

export function TechStackSection({ className }: TechStackSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="techstack-title"
      className={cn(
        "min-h-[90vh] flex flex-col justify-center mx-auto gap-4 lg:gap-6 2xl:gap-8",
        className
      )}
    >
      <HeaderSection
        cardText="About Me"
        title="Who am I, Technology Stack"
        description="I’m a passionate software engineer with a deep curiosity about building scalable, reliable, and user-friendly full-stack applications. Over the years, I’ve gained experience across multiple technologies, adapting quickly to new challenges and environments."
      />

      <p className="text-xs md:text-sm 3xl:text-lg">
        I don’t emphasize specific languages — I focus on the logic behind how
        systems work. Once you get that, switching stacks is just a matter of
        time and syntax.
        <br />
        <br />
        My strengths? Rapid learning, adaptability, and execution. Here’s a
        glance at the tools and technologies I’ve worked with:
      </p>

      <div className="flex flex-col gap-2 2xl:gap-4">
        <article aria-label="Frontend Technologies">
          <h2 id="techstack-title" className="sr-only">
            Frontend Technologies
          </h2>
          <InfiniteMovingCards
            items={frontEnd}
            direction="right"
            speed="fast"
          />
        </article>

        <article aria-label="Backend Technologies">
          <h2 className="sr-only">Backend Technologies</h2>
          <InfiniteMovingCards items={backEnd} direction="left" speed="fast" />
        </article>

        <article aria-label="Other Technologies">
          <h2 className="sr-only">Other Technologies</h2>
          <InfiniteMovingCards items={other} direction="right" speed="fast" />
        </article>
      </div>
    </section>
  );
}

const large = "h-6 w-6";
const medium = "h-6 w-6";
const small = "h-7 w-7";
const extraSmall = "h-14 w-14";

const frontEnd = [
  {
    label: "React",
    icon: <img src="/react.png" alt="React" className={large} />,
    bgColor: "bg-[rgba(97,218,251,0.15)]",
  },
  {
    label: "Next",
    icon: <img src="/next.png" alt="Next" className={large} />,
    bgColor: "bg-[rgba(0,0,0,0.1)]",
  },
  {
    label: "React Native",
    icon: <img src="/react-native.svg" alt="React Native" className={large} />,
    bgColor: "bg-[rgba(97,218,251,0.15)]",
  },
  {
    label: "Apollo Client",
    icon: (
      <img src="/apollo-graphql.svg" alt="Apollo client" className={large} />
    ),
    bgColor: "bg-[rgba(138,99,210,0.15)]",
  },
  {
    label: "Redux",
    icon: <img src="/redux.svg" alt="Redux" className={large} />,
    bgColor: "bg-[rgba(118,74,188,0.15)]",
  },
  {
    label: "GitHub",
    icon: <img src="/github.png" alt="GitHub" className={large} />,
    bgColor: "bg-[rgba(24,23,23,0.1)]",
  },
  {
    label: "Tailwind",
    icon: <img src="/tailwind.png" alt="Tailwind" className={large} />,
    bgColor: "bg-[rgba(56,189,248,0.15)]",
  },
  {
    label: "Shadcn",
    icon: <img src="/shadcn.png" alt="Shadcn" className={large} />,
    bgColor: "bg-[rgba(31,41,55,0.15)]",
  },
  {
    label: "MaterialUI",
    icon: <img src="/material-ui.svg" alt="MaterialUI" className={large} />,
    bgColor: "bg-[rgba(25,118,210,0.15)]",
  },
];

const backEnd = [
  {
    label: "Python",
    icon: <img src="/python.png" alt="Python" className={small} />,
    bgColor: "bg-[rgba(53,114,165,0.15)]",
  },
  {
    label: "TypeScript",
    icon: <img src="/typescript.png" alt="TypeScript" className={large} />,
    bgColor: "bg-[rgba(49,120,198,0.15)]",
  },
  {
    label: "Golang",
    icon: <img src="/go.png" alt="Golang" className={large} />,
    bgColor: "bg-[rgba(0,173,216,0.15)]",
  },
  {
    label: "C++",
    icon: <img src="/cpp.png" alt="CPP" className={medium} />,
    bgColor: "bg-[rgba(0,89,156,0.15)]",
  },
  {
    label: "Java",
    icon: <img src="/java.svg" alt="Java" className={small} />,
    bgColor: "bg-[rgba(176,114,25,0.15)]",
  },
  {
    label: "GraphQL",
    icon: <img src="/graphql.png" alt="GraphQL" className={small} />,
    bgColor: "bg-[rgba(229,53,171,0.15)]",
  },
  {
    label: "REST",
    icon: <img src="/rest.svg" alt="REST" className={extraSmall} />,
    bgColor: "bg-[rgba(120,120,120,0.1)]",
  },
  {
    label: "MySQL",
    icon: <img src="/mysql.png" alt="MySQL" className={medium} />,
    bgColor: "bg-[rgba(0,117,143,0.15)]",
  },
  {
    label: "PostgreSQL",
    icon: <img src="/postgresql.png" alt="PostgreSQL" className={medium} />,
    bgColor: "bg-[rgba(49,99,140,0.15)]",
  },
];

const other = [
  {
    label: "Docker",
    icon: <img src="/docker.png" alt="Docker" className={large} />,
    bgColor: "bg-[rgba(0,123,186,0.15)]",
  },
  {
    label: "Kubernetes",
    icon: <img src="/kubernetes.png" alt="Kubernetes" className={large} />,
    bgColor: "bg-[rgba(58,121,200,0.15)]",
  },
  {
    label: "Helm",
    icon: <img src="/helm.png" alt="Helm" className={large} />,
    bgColor: "bg-[rgba(45,69,109,0.15)]",
  },
  {
    label: "Solidity",
    icon: <img src="/solidity.png" alt="Solidity" className={large} />,
    bgColor: "bg-[rgba(34,34,34,0.15)]",
  },
  {
    label: "Github Actions",
    icon: (
      <img src="/github-actions.png" alt="GitHub Actions" className={large} />
    ),
    bgColor: "bg-[rgba(36,41,46,0.15)]",
  },
  {
    label: "Hardhat",
    icon: <img src="/hardhat.png" alt="Hardhat" className={large} />,
    bgColor: "bg-[rgba(246,189,22,0.15)]",
  },
  {
    label: "Ethereum",
    icon: <img src="/ethereum.png" alt="Ethereum" className={large} />,
    bgColor: "bg-[rgba(98,126,234,0.15)]",
  },
  {
    label: "Web3.js",
    icon: <img src="/web3js.svg" alt="Web3js" className={large} />,
    bgColor: "bg-[rgba(255,209,0,0.15)]",
  },
  {
    label: "Ethers.js",
    icon: <img src="/ethersjs.svg" alt="Web3js" className={large} />,
    bgColor: "bg-[rgba(97,218,251,0.15)]",
  },
];
