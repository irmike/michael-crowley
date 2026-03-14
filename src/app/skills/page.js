"use client";

import { useState } from "react";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";
import SkillsAccordian from "@/components/SkillsAccordian/SkillsAccordian";
import { certificatesData } from "@/data/certificateData";


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
                    <div className="flex flex-col gap-4">
                        <header className="pb-3 border-b" style={{ borderColor: "var(--border)" }}>
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className="text-sm">Click a skill to see experience details.</p>
                        </header>
                        <SkillsAccordian />
                    </div>
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
                    <div className="flex flex-col gap-4">
                        <header className="pb-3 border-b" style={{ borderColor: "var(--border)" }}>
                            <h2 className="text-2xl font-bold">Certificates</h2>
                            <p className="text-sm">Click a certificate to preview the PDF.</p>
                        </header>
                        {sortedCategories.map(category => (
                            <div key={category} className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">{category}</h3>
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
                            </div>
                        ))}
                    </div>
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
