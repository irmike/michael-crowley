"use client";

import Image from "next/image";
import { getImagePath, getPagePath } from "@/utils/paths";
import UpdateLog from '@/components/UpdateLog/UpdateLog';

export default function Home() {
  return (
    <main data-testid="home-main">
      {/* SWH Candidate */}
      <section className="mb-12" data-testid="home-welcome-section">
        <h1 className="mb-2" data-testid="home-heading">Welcome, I'm Michael!</h1>
        <p className="text-lg" data-testid="home-intro">Full Stack Developer | Test Automation Specialist | Problem Solver | Nerd</p>
      </section>

      {/* SWH Candidate */}
      <section className="mb-8" data-testid="home-featured-section">
        <h2 className="mb-4 text-lg font-semibold" data-testid="home-featured-title">Featured Project</h2>
        <div className="app-surface p-3 hover:opacity-90 transition-opacity cursor-pointer">
          <a href={getPagePath("/projects#arc-stat-tester")} className="block" data-testid="home-featured-link">
            <div className="mb-3 mx-auto relative w-full max-w-xs aspect-3/2 rounded overflow-hidden border-4 border-black" data-testid="home-featured-image-container">
              <Image
                src={getImagePath("/home/Arc-Stat-Tester.png")}
                alt="Arc Raiders Stat Tester"
                fill
                className="object-cover"
                priority
                data-testid="home-featured-image"
              />
            </div>
            <h3 className="font-semibold mb-1 text-base" data-testid="home-featured-project-title">Arc Raiders Stat Tester</h3>
            <p className="text-sm mb-2" data-testid="home-featured-project-desc">
              A stat tester I created for the game Arc Raiders. Built using React and Vite.
            </p>
            <p className="text-xs" data-testid="home-featured-project-cta">
              View Project →
            </p>
          </a>
        </div>
      </section>

      {/* SWH Candidate */}
      <section className="mb-12 app-surface p-6" data-testid="home-about-section">
        <h2 className="mb-4" data-testid="home-about-title">About This Site</h2>
        <p className="mb-3" data-testid="home-about-desc">
          This website serves as my professional portfolio and resume, showcasing my skills, projects, and experience as a Full Stack Developer. Here you'll find information about my technical expertise, work history, and the projects I've built.
        </p>
        <p className="text-sm opacity-75" data-testid="home-about-note">
          <strong>Note:</strong> This site is a continued work in progress. I'm actively adding new features, updating content, and refining the design. Check back regularly for updates!
        </p>
      </section>

      {/* SWH Candidate */}
      <section className="mb-12" data-testid="home-updatelog-section">
        <UpdateLog />
      </section>

      {/* SWH Candidate */}
      <section data-testid="home-explore-section">
        <h2 className="mb-6" data-testid="home-explore-title">Explore More</h2>
        <div className="flex flex-wrap gap-4" data-testid="home-explore-links">
          <a href={getPagePath("/skills") } className="app-button" data-testid="home-explore-skills">
            View All Skills
          </a>
          <a href={getPagePath("/projects") } className="app-button" data-testid="home-explore-projects">
            All Projects
          </a>
          <a href={getPagePath("/resume") } className="app-button" data-testid="home-explore-resume">
            Download Resume
          </a>
          <a href={getPagePath("/contact") } className="app-button" data-testid="home-explore-contact">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
