import "./globals.css";
import Link from "next/link";

function Header() {
    return (
        <header className="border-b sticky top-0 z-50 bg-[--surface] backdrop-blur-md bg-opacity-90" style={{ borderColor: "var(--border)" }}>
            <div className="app-container h-16 flex items-center">
                <nav className="flex w-full items-center justify-between gap-3 overflow-x-auto">
                    <Link href="/" className="text-lg font-bold whitespace-nowrap">
                        Home
                    </Link>
                    <div className="flex gap-4 whitespace-nowrap text-sm sm:text-base">
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/skills">Skills</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/resume">Resume</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="app-main">{children}</div>
            </body>
        </html>
    );
}
