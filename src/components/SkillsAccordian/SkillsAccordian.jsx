import {Disclosure} from "@headlessui/react";
import {skillsData} from "@/data/skillsData.js";
import SectionWithHeader from "@/components/common/SectionWithHeader";

function SkillsAccordian() {
    return (
        <div className="flex flex-col gap-4" data-testid="skills-accordian">
            {skillsData.map((subsection, subSectionIndex) => {
                const [sectionTitle, skillsByName] = Object.entries(subsection)[0] ?? [];

                return (
                    <SectionWithHeader
                        key={subSectionIndex}
                        sectionTitle={sectionTitle}
                        showDivider={true}
                        variant={"standard"}
                    >
                        <div className="flex flex-wrap gap-2" data-testid={`skills-accordian-section-skills-${sectionTitle}`}>
                            {skillsByName &&
                                Object.entries(skillsByName).map(([skillName, experience]) => (
                                    <Disclosure key={skillName}>
                                        {({ open }) => (
                                            <div className="relative" data-testid={`skill-disclosure-${skillName}`}> 
                                                <Disclosure.Button
                                                    className={
                                                        "app-button text-sm px-3 py-1.5 " +
                                                        (open ? "app-button--active" : "")
                                                    }
                                                    data-testid={`skill-button-${skillName}`}
                                                >
                                                    <span>{skillName}</span>
                                                    <span className="ml-2 opacity-80">{open ? "-" : "+"}</span>
                                                </Disclosure.Button>

                                                <Disclosure.Panel className="mt-2 app-surface p-3 text-sm" data-testid={`skill-panel-${skillName}`}>
                                                    {experience}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                        </div>
                    </SectionWithHeader>
                );
            })}
        </div>
    );
}

export default SkillsAccordian;
