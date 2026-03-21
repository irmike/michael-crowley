"use client";

import {groupAndSortCertificates} from "@/utils/certificates";
import SkillsAccordion from "@/components/SkillsAccordion/SkillsAccordion";
import {certificatesData} from "@/data/certificateData";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SidebarPage from "@/components/SidebarDisplay/SidebarPage";


export default function SkillsPage() {

    const navigationItems = [
        {id: "skills", label: "Skills"},
        {id: "certificates", label: "Certificates"},
    ];

    const categoryOrder = ["Professional", "LinkedIn Learning"];

    const renderPanel = ({activeContent, openFile}) => {
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
                            <SectionWithHeader key={category} sectionTitle={category} showDivider={true} variant={"standard"}>
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
        <SidebarPage
            title={"Skills / Tech Stack"}
            items={navigationItems}
            renderContent={renderPanel}
            defaultActiveItemId="skills"
        />
    );
}
