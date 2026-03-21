"use client";

import {projectsData} from "@/data/projectsData";
import EmbeddedViewer from "@/components/common/EmbeddedViewer";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SidebarPage from "@/components/SidebarDisplay/SidebarPage";

export default function ProjectsPage() {
    const navigationItems = projectsData.map((project) => ({
        id: project.id,
        label: project.name,
    }));

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
        <SidebarPage
            title="Projects"
            items={navigationItems}
            renderContent={renderPanel}
            defaultActiveItemId={navigationItems[0]?.id}
        />
    );
}
