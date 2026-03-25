"use client";

import {groupAndSortCertificates} from "@/utils/certificates";
import SkillsAccordion from "@/components/SkillsAccordion/SkillsAccordion";
import {certificatesData} from "@/data/certificateData";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";


export default function SkillsPage() {

    const navigationItems = [
        {id: "skills", label: "Skills"},
        {id: "certificates", label: "Certificates"},
    ];

    const categoryOrder = ["Professional", "LinkedIn Learning"];

    const renderContent = ({activeContent, openFile}) => {
        switch (activeContent) {
            case "skills":
                return (
                    <div data-testid={'skills-section'}>
                        <SkillsAccordion/>
                    </div>
                );
            case "certificates":
                const {groupedCertificates, sortedCategories} = 
                    groupAndSortCertificates(certificatesData, categoryOrder);
                return (
                    <div className="flex flex-col gap-4" data-testid="certificates-section">
                        {sortedCategories.map(category => (
                            <SectionWithHeader key={category} sectionTitle={category} showDivider>
                                <div className="flex flex-wrap gap-2 items-start">
                                    {groupedCertificates[category].map((cert) => (
                                        <button
                                            key={cert.id}
                                            type="button"
                                            onClick={() => openFile(cert)}
                                            className="app-button justify-start"
                                            data-testid={`certificate-button-${cert.id}`}
                                        >
                                            {cert.name}
                                        </button>
                                    ))}
                                </div>
                            </SectionWithHeader>
                        ))}
                    </div>
                );
            default:
                return <div data-testid="skills-page-default">Select an item from the sidebar</div>;
        }
    };

    return (
        <SectionWithHeader sectionTitle={"Skills / Tech Stack"} variant={"pageTitle"}>
            <SidebarDisplay
                items={navigationItems}
                renderContent={renderContent}
                defaultActiveItemId="skills"
            />
        </SectionWithHeader>
    );
}
