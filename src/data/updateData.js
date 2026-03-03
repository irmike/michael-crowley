export const updateData = [
    {
        id: 3,
        title: "Content Expansion",
        date: "2026-03-03",
        description: "Filled in real content for About, Projects, and Skills pages; expanded hobbies/interests section with interactive components; made navigation responsive.",
        details: [
            "Filled in real content for About, Projects, and Skills pages",
            "Updated project descriptions and corrected repo/demo URLs",
            "Created Hobby component for expandable interests & hobbies section on About page",
            "Implemented image carousel in Hobby component for displaying hobby photos",
            "Styled Hobby component and favorites list to match app theme",
            "Made navigation header responsive and sticky at top on scroll",
            "Added UpdateLog component to home page displaying recent updates with expandable details",
            "Updated styling across About page to match global theme and ensure responsive design"
        ]
    },
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