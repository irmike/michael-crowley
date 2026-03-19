import {kebabify} from "@/utils/kebabify";

const SectionWithHeader = ({ children, sectionTitle, showDivider = false }) => {
    
    const sectionClassName = "flex flex-col gap-4";
    const headerClassName = "flex flex-col gap-1";
    const h3ClassName = "text-2xl font-bold text-(--accent)";
    const normalizedTitle = kebabify(sectionTitle);
    
    return (
        <section className={sectionClassName} data-testid={`${normalizedTitle}-section`}>
            <header className={headerClassName} data-testid={`header-${normalizedTitle}`}>
                <h3 className={h3ClassName}>{sectionTitle}</h3>
                {showDivider && (
                    <div
                        className="h-px w-full mt-1"
                        style={{ backgroundColor: "var(--border)" }}
                    />
                )}
            </header>
            {children}
        </section>
    )
}

export default SectionWithHeader;