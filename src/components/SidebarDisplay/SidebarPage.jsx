import {useState} from "react";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SidebarDisplay from "@/components/SidebarDisplay/SidebarDisplay";

/**
 * Shared page shell for title + SidebarDisplay layouts.
 * Canonical props are `title`, `defaultActiveItemId`, `activeItemId`, and `onActiveItemChange`.
 * Legacy aliases remain supported for low-risk adoption.
 */
const SidebarPage = ({
    title,
    pageTitle,
    items,
    renderContent,
    renderPanel,
    defaultActiveItemId,
    initialActiveContent,
    activeItemId,
    activeContent,
    onActiveItemChange,
    onActiveContentChange,
    titleVariant = "pageTitle",
}) => {
    const resolvedTitle = title ?? pageTitle;
    const resolvedRenderContent = renderContent ?? renderPanel;
    const resolvedDefaultActiveItemId = defaultActiveItemId ?? initialActiveContent ?? items?.[0]?.id;
    const resolvedControlledActiveItemId = activeItemId ?? activeContent;
    const resolvedOnActiveItemChange = onActiveItemChange ?? onActiveContentChange;

    const [internalActiveItemId, setInternalActiveItemId] = useState(resolvedDefaultActiveItemId);

    const isControlled = resolvedControlledActiveItemId !== undefined;
    const currentActiveItemId = isControlled ? resolvedControlledActiveItemId : internalActiveItemId;

    const handleActiveItemChange = (nextActiveItemId) => {
        if (!isControlled) {
            setInternalActiveItemId(nextActiveItemId);
        }
        resolvedOnActiveItemChange?.(nextActiveItemId);
    };

    return (
        <SectionWithHeader sectionTitle={resolvedTitle} variant={titleVariant}>
            <SidebarDisplay
                items={items}
                renderPanel={resolvedRenderContent}
                activeContent={currentActiveItemId}
                setActiveContent={handleActiveItemChange}
            />
        </SectionWithHeader>
    );
};

export default SidebarPage;

