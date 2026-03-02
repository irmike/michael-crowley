const FileModal = ({ isOpen, onClose, file }) => {
    if (!isOpen || !file) return null;

    const handleOpenInNewTab = () => {
        // Open the file URL in a new tab (from there, the user can download if they want).
        window.open(file.fileUrl, '_blank', 'noopener,noreferrer');
    };

    const closeButtonClassName = "px-3 py-1 bg-red-500 text-black border border-black rounded";

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="app-surface-strong w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl" style={{ background: 'rgba(24, 24, 27, 0.98)' }}>
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: "var(--border)" }}>
                    <h3 className="font-semibold text-lg">{file.name}</h3>
                    <button type="button" onClick={onClose} className={closeButtonClassName}>
                        Close
                    </button>
                </div>
                <div className="flex-1 overflow-auto p-4">
                    <iframe
                        title={file.name}
                        src={file.fileUrl}
                        className="w-full h-[60vh]"
                        style={{ border: `1px solid var(--border)` }}
                    />
                </div>
                <div className="p-4 border-t flex justify-end gap-2" style={{ borderColor: "var(--border)" }}>
                    <button type="button" onClick={handleOpenInNewTab} className="app-button">
                        Open in new tab
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileModal;