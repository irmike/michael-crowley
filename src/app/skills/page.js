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
                return (
                    <div className="flex flex-col gap-4">
                        <header className="pb-3 border-b" style={{ borderColor: "var(--border)" }}>
                            <h2 className="text-2xl font-bold">Certificates</h2>
                            <p className="text-sm">Click a certificate to preview the PDF.</p>
                        </header>
                        <ul className="flex flex-col gap-2">
                            {certificatesData.map((cert) => (
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
