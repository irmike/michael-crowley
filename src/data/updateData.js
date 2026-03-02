export const updateData = [
    {
        id: 2,
        title: "Mobile Display Fix",
        date: "2026-03-02",
        description: "Improved mobile responsiveness for all pages and components.",
        details: [
            "Made SidebarDisplay fully mobile-friendly (responsive stacking, wrap buttons, proportional widths; avoid horizontal scroll bars; sidebar remains left on desktop, top on mobile)",
            "Adjusted font sizes for headings and buttons for better readability on small screens",
            "Prevented horizontal scrolling with overflow-x-hidden on main container/body; ensured all content and buttons wrap as needed",
            "Reduced padding/margins on mobile using responsive classes (reviewed for excessive spacing)",
            "Ensured modals (FileModal) are full width on mobile and use responsive max-width",
            "Polished PDFViewer for mobile and desktop, ensuring the PDF is centered, container is not oversized, and styling matches the app theme in both ResumePage and FileModal",
            "Created UpdateLog component for home page to display recent updates with expandable details"
        ]
    },
    {
        id: 1,
        title: "Initial Site Launch",
        date: "2026-03-01",
        description: "Launched the initial version of my personal portfolio website.",
        details: [
            "Implemented core pages: Home, Skills, Projects, Resume, Contact",
            "Created reusable components: FileModal, SkillsAccordian, SidebarDisplay",
            "Designed a clean and modern UI with Tailwind CSS", 
            "Only added bare minimum content to get the site live, with plans to expand and refine over time"
        ]
    }
];