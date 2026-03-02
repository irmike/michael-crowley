import FileModal from '../FileModal/FileModal';
import { useState } from "react";

const SidebarDisplay = ({ items, renderPanel, activeContent, setActiveContent }) => {

    // Track which file is selected and whether the modal is open.
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openFile = (file) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="flex gap-4 max-h-[calc(100vh-8rem)]">
            <aside className="app-surface p-3 min-w-48 max-h-full overflow-auto">
                <nav aria-label="Sidebar navigation">
                    <ul className="flex flex-col gap-2">
                        {items.map((item) => {
                            const isActive = item.id === activeContent;

                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveContent(item.id)}
                                        className={
                                            "app-button w-full justify-start " +
                                            (isActive ? "app-button--active" : "")
                                        }
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            <div className="app-surface flex-1 p-3 max-h-full overflow-auto">
                {renderPanel ? renderPanel({ activeContent, openFile }) : null}

                <FileModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    file={selectedFile}
                />
            </div>
        </section>
    );
};

export default SidebarDisplay;