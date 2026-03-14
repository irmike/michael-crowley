"use client";

const SectionWithHeader = ({ children, sectionTitle }) => {
    return (
        <section className="flex flex-col gap-4">
            <header className="flex flex-col">
                <h3 className="text-lg font-semibold tracking-wide">{sectionTitle}</h3>
                <div className="h-px w-full mt-1" style={{ backgroundColor: "var(--border)" }} />
            </header>
            {children}
        </section>
    )
}

export default SectionWithHeader;