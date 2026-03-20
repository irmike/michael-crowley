import { Fragment } from "react";
import {kebabify} from "@/utils/kebabify";

/**
 * @typedef {'pageTitle' | 'standard' | 'surfaceContent' | 'invertedSurfaceContent'} VariantType
 */

const SectionWithHeader = ({ children, sectionTitle, showDivider = false, variant = "standard"}) => {
    
    const variantStyles = {
        pageTitle: {
            outerTag: "fragment",
            outerClass: "",
            innerTag: "h1",
            innerClass: "mb-2",
        },
        standard: {
            outerTag: "section",
            outerClass: "flex flex-col gap-1",
            innerTag: "h2",
            innerClass: "mb-1",
        },
        surfaceContent: {
            outerTag: "section",
            outerClass: "app-surface p-6 mb-8",
            innerTag: "h2",
            innerClass: "mb-4",
        },
        invertedSurfaceContent: {
            outerTag: "section",
            outerClass: "app-inv-surface-base",
            innerTag: "h2",
            innerClass: "inv-h2"
        }
    }

    const selectedVariant = variantStyles[variant] || variantStyles.standard;
    const isFragment = selectedVariant.outerTag === "fragment";
    const ContainerOuter = isFragment ? Fragment : selectedVariant.outerTag;
    const ContainerInner = selectedVariant.innerTag;
    
    const normalizedTitle = kebabify(sectionTitle);

    const containerOuterProps = isFragment
        ? {}
        : {
            className: selectedVariant.outerClass,
            "data-testid": `${normalizedTitle}-section`,
        };
    
    return (
        <ContainerOuter {...containerOuterProps}>
                <ContainerInner className={selectedVariant.innerClass} data-testid={`${normalizedTitle}-title`}>{sectionTitle}</ContainerInner>
                {showDivider && (
                    <div
                        className="h-px w-full mb-2"
                        style={{ backgroundColor: "var(--border)" }}
                    />
                )}
            
            {children}
        </ContainerOuter>
    )
}

export default SectionWithHeader;