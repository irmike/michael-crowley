import FileModal from '../FileModal/FileModal';
import { useState } from "react";

const SidebarDisplay = ({ items, renderContent, defaultActiveItemId }) => {
    // Track which file is selected and whether the modal is open.
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeItemId, setActiveItemId] = useState(defaultActiveItemId ?? items?.[0]?.id);

    const openFile = (file) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section
            className="flex flex-col sm:flex-row gap-4 max-h-[calc(100vh-8rem)]"
            data-testid={ "sidebar-display" }
        >
            <aside className="app-surface p-3 w-full sm:w-1/3 md:w-1/4 min-w-48 max-h-full">
                <nav aria-label="Sidebar navigation">
                    <ul className="flex flex-wrap sm:flex-col gap-2">
                        {items.map((item) => {
                            const isActive = item.id === activeItemId;
                            return (
                                <li key={item.id} className="shrink-0 w-auto">
                                    <button
                                        type="button"
                                        onClick={() => setActiveItemId(item.id)}
                                        className={
                                            "app-button w-full justify-start sm:text-sm md:text-base " +
                                            (isActive ? "app-button--active" : "")
                                        }
                                        aria-current={isActive ? "page" : undefined}
                                        data-testid={`sidebar-nav-button-${item.id}`}
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
                {renderContent ? renderContent({ activeContent: activeItemId, openFile }) : null}

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