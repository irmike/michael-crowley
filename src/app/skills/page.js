"use client";

import { useState } from "react";
import { groupAndSortCertificates } from "@/utils/certificates";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";
import SkillsAccordian from "@/components/SkillsAccordian/SkillsAccordian";
import { certificatesData } from "@/data/certificateData";
import SectionWithHeader from "@/components/common/SectionWithHeader";


export default function SkillsPage() {

    const [activeContent, setActiveContent] = useState("skills");

    const navigationItems = [
        { id: "skills", label: "Skills" },
        { id: "certificates", label: "Certificates" },
    ];
    
    const categoryOrder = ["Professional", "LinkedIn Learning"];

    const renderPanel = ({ activeContent, openFile }) => {
        switch (activeContent) {
            case "skills":
                return (
                    <div data-testid={'skills-section'}>
                        <SkillsAccordian/>
                    </div>
                );
            case "certificates":
                const { groupedCertificates, sortedCategories } = groupAndSortCertificates(certificatesData, categoryOrder);
                return (
                    <div data-testid="certificates-section">
                        {sortedCategories.map(category => (
                            <SectionWithHeader key={category} sectionTitle={category} data-testid={`certificates-category-${category}`}>
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
    <main data-testid="skills-page">
      <h1 data-testid="skills-page-title">Skills / Tech Stack</h1>
      <SidebarDisplay
        items={navigationItems}
        renderPanel={renderPanel}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
        data-testid="sidebar-display"
      />
    </main>
  );
}
