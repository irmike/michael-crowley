"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { getImagePath } from "@/utils/paths";

function Hobby({ hobby }) {
    const { title, description, favorites, image } = hobby;
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultipleImages = image && image.length > 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    };

    const renderImages = () => {
        if (!image || image.length === 0) return null;
        if (image.length === 1) {
            return (
                <img src={getImagePath(image[0])} alt={title + ' image'} className="rounded-lg max-w-xs mt-2" />
            );
        }
        // Custom carousel: arrows outside the image
        return (
            <div className="flex items-center gap-2 mt-2">
                <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="h-12 w-12 flex items-center justify-center text-3xl cursor-pointer bg-white/80 hover:bg-orange-400/60 transition-colors rounded-full border border-[--border] text-black hover:text-orange-600"
                >
                    ◀
                </button>
                <img
                    src={getImagePath(image[currentIndex])}
                    alt={title + ' gallery ' + (currentIndex + 1)}
                    className="rounded-lg max-h-60 object-contain mx-auto"
                    style={{ maxWidth: '16rem' }}
                />
                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next image"
                    className="h-12 w-12 flex items-center justify-center text-3xl cursor-pointer bg-white/80 hover:bg-orange-400/60 transition-colors rounded-full border border-[--border] text-black hover:text-orange-600"
                >
                    ▶
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-row gap-4">
            <Disclosure>
                {({ open }) => (
                    <div className="app-surface rounded-xl p-4 w-full">
                        <Disclosure.Button className="text-xl font-bold px-0 py-1 focus:outline-none cursor-pointer flex items-center gap-2 text-[--accent] hover:text-[--accent-strong]">
                            {title}
                            <span>{open ? "▲" : "▼"}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <div className="flex flex-col md:flex-row md:items-start gap-4 mt-2">
                                <div className="flex-1">
                                    <p className="text-base mt-2 text-[--muted]">{description}</p>
                                    {favorites && favorites.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold mt-2 text-[--accent]">Favorites:</h4>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {/* I think it might be cool to eventually make these buttons that link to the google overviews.*/}
                                                {favorites.map((fav, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-block bg-[--surface] border border-[--border] rounded-lg px-3 py-1 text-sm text-[--accent] shadow-sm"
                                                    >
                                                        {fav}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                                    {renderImages()}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>
        </div>
    )
}

export default Hobby;
