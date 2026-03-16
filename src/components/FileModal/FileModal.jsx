import { getImagePath } from '@/utils/paths';
import PDFViewer from '@/components/PDFViewer/PDFViewer';

const FileModal = ({ isOpen, onClose, file }) => {
    if (!isOpen || !file) return null;

    const handleOpenInNewTab = () => {
        window.open(getImagePath(file.fileUrl), '_blank', 'noopener,noreferrer');
    };

    const closeButtonClassName = "px-3 py-1 bg-red-500 text-black border border-black rounded";

    const fileUrl = getImagePath(file.fileUrl);
    const isPdf = fileUrl.toLowerCase().endsWith('.pdf');

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50" data-testid="file-modal">
            <div className="app-surface-strong w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl" style={{ background: 'rgba(24, 24, 27, 0.98)' }}>
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: "var(--border)" }}>
                    <h3 className="font-semibold text-lg" data-testid="file-modal-title">{file.name}</h3>
                    <button type="button" onClick={onClose} className={closeButtonClassName} data-testid="file-modal-close">
                        Close
                    </button>
                </div>
                <div className="flex-1 overflow-auto p-4" data-testid="file-modal-content">
                    {isPdf ? (
                        <PDFViewer url={fileUrl} className="w-full h-[60vh]" style={{ border: `1px solid var(--border)` }} />
                    ) : (
                        <iframe
                            title={file.name}
                            src={fileUrl}
                            className="w-full h-[60vh]"
                            style={{ border: `1px solid var(--border)` }}
                        />
                    )}
                </div>
                <div className="p-4 border-t flex justify-end gap-2" style={{ borderColor: "var(--border)" }}>
                    <button type="button" onClick={handleOpenInNewTab} className="app-button" data-testid="file-modal-open-new-tab">
                        Open in new tab
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileModal;