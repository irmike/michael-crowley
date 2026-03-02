"use client";

import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function AboutPage() {
  return (
    <main>
      <h1 className="mb-8">About Me</h1>

      {/* Section 1: Photo + Name + Description */}
      <section className="app-surface p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
        <Image
          src={getImagePath("/about/me.jpg")}
          alt="Profile photo"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover"
          style={{ border: `1px solid var(--border)` }}
          priority
        />
        // ...existing code...
      </section>

      {/* Section 2: Background */}
      // ...existing code...

      {/* Section 3: Interests/Fun Facts */}
      // ...existing code...
    </main>
  );
}