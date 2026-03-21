import PDFViewer from "@/components/PDFViewer/PDFViewer";
import {getImagePath} from "@/utils/paths";

const resolveUrl = (url, shouldResolveRelativeUrl) => {
    if (!shouldResolveRelativeUrl || !url || !url.startsWith("/")) {
        return url;
    }

    return getImagePath(url);
};

const detectViewerType = (url, viewerType) => {
    if (viewerType !== "auto") {
        return viewerType;
    }

    return url?.toLowerCase().endsWith(".pdf") ? "pdf" : "iframe";
};

/**
 * Shared embedded content renderer for PDFs and iframe-based content.
 * Canonical props are `url` and `shouldResolveRelativeUrl`.
 * Legacy aliases `source` and `resolveRelativeSource` are still supported.
 */
const EmbeddedViewer = ({
    url,
    source,
    title,
    viewerType = "auto",
    className = "w-full h-[60vh] border app-border-theme",
    shouldResolveRelativeUrl,
    resolveRelativeSource,
    testId,
}) => {
    const resolvedInputUrl = url ?? source;
    const resolvedRelativeUrlSetting = shouldResolveRelativeUrl ?? resolveRelativeSource ?? true;
    const resolvedUrl = resolveUrl(resolvedInputUrl, resolvedRelativeUrlSetting);
    const resolvedViewerType = detectViewerType(resolvedUrl, viewerType);

    if (resolvedViewerType === "pdf") {
        return <PDFViewer url={resolvedUrl} className={className}/>;
    }

    return (
        <iframe
            title={title || "Embedded content"}
            src={resolvedUrl}
            className={className}
            data-testid={testId}
        />
    );
};

export default EmbeddedViewer;
