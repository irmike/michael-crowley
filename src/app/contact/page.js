"use client";

import {contactData} from "@/data/contactData";
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function ContactPage() {
    return (
        <div className={"max-w-lg mx-auto"} data-testid={"contact-page-wrapper"}>
            <SectionWithHeader sectionTitle="Contact" variant={"pageTitle"}>
                <section className="app-surface p-6 max-w-lg mx-auto">
                    <ul className="space-y-4">
                        <li>
                            <span className="font-semibold">Name:</span> {contactData.name}
                        </li>
                        <li>
                            <span className="font-semibold">Email:</span>{" "}
                            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                        </li>
                        <li>
                            <span className="font-semibold">Phone:</span>{" "}
                            <span>{contactData.phone}</span>
                        </li>
                        <li>
                            <span className="font-semibold">GitHub:</span>{" "}
                            <a
                                href={contactData.github.url}
                                target="_blank"
                                rel="noopener"
                            >
                                {contactData.github.label}
                            </a>
                        </li>
                        <li>
                            <span className="font-semibold">LinkedIn:</span>{" "}
                            <a
                                href={contactData.linkedin.url}
                                target="_blank"
                                rel="noopener"
                            >
                                {contactData.linkedin.label}
                            </a>
                        </li>
                    </ul>
                </section>
            </SectionWithHeader>
        </div>
    );
}
