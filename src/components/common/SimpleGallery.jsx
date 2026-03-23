"use client";

import { useState } from "react";
import Image from "next/image";
import { getImagePath } from "@/utils/paths";

/**
 * Props for SimpleGallery.
 * @typedef {Object} SimpleGalleryProps
 * @property {string[]} images - Array of image paths to display.
 * @property {string} alt - Base alt text used for each image.
 */

/**
 * Renders a single image or a simple prev/next carousel for multiple images.
 *
 * @param {SimpleGalleryProps} props
 */
function SimpleGallery({ images, alt }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <Image
                src={getImagePath(images[0])}
                alt={alt}
                width={320}
                height={240}
                className="rounded-lg max-w-xs h-auto mt-2"
                data-testid="gallery-image"
            />
        );
    }

    const handlePrev = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const handleNext = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="flex items-center gap-2 mt-2" data-testid="gallery-carousel">
            <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="h-12 w-12 flex items-center justify-center text-3xl cursor-pointer bg-white/80 hover:bg-orange-400/60 transition-colors rounded-full border border-(--border) text-black hover:text-orange-600"
                data-testid="gallery-carousel-prev"
            >
                ◀
            </button>
            <Image
                src={getImagePath(images[currentIndex])}
                alt={`${alt} ${currentIndex + 1}`}
                width={256}
                height={240}
                className="rounded-lg max-h-60 object-contain mx-auto"
                style={{ maxWidth: "16rem" }}
                data-testid="gallery-carousel-image"
            />
            <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="h-12 w-12 flex items-center justify-center text-3xl cursor-pointer bg-white/80 hover:bg-orange-400/60 transition-colors rounded-full border border-(--border) text-black hover:text-orange-600"
                data-testid="gallery-carousel-next"
            >
                ▶
            </button>
        </div>
    );
}

export default SimpleGallery;

