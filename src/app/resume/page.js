"use client";

import {getImagePath} from '@/utils/paths';
import EmbeddedViewer from "@/components/common/EmbeddedViewer";
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function ResumePage() {
    const resumeUrl = getImagePath("/resume/Resume.pdf");

    return (
        <SectionWithHeader sectionTitle="Resume" variant={"pageTitle"}>
            <p>
                You can view my resume below, or{" "}
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                    open it in a new tab
                </a>
                .
            </p>

            <div>
                <EmbeddedViewer
                    url={resumeUrl}
                    title="Resume"
                    viewerType="pdf"
                    shouldResolveRelativeUrl={false}
                    className="w-full h-[80vh] border app-border-theme"
                />
            </div>
        </SectionWithHeader>
    );
}
