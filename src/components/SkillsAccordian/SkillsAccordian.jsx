import { Disclosure } from "@headlessui/react";
import { skillsData } from "@/data/skillsData.js";

function SkillsAccordian() {
    return (
        <div className="flex flex-col gap-8">
            {skillsData.map((subsection, subSectionIndex) => {
                // Each subsection is an object with a single key, e.g. { "Languages": { ...skills } }
                const [sectionTitle, skillsByName] = Object.entries(subsection)[0] ?? [];

                return (
                    <section className="flex flex-col gap-4" key={subSectionIndex}>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-wide">{sectionTitle}</h3>
                            <div className="h-px w-full mt-1" style={{ backgroundColor: "var(--border)" }} />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skillsByName &&
                                Object.entries(skillsByName).map(([skillName, experience]) => (
                                    <Disclosure key={skillName}>
                                        {({ open }) => (
                                            <div className="relative">
                                                <Disclosure.Button
                                                    className={
                                                        "app-button text-sm px-3 py-1.5 " +
                                                        (open ? "app-button--active" : "")
                                                    }
                                                >
                                                    <span>{skillName}</span>
                                                    <span className="ml-2 opacity-80">{open ? "-" : "+"}</span>
                                                </Disclosure.Button>

                                                <Disclosure.Panel className="mt-2 app-surface p-3 text-sm">
                                                    {experience}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default SkillsAccordian;
