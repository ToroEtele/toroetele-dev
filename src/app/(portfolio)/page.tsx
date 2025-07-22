import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./(components)/hero-section"), {
  ssr: !!false,
  loading: () => <div className="h-[92vh]" />,
});

import { TechStackSection } from "./(components)/tech-stack-section";
import { ProjectsSection } from "./(components)/projects-section";
import { ContactSection } from "./(components)/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <TechStackSection className="max-w-3xl 3xl:max-w-7xl pt-26 xl:pt-20 px-6 mb-20" />

      <ProjectsSection className="max-w-5xl 3xl:max-w-7xl pt-12 lg:pt-14 px-6" />

      <ContactSection className="px-6" />
    </>
  );
}
