"use client";

import {useState} from "react";
import {projectsData} from "@/data/projectsData";
import {getImagePath} from "@/utils/paths";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function ProjectsPage() {
    const navigationItems = projectsData.map((project) => ({
        id: project.id,
        label: project.name,
    }));

    const [activeContent, setActiveContent] = useState(navigationItems[0]?.id);

    const renderPanel = ({activeContent}) => {
        const project = projectsData.find((p) => p.id === activeContent);

        if (!project) {
            return <div>Select a project</div>;
        }

        return (
            <SectionWithHeader sectionTitle={project.name} variant={"standard"}>
                <p>{project.info}</p>

                {project.sourceCodeUrl ? (
                    <p>
                        <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
                            View source code
                        </a>
                    </p>
                ) : null}

                {project.fileUrl ? (
                    <div>
                        <iframe
                            title={project.name}
                            src={
                                project.fileUrl.startsWith("/")
                                    ? getImagePath(project.fileUrl)
                                    : project.fileUrl
                            }
                            className="w-full h-[60vh]"
                            style={{border: `1px solid var(--border)`}}
                        />
                    </div>
                ) : null}
            </SectionWithHeader>
        );
    };

    return (
        <SectionWithHeader sectionTitle="Projects" variant={"pageTitle"}>
            <SidebarDisplay
                items={navigationItems}
                renderPanel={renderPanel}
                activeContent={activeContent}
                setActiveContent={setActiveContent}
            />
        </SectionWithHeader>
    );
}
