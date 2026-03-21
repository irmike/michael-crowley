"use client";

import Image from "next/image";
import {getImagePath, getPagePath} from "@/utils/paths";
import UpdateLog from '@/components/UpdateLog/UpdateLog';
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function Home() {
    return (
        <SectionWithHeader sectionTitle="Welcome, I'm Michael!" variant="pageTitle">
            <p className="text-lg mb-12" data-testid="home-intro">Full Stack Developer | Test Automation Specialist |
                Problem Solver | Nerd</p>

            <h2 className="mb-4 app-text-accent" data-testid="home-featured-title">Featured Project</h2>
            <section className="app-surface p-3 mb-8">
                <a href={getPagePath("/projects#arc-stat-tester")} className="block"
                   data-testid="home-featured-link">
                    <section
                        className="mb-3 mx-auto relative w-full max-w-xs aspect-3/2 rounded overflow-hidden border-4 border-black"
                        data-testid="home-featured-image-container">
                        <Image
                            src={getImagePath("/home/Arc-Stat-Tester.png")}
                            alt="Arc Raiders Stat Tester"
                            fill
                            className="object-cover"
                            priority
                            data-testid="home-featured-image"
                        />
                    </section>
                    <h3 className="font-semibold mb-1 text-base" data-testid="home-featured-project-title">Arc
                        Raiders Stat Tester</h3>
                    <p className="text-sm mb-2" data-testid="home-featured-project-desc">
                        A stat tester I created for the game Arc Raiders. Built using React and Vite.
                    </p>
                    <p className="text-xs" data-testid="home-featured-project-cta">
                        View Project →
                    </p>
                </a>
            </section>


            <SectionWithHeader sectionTitle="About This Site" variant="surfaceContent">
                <p className="mb-3" data-testid="home-about-desc">
                    This website serves as my professional portfolio and resume, showcasing my skills, projects, and
                    experience as a Full Stack Developer. Here you'll find information about my technical expertise,
                    work history, and the projects I've built.
                </p>
                <p className="text-sm opacity-75" data-testid="home-about-note">
                    <strong>Note:</strong> This site is a continued work in progress. I'm actively adding new features,
                    updating content, and refining the design. Check back regularly for updates!
                </p>
            </SectionWithHeader>

            <UpdateLog/>

            <SectionWithHeader sectionTitle="Explore More" variant="standard" showDivider={true}>
                <div className="flex flex-wrap gap-4" data-testid="home-explore-links">
                    <a href={getPagePath("/skills")} className="app-button" data-testid="home-explore-skills">
                        View All Skills
                    </a>
                    <a href={getPagePath("/projects")} className="app-button" data-testid="home-explore-projects">
                        All Projects
                    </a>
                    <a href={getPagePath("/resume")} className="app-button" data-testid="home-explore-resume">
                        Download Resume
                    </a>
                    <a href={getPagePath("/contact")} className="app-button" data-testid="home-explore-contact">
                        Contact Me
                    </a>
                </div>
            </SectionWithHeader>
        </SectionWithHeader>
    );
}
