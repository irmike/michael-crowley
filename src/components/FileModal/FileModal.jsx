import { getImagePath } from '@/utils/paths';
import EmbeddedViewer from "@/components/common/EmbeddedViewer";

const FileModal = ({ isOpen, onClose, file }) => {
    if (!isOpen || !file) return null;

    const handleOpenInNewTab = () => {
        window.open(getImagePath(file.fileUrl), '_blank', 'noopener,noreferrer');
    };

    const closeButtonClassName = "px-3 py-1 bg-red-500 text-black border border-black rounded";

    const viewerType = file.fileUrl.toLowerCase().endsWith('.pdf') ? "pdf" : "iframe";

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50" data-testid="file-modal">
            <div className="app-surface-strong w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl" style={{ background: 'rgba(24, 24, 27, 0.98)' }}>
                <div className="p-4 border-b app-border-theme flex justify-between items-center">
                    <h3 className="font-semibold text-lg" data-testid="file-modal-title">{file.name}</h3>
                    <button type="button" onClick={onClose} className={closeButtonClassName} data-testid="file-modal-close">
                        Close
                    </button>
                </div>
                <div className="flex-1 overflow-auto p-4" data-testid="file-modal-content">
                    <EmbeddedViewer
                        url={file.fileUrl}
                        title={file.name}
                        viewerType={viewerType}
                        className="w-full h-[60vh] border app-border-theme"
                    />
                </div>
                <div className="p-4 border-t app-border-theme flex justify-end gap-2">
                    <button type="button" onClick={handleOpenInNewTab} className="app-button" data-testid="file-modal-open-new-tab">
                        Open in new tab
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileModal;