import React from "react";

// import Image from "next/image";

export function GitHubSection() {
  return (
    <section className="min-h-[60vh] max-w-3xl mx-auto text-center sm:text-center">
      <h1 className="text-4xl 3xl:text-6xl mb-4 md:mb-6 3xl:mb-16">Socials</h1>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://ghchart.rshah.org/ToroEtele"
        alt="GitHub Contribution Chart"
        width={800}
        height={200}
      />
    </section>
  );
}
