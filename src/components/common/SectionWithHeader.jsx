import {Fragment} from "react";
import {kebabify} from "@/utils/kebabify";

/**
 * @typedef {'pageTitle' | 'standard' | 'surfaceContent' | 'invertedSurfaceContent' | 'reverseSurfaceContent'} VariantType
 */

const SectionWithHeader = ({children, sectionTitle, showDivider = false, variant = "standard"}) => {

    const variantStyles = {
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
    }

    if (process.env.NODE_ENV === 'development' && !variantStyles[variant]) {
        console.warn(`SectionWithHeader: unknown variant "${variant}" — falling back to "standard". Valid variants: ${Object.keys(variantStyles).join(', ')}`);
    }

    const selectedVariant = variantStyles[variant] || variantStyles.standard;
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