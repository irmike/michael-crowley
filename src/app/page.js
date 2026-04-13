"use client";

import Image from "next/image";
import Link from "next/link";
import {getImagePath} from "@/utils/paths";
import UpdateLog from '@/components/UpdateLog/UpdateLog';
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function Home() {
    return (
        <SectionWithHeader sectionTitle="Welcome, I'm Michael!" variant="pageTitle">
            <p className="text-lg mb-12" data-testid="home-intro">Full Stack Developer | Test Automation Specialist |
                Problem Solver | Nerd</p>
            
            <SectionWithHeader sectionTitle="Featured Project" variant="reverseSurfaceContent">
                <Link href="/projects" className="block"
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
                </Link>
            </SectionWithHeader>


            <SectionWithHeader sectionTitle="About This Site" variant="surfaceContent">
                <p className="mb-3" data-testid="home-about-desc">
                    This website serves as my professional portfolio and resume, showcasing my skills, projects, and
                    experience as a Full Stack Developer. Here you&apos;ll find information about my technical expertise,
                    work history, and the projects I&apos;ve built.
                </p>
                <p className="text-sm opacity-75" data-testid="home-about-note">
                    <strong>Note:</strong> This site is a continued work in progress. Currently, the site looks
                    how I wanted it. My priority now, before adding any new features, is cleaning up the code to serve
                    as the example it is meant to be.
                </p>
            </SectionWithHeader>

            <UpdateLog/>

            <SectionWithHeader sectionTitle="Explore More" showDivider>
                <div className="flex flex-wrap gap-4" data-testid="home-explore-links">
                    <Link href="/skills" className="app-button" data-testid="home-explore-skills">
                        View All Skills
                    </Link>
                    <Link href="/projects" className="app-button" data-testid="home-explore-projects">
                        All Projects
                    </Link>
                    <Link href="/resume" className="app-button" data-testid="home-explore-resume">
                        Download Resume
                    </Link>
                    <Link href="/contact" className="app-button" data-testid="home-explore-contact">
                        Contact Me
                    </Link>
                </div>
            </SectionWithHeader>
        </SectionWithHeader>
    );
}
