"use client";

import { useState } from "react";
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
                    <SectionWithHeader sectionTitle={'Skills'}>
                        <SkillsAccordian/>
                    </SectionWithHeader>
                );
            case "certificates":
                // Group certificates by category using reduce
                const groupedCertificates = certificatesData.reduce((acc, cert) => {
                    acc[cert.category] = acc[cert.category] || [];
                    acc[cert.category].push(cert);
                    return acc;
                }, {});
                
                const allCategories = Object.keys(groupedCertificates);
                // This could be done 'easier' by separating the certificatesData into key value pairs with 
                // category as the key and a list of certificates as the value, but I wanted to showcase the 
                // reduce method here since it's a common way to group data in JavaScript.
                const sortedCategories = [
                    ...categoryOrder.filter(cat => allCategories.includes(cat)),
                    ...allCategories.filter(cat => !categoryOrder.includes(cat))
                ];
                return (
                    <SectionWithHeader sectionTitle={'Categories'}>
                        {sortedCategories.map(category => (
                            <SectionWithHeader key={category} sectionTitle={category}>
                                <ul className="flex flex-col gap-2">
                                    {groupedCertificates[category].map((cert) => (
                                        <li key={cert.id}>
                                            <button
                                                type="button"
                                                onClick={() => openFile(cert)}
                                                className="app-button w-full justify-start"
                                            >
                                                {cert.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </SectionWithHeader>
                        ))}
                    </SectionWithHeader>
                );
            default:
                return <div>Select an item from the sidebar</div>;
        }
    };

  return (
    <main>
      <h1>Skills / Tech Stack</h1>
      <SidebarDisplay
        items={navigationItems}
        renderPanel={renderPanel}
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </main>
  );
}
