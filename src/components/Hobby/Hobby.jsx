"use client";

import { Disclosure } from "@headlessui/react";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import SimpleGallery from "@/components/common/SimpleGallery";

function Hobby({ hobby }) {
    const { title, description, favorites, image } = hobby;

    return (
        <div className="flex flex-row gap-4" data-testid="hobby-container">
            <Disclosure>
                {({ open }) => (
                    <section className="app-surface p-4 w-full" data-testid="hobby-disclosure">
                        <Disclosure.Button
                            className="text-xl font-bold px-0 py-1 cursor-pointer flex items-center gap-2 text-(--accent) hover:text-(--accent-strong) focus-visible:outline-2"
                            data-testid="hobby-disclosure-button"
                        >
                            {title}
                            <span data-testid="hobby-disclosure-arrow">{open ? "▲" : "▼"}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel data-testid="hobby-disclosure-panel">
                            <div className="flex flex-col md:flex-row md:items-start gap-4 mt-2" data-testid="hobby-content">
                                <div className="flex-1" data-testid="hobby-description-container">
                                    <p className="text-base mt-2" data-testid="hobby-description">{description}</p>
                                    {favorites && favorites.length > 0 && (
                                        <SectionWithHeader sectionTitle={"Favorites"} variant={"reverseInvertedStandard"}>
                                            <div className="flex flex-wrap gap-2 mt-2" data-testid="hobby-favorites-list">
                                                {favorites.map((fav, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-block bg-(--surface) border border-(--border) rounded-lg px-3 py-1 text-sm text-(--accent) shadow-sm"
                                                        data-testid="hobby-favorite"
                                                    >
                                                        {fav}
                                                    </span>
                                                ))}
                                            </div>
                                        </SectionWithHeader>
                                    )}
                                </div>
                                <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end" data-testid="hobby-image-container">
                                    <SimpleGallery images={image} alt={title} />
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </section>
                )}
            </Disclosure>
        </div>
    );
}

export default Hobby;
