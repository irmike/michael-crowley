"use client";

import {projectsData} from "@/data/projectsData";
import EmbeddedViewer from "@/components/common/EmbeddedViewer";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";
import ExternalLink from "@/components/common/ExternalLink";

export default function ProjectsPage() {
    const navigationItems = projectsData.map((project) => ({
        id: project.id,
        label: project.name,
    }));

    const renderContent = ({activeContent}) => {
        const project = projectsData.find((p) => p.id === activeContent);

        if (!project) {
            return <div>Select a project</div>;
        }

        return (
            <SectionWithHeader sectionTitle={project.name} variant={"standard"}>
                <p>{project.info}</p>

                {project.sourceCodeUrl ? (
                    <p>
                        <ExternalLink href={project.sourceCodeUrl}>
                            View source code
                        </ExternalLink>
                    </p>
                ) : null}

                {project.fileUrl ? (
                    <div>
                        <EmbeddedViewer
                            title={project.name}
                            url={project.fileUrl}
                            viewerType="iframe"
                            className="w-full h-[60vh] border app-border-theme"
                            testId="project-file-frame"
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
                renderContent={renderContent}
                defaultActiveItemId={navigationItems[0]?.id}
            />
        </SectionWithHeader>
    );
}
