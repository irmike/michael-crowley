"use client";

import Image from "next/image";
import { getImagePath } from "@/utils/paths";
import Hobby from "@/components/Hobby/Hobby";
import { hobbyData } from "@/data/hobbyData";

export default function AboutPage() {
  return (
    <main className="app-main">
      <h1 className="mb-8 text-3xl font-bold text-[--accent]" data-testid="about-heading">About Me</h1>

      {/* Section 1: Photo + Name + Description */}
      <section className="app-surface p-6 mb-8 flex flex-col md:flex-row items-center gap-6 rounded-xl" data-testid="about-profile-section">
        <Image
          src={getImagePath("/about/me.jpg")}
          alt="Profile photo"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border border-[--border]"
          priority
          data-testid="about-profile-image"
        />
        <div className="flex-1" data-testid="about-profile-details">
          <h2 className="mb-2 text-xl font-semibold text-[--accent]" data-testid="about-profile-name">
            Michael Crowley
          </h2>
          <p className="text-base text-[--muted]" data-testid="about-profile-desc">
            Full Stack Developer and Test Automation Specialist with 8+ years of
            experience building scalable web applications and ensuring software
            quality. I'm passionate about solving complex problems, writing clean
            code, and mentoring junior developers.
          </p>
        </div>
      </section>

      {/* Section 2: Background */}
      <section className="app-surface p-6 mb-8 rounded-xl" data-testid="about-background-section">
        <h2 className="text-2xl font-bold mb-4 text-[--accent]" data-testid="about-background-title">Background</h2>
        <p className="mb-4 text-[--muted]" data-testid="about-background-desc1">
          With a strong foundation in both front-end and back-end technologies,
          I've worked on projects ranging from SaaS platforms to internal
          testing tools. I specialize in React, Spring Boot, and full-stack
          JavaScript development, with a particular expertise in test automation
          using Selenium and Cypress.
        </p>
        <p className="text-[--muted]" data-testid="about-background-desc2">
          I'm always learning and exploring new technologies—from containerization
          with Docker to cloud deployment on AWS. I believe in writing code
          that's not just functional, but maintainable and a joy to work with.
        </p>
      </section>

      {/* Section 3: Interests & Hobbies */}
      <section className="app-surface p-6 rounded-xl" data-testid="about-hobbies-section">
        <h2 className="text-2xl font-bold mb-4 text-[--accent]" data-testid="about-hobbies-title">
          Interests & Hobbies
        </h2>
        <div className="flex flex-col gap-6" data-testid="about-hobbies-list">
          {hobbyData.map((hobby) => (
            <Hobby key={hobby.title} hobby={hobby} />
          ))}
        </div>
      </section>
    </main>
  );
}