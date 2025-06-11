/* eslint-disable @next/next/no-img-element */
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function TechStackSection() {
  return (
    <section className="max-w-4xl 3xl:max-w-6xl mx-auto">
      <h1 className="text-4xl 3xl:text-6xl mb-4 md:mb-6 3xl:mb-16">
        Tech stack
      </h1>
      <p className="text-sm 3xl:text-xl mb-4">
        I usually avoid emphasizing specific programming languages when
        presenting my skills. For me, the language itself doesn&apos;t matter
        that much. Of course, you need to get used to the syntax and dive into
        specific libraries, but what truly matters is understanding how the
        computer works—how it &quot;thinks&quot; and how you can control it
        through code. Once you understand that underlying logic, you can work
        with any language—it just becomes a matter of practice. <br /> <br />
        I&apos;ve often been thrown into new technologies, languages, and ideas,
        and every time I&apos;ve adapted quickly. I&apos;d say my greatest
        strengths are adaptability, eagerness to learn, and fast execution. So
        rather than focusing on languages, here&apos;s a better way to look at
        it: these are the technologies I&apos;ve worked with so far. Take a
        look:
      </p>

      <InfiniteMovingCards items={frontEnd} direction="right" speed="fast" />
      <InfiniteMovingCards items={backEnd} direction="left" speed="fast" />
      <InfiniteMovingCards items={other} direction="right" speed="fast" />
    </section>
  );
}

const frontEnd = [
  {
    label: "React",
    icon: <img src="/react.png" alt="React" className="h-14 w-16" />,
  },
  {
    label: "Next",
    icon: <img src="/next.png" alt="Next" className="h-16 w-16" />,
  },
  {
    label: "React Native",
    icon: (
      <img src="/react-native.svg" alt="React Native" className="h-16 w-16" />
    ),
  },
  {
    label: "Apollo Client",
    icon: (
      <img
        src="/apollo-graphql.svg"
        alt="Apollo client"
        className="h-16 w-16"
      />
    ),
  },
  {
    label: "Redux",
    icon: <img src="/redux.svg" alt="Redux" className="h-16 w-16" />,
  },
  {
    label: "GitHub",
    icon: <img src="/github.png" alt="GitHub" className="h-16 w-16" />,
  },
  {
    label: "Tailwind",
    icon: <img src="/tailwind.png" alt="Tailwind" className="h-14 w-16" />,
  },
  {
    label: "Shadcn",
    icon: <img src="/shadcn.png" alt="Shadcn" className="h-16 w-16" />,
  },
  {
    label: "MaterialUI",
    icon: <img src="/material-ui.svg" alt="MaterialUI" className="h-16 w-16" />,
  },
];

const backEnd = [
  {
    label: "Python",
    icon: <img src="/python.png" alt="Python" className="h-22 w-22" />,
  },
  {
    label: "TypeScript",
    icon: <img src="/typescript.png" alt="TypeScript" className="h-16 w-16" />,
  },
  {
    label: "Golang",
    icon: <img src="/go.png" alt="Golang" className="h-16 w-16" />,
  },
  {
    label: "Cpp",
    icon: <img src="/cpp.png" alt="CPP" className="h-18 w-16" />,
  },
  {
    label: "Java",
    icon: <img src="/java.svg" alt="Java" className="h-20 w-20" />,
  },
  {
    label: "GraphQL",
    icon: <img src="/graphql.png" alt="GraphQL" className="h-20 w-20" />,
  },
  {
    label: "REST",
    icon: <img src="/rest.svg" alt="REST" className="h-52 w-52" />,
  },
  {
    label: "MySQL",
    icon: <img src="/mysql.png" alt="MySQL" className="h-18 w-18" />,
  },
  {
    label: "PostgreSQL",
    icon: <img src="/postgresql.png" alt="PostgreSQL" className="h-18 w-18" />,
  },
];

const other = [
  {
    label: "Docker",
    icon: <img src="/docker.png" alt="Docker" className="h-16 w-16" />,
  },
  {
    label: "Kubernetes",
    icon: <img src="/kubernetes.png" alt="Kubernetes" className="h-16 w-16" />,
  },
  {
    label: "Helm",
    icon: <img src="/helm.png" alt="Helm" className="h-16 w-16" />,
  },
  {
    label: "Solidity",
    icon: <img src="/solidity.png" alt="Solidity" className="h-16 w-16" />,
  },
  {
    label: "Github Actions",
    icon: (
      <img
        src="/github-actions.png"
        alt="GitHub Actions"
        className="h-16 w-16"
      />
    ),
  },
  {
    label: "Hardhat",
    icon: <img src="/hardhat.png" alt="Hardhat" className="h-16 w-16" />,
  },
  {
    label: "Ethereum",
    icon: <img src="/ethereum.png" alt="Ethereum" className="h-16 w-16" />,
  },
  {
    label: "Web3.js",
    icon: <img src="/web3js.svg" alt="Web3js" className="h-16 w-16" />,
  },
  {
    label: "Ethers.js",
    icon: <img src="/ethersjs.svg" alt="Web3js" className="h-16 w-16" />,
  },
];
