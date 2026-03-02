"use client";

import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function AboutPage() {
  return (
    <main>
      <h1 className="mb-8">About Me</h1>

      {/* Section 1: Photo + Name + Description */}
      <section className="app-surface p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <Image
          src={getImagePath("/about/me.jpg")}
          alt="Profile photo"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover"
          style={{ border: `1px solid var(--border)` }}
          priority
        />
        <div className="flex-1">
          <h2 className="mb-2">Michael Crowley</h2>
          <p className="text-base">
            Full Stack Developer and Test Automation Specialist with 8+ years of
            experience building scalable web applications and ensuring software
            quality. I'm passionate about solving complex problems, writing clean
            code, and mentoring junior developers.
          </p>
        </div>
      </section>

      {/* Section 2: Background */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Background</h2>
        <p className="mb-4">
          With a strong foundation in both front-end and back-end technologies,
          I've worked on projects ranging from e-commerce platforms to internal
          testing tools. I specialize in React, Spring Boot, and full-stack
          JavaScript development, with a particular expertise in test automation
          using Selenium and Cypress.
        </p>
        <p>
          I'm always learning and exploring new technologies—from containerization
          with Docker to cloud deployment on AWS. I believe in writing code
          that's not just functional, but maintainable and a joy to work with.
        </p>
      </section>

      {/* Section 3: Interests/Fun Facts */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Beyond Code</h2>
        <p>
          When I'm not coding, you can find me [add your interests here]. I'm
          also an active member of the [communities/organizations], where I
          [contribute/participate].
        </p>
      </section>
    </main>
  );
}