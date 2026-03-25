"use client";

import {contactData} from "@/data/contactData";
import SectionWithHeader from "@/components/common/SectionWithHeader";
import ExternalLink from "@/components/common/ExternalLink";

export default function ContactPage() {
    return (
        <div className={"max-w-lg mx-auto"} data-testid={"contact-page-wrapper"}>
            <SectionWithHeader sectionTitle="Contact" variant={"pageTitle"}>
                <section className="app-surface p-6">
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
                            <ExternalLink href={contactData.github.url}>
                                {contactData.github.label}
                            </ExternalLink>
                        </li>
                        <li>
                            <span className="font-semibold">LinkedIn:</span>{" "}
                            <ExternalLink href={contactData.linkedin.url}>
                                {contactData.linkedin.label}
                            </ExternalLink>
                        </li>
                    </ul>
                </section>
            </SectionWithHeader>
        </div>
    );
}
