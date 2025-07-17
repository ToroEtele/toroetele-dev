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

      <TechStackSection className="h-[90vh] px-6 pt-26 xl:pt-20 mb-20" />

      <ProjectsSection className="px-1 md:px-6 pt-12 md:pt-14" />

      <ContactSection className="px-6" />
    </>
  );
}
