const SectionWithHeader = ({ children, sectionTitle }) => {
    // Use a consistent testid format based on sectionTitle
    const normalizedTitle = sectionTitle.toLowerCase();
    return (
        <section className="flex flex-col gap-4" data-testid={`${normalizedTitle}-section`}>
            <header className="flex flex-col" data-testid={`header-${normalizedTitle}`}>
                <h3 className="text-lg font-semibold tracking-wide">{sectionTitle}</h3>
                <div className="h-px w-full mt-1" style={{ backgroundColor: "var(--border)" }} />
            </header>
            {children}
        </section>
    )
}

export default SectionWithHeader;