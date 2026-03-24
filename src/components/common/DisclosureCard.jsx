"use client";

import {Disclosure} from "@headlessui/react";
import {kebabify} from "@/utils/kebabify";

/**
 * A general-purpose labeled disclosure/accordion card.
 *
 * Merges the behavior of the Hobby and Update components into one shared primitive.
 * Variant styling is intentionally limited to outer wrapper, disclosure button,
 * disclosure panel, and open/closed toggle labels.
 *
 * @param {Object}           props
 * @param {string}           props.title            - Primary label shown in the trigger button.
 * @param {string}           [props.subtitle]       - Optional secondary label in the trigger (e.g. a date).
 * @param {string}           [props.description]    - Optional descriptive text.
 * @param {string}           [props.variant='hobby']- Visual variant key.
 * @param {boolean}          [props.showDescription=false]
 *   When true  → description renders outside/below the trigger, always visible (Update style).
 *   When false → description renders inside the panel, only visible when expanded (Hobby style).
 * @param {React.ReactNode}  props.children         - Content rendered inside the collapsible panel.
 */

/** @type {Record<string, {open: [string, string], buttonClass: string, panelClass: string, cardClass: string}>} */
const VARIANT_STYLES = {
    hobby: {
        open: ["▲", "▼"],
        buttonClass: "w-full text-xl font-bold py-1 cursor-pointer flex justify-between app-text-accent",
        panelClass: "mt-1 flex flex-col gap-2",
        cardClass: "app-surface p-4 w-full",
        descriptionClass: "mb-2 py-1 italic",
    },
    update: {
        open: ["hide", "expand"],
        buttonClass: "app-inv-disclosure-btn hover:bg-white/30",
        panelClass: "mt-1 text-sm",
        cardClass: "app-inv-card bg-white/20 mb-1 p-2",
        descriptionClass: "mb-2 px-2 py-1 italic bg-white/30 rounded",
    }
};

function DescriptionBlock({description, kebabTitle, descriptionClass}) {
    return (
        <section className={descriptionClass}
                 data-testid={`disclosure-card-description-${kebabTitle}`}>
            {description}
        </section>
    );
}

function DisclosureCard({
                            title, subtitle, description, variant = "hobby",
                            showDescription = false, children
                        }) {

    const selectedVariant = VARIANT_STYLES[variant] || VARIANT_STYLES.hobby;
    const kebabTitle = kebabify(title);

    return (
        <Disclosure>
            {({open}) => (
                <section className={selectedVariant.cardClass}
                         data-testid={`disclosure-card-container-${kebabTitle}`}>

                    <Disclosure.Button className={selectedVariant.buttonClass}
                                       data-testid={`disclosure-card-button-${kebabTitle}`}>

                        {/* Title + optional subtitle (e.g. date) */}
                        <div className="flex flex-wrap items-baseline gap-x-2 min-w-0"
                             data-testid={`disclosure-card-header-${kebabTitle}`}>
                            <span data-testid={`disclosure-card-title-${kebabTitle}`}>
                                {title}
                            </span>
                            
                            {subtitle && (
                                <span className="text-xs whitespace-nowrap opacity-80"
                                      data-testid={`disclosure-card-subtitle-${kebabTitle}`}>
                                    {subtitle}
                                </span>
                            )}
                        </div>

                        <span className="ml-2 font-semibold" data-testid={`disclosure-card-toggle-${kebabTitle}`}>
                            {open ? selectedVariant.open[0] : selectedVariant.open[1]}
                        </span>

                    </Disclosure.Button>

                    {showDescription && description && (
                        <DescriptionBlock description={description} kebabTitle={kebabTitle}
                                          descriptionClass={selectedVariant.descriptionClass}/>
                    )}

                    <Disclosure.Panel className={selectedVariant.panelClass}
                                      data-testid={`disclosure-card-panel-${kebabTitle}`}>

                        {!showDescription && description && (
                            <DescriptionBlock description={description} kebabTitle={kebabTitle}
                                              descriptionClass={selectedVariant.descriptionClass}/>
                        )}

                        {children}
                    </Disclosure.Panel>

                </section>
            )}
        </Disclosure>
    );
}

export default DisclosureCard;
