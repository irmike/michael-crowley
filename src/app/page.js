"use client";

import Image from "next/image";
import { getImagePath, getPagePath } from "@/utils/paths";
import UpdateLog from '@/components/UpdateLog/UpdateLog';

export default function Home() {
  return (
    <main>
      <section className="mb-12">
        <h1 className="mb-2">Welcome, I'm Michael!</h1>
        <p className="text-lg">Full Stack Developer | Test Automation Specialist | Problem Solver | Nerd</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Featured Project</h2>
        <div className="app-surface p-3 hover:opacity-90 transition-opacity cursor-pointer">
          <a href={getPagePath("/projects#arc-stat-tester")} className="block">
            <div className="mb-3 mx-auto relative w-full max-w-xs aspect-[3/2] rounded overflow-hidden border-4 border-black">
              <Image
                src={getImagePath("/home/Arc-Stat-Tester.png")}
                alt="Arc Raiders Stat Tester"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="font-semibold mb-1 text-base">Arc Raiders Stat Tester</h3>
            <p className="text-sm mb-2">
              A stat tester I created for the game Arc Raiders. Built using React and Vite.
            </p>
            <p className="text-xs">
              View Project →
            </p>
          </a>
        </div>
      </section>

      <section className="mb-12 app-surface p-6">
        <h2 className="mb-4">About This Site</h2>
        <p className="mb-3">
          This website serves as my professional portfolio and resume, showcasing my skills, projects, and experience as a Full Stack Developer. Here you'll find information about my technical expertise, work history, and the projects I've built.
        </p>
        <p className="text-sm opacity-75">
          <strong>Note:</strong> This site is a continued work in progress. I'm actively adding new features, updating content, and refining the design. Check back regularly for updates!
        </p>
      </section>

      <section className="mb-12">
        <UpdateLog />
      </section>

      <section>
        <h2 className="mb-6">Explore More</h2>
        <div className="flex flex-wrap gap-4">
          <a href={getPagePath("/skills")} className="app-button">
            View All Skills
          </a>
          <a href={getPagePath("/projects")} className="app-button">
            All Projects
          </a>
          <a href={getPagePath("/resume")} className="app-button">
            Download Resume
          </a>
          <a href={getPagePath("/contact")} className="app-button">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
