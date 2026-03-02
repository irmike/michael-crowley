"use client";

import { getImagePath } from '@/utils/paths';
import PDFViewer from '@/components/PDFViewer/PDFViewer';

export default function ResumePage() {
  const resumeUrl = getImagePath("/resume/Resume.pdf");

  return (
    <main>
      <h1>Resume</h1>
      <p>
        You can view my resume below, or{" "}
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          open it in a new tab
        </a>
        .
      </p>

      <div>
        <PDFViewer url={resumeUrl} className="w-full h-[80vh]" style={{ border: `1px solid var(--border)` }} />
      </div>
    </main>
  );
}
