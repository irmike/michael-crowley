import {Fragment} from "react";
import {kebabify} from "@/utils/kebabify";

/**
 * Supported SectionWithHeader variants.
 * @typedef {'pageTitle' | 'standard' | 'surfaceContent' | 'invertedSurfaceContent' | 'reverseSurfaceContent'} VariantType
 */

/**
 * Configuration for a single variant.
 * @typedef {Object} VariantConfig
 * @property {string} outerTag - Wrapper tag name or "fragment" for no wrapper element.
 * @property {string} outerClass - Class name applied to the outer container.
 * @property {string} innerTag - Header/content tag rendered inside the outer container.
 * @property {string} innerClass - Class name applied to the inner container.
 */

/**
 * Props for SectionWithHeader.
 * @typedef {Object} SectionWithHeaderProps
 * @property {import("react").ReactNode} children - Content rendered below or inside the header.
 * @property {string} sectionTitle - Visible title text and source for test id normalization.
 * @property {boolean} [showDivider=false] - Shows a divider below the header for non-reverse variants.
 * @property {VariantType} [variant='standard'] - Visual/layout variant key.
 */

/** @type {Record<VariantType, VariantConfig>} */
const VARIANT_STYLES = {
    pageTitle: {
        outerTag: "fragment",
        outerClass: "",
        innerTag: "h1",
        innerClass: "mb-2 app-text-accent",
    },
    standard: {
        outerTag: "section",
        outerClass: "flex flex-col gap-1",
        innerTag: "h2",
        innerClass: "mb-1 app-text-accent",
    },
    surfaceContent: {
        outerTag: "section",
        outerClass: "app-surface p-6 mb-8",
        innerTag: "h2",
        innerClass: "mb-4 app-text-accent",
    },
    invertedSurfaceContent: {
        outerTag: "section",
        outerClass: "app-inv-surface-base",
        innerTag: "h2",
        innerClass: "app-inv-title"
    },
    reverseSurfaceContent: {
        outerTag: "h2",
        outerClass: "mb-4 app-text-accent",
        innerTag: "section",
        innerClass: "app-surface p-3 mb-8"
    }
};

/**
 * Reusable container + heading abstraction used to standardize common section layouts.
 *
 * @param {SectionWithHeaderProps} props
 */
const SectionWithHeader = ({children, sectionTitle, showDivider = false, variant = "standard"}) => {

    if (process.env.NODE_ENV === 'development' && !VARIANT_STYLES[variant]) {
        console.warn(`SectionWithHeader: unknown variant "${variant}" — falling back to "standard". Valid variants: ${Object.keys(VARIANT_STYLES).join(', ')}`);
    }

    const selectedVariant = VARIANT_STYLES[variant] || VARIANT_STYLES.standard;
    const isFragment = selectedVariant.outerTag === "fragment";
    const isReverse = variant === "reverseSurfaceContent";
    const ContainerOuter = isFragment ? Fragment : selectedVariant.outerTag;
    const ContainerInner = selectedVariant.innerTag;

    const normalizedTitle = kebabify(sectionTitle);

    const containerOuterProps = isFragment
        ? {}
        : {
            className: selectedVariant.outerClass,
            "data-testid": `${normalizedTitle}-section`,
        };
    const containerInnerProps =
        {
            className: selectedVariant.innerClass,
            "data-testid": `${normalizedTitle}-title`
        };

    return isReverse ? (
        <>
            <ContainerOuter {...containerOuterProps}>{sectionTitle}</ContainerOuter>
            <ContainerInner {...containerInnerProps}>{children}</ContainerInner>
        </>
    ) : (
        <ContainerOuter {...containerOuterProps}>
            <ContainerInner {...containerInnerProps}>{sectionTitle}</ContainerInner>
            {showDivider && (
                <div
                    className="h-px w-full mb-2"
                    style={{backgroundColor: "var(--border)"}}
                />
            )}
            {children}
        </ContainerOuter>
    );
}

export default SectionWithHeader;