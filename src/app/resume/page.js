"use client";

import {getImagePath} from '@/utils/paths';
import EmbeddedViewer from "@/components/common/EmbeddedViewer";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import ExternalLink from "@/components/common/ExternalLink";

export default function ResumePage() {
    const resumeUrl = getImagePath("/resume/Resume.pdf");

    return (
        <SectionWithHeader sectionTitle="Resume" variant={"pageTitle"}>
            <p>
                You can view my resume below, or{" "}
                <ExternalLink href={resumeUrl}>
                    open it in a new tab
                </ExternalLink>
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
