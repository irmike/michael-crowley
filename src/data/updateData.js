export const updateData = [
    {
        id: 5,
        title: "Sitewide Styling Cleanup",
        date: "2026-03-20",
        description: "Expanded SectionWithHeader variants for broader page use, standardized page-title patterns, and simplified UpdateLog/Update inverted styling while preserving the intended visual hierarchy.",
        details: [
            "Added and refined SectionWithHeader variants to support reusable patterns (including page title and surface-focused variants)",
            "Applied the new page-title usage pattern across pages to improve consistency of heading structure",
            "Reviewed remaining SWH Candidate sections and converted the strongest matches to shared variants where appropriate",
            "Fixed SectionWithHeader runtime issues caused by dynamic container/tag handling and fragment edge cases",
            "Standardized UpdateLog and Update disclosure/button structure to reduce repeated className complexity",
            "Introduced and iterated on inverted surface globals (including app-inv-surface-base) to centralize repeated styling",
            "Diagnosed and corrected heading/text and border-color conflicts while preserving rounded card appearance",
            "Kept UpdateLog visuals aligned with the intended inverted theme (black text plus layered orange-tinted surfaces) after refactor attempts"
        ]
    },
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
            "Updated styling across About page to match global theme and ensure responsive design",
            "Finally did a long overdue update to test to utilize data-testid attributes for easier testing and maintainability"
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
    },
    {
        id: 4,
        title: "Section Header Refactor for Skills Page",
        date: "2026-03-16",
        description: "Standardized section headers across SkillsAccordian and related components using SectionWithHeader, improving code reuse and visual consistency.",
        details: [
            "Create SectionWithHeader component for reusable section header + divider",
            "Refactor SkillsAccordian to use SectionWithHeader for each skill category",
            "Update styling and layout to match global theme and ensure responsive design",
            "Added more Certificates",
            "Updated Certificates Display to group by category (added category field to certificateData)",
            "Added desktop and mobile Cypress tests for Skills page (desktop: open each accordion, verify content; mobile: verify accordion functionality and responsive layout)"
        ]
    }
];