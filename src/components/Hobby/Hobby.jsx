"use client";

import SectionWithHeader from "@/components/common/SectionWithHeader";
import SimpleGallery from "@/components/common/SimpleGallery";
import DisclosureCard from "@/components/common/DisclosureCard";

function Hobby({hobby}) {
    const {title, description, favorites, image} = hobby;

    return (
        <DisclosureCard variant={"hobby"} title={title} description={description}>

                {favorites && favorites.length > 0 && (
                    <SectionWithHeader sectionTitle={"Favorites"} variant={"reverseInvertedStandard"}>
                        <div className="flex flex-wrap gap-2" data-testid="hobby-favorites-list">
                            {favorites.map((fav, idx) => (
                                <span key={idx}
                                      className="bg-(--surface) border border-(--border) rounded-lg px-3 py-1 text-sm text-(--accent) shadow-sm"
                                      data-testid="hobby-favorite">
                                        {fav}
                                    </span>
                            ))}
                        </div>
                    </SectionWithHeader>
                )}

            <div className="flex justify-center" data-testid="hobby-image-container">
                <SimpleGallery images={image} alt={title}/>
            </div>

        </DisclosureCard>
    );
}

export default Hobby;
