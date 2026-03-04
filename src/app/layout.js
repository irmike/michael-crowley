import "./globals.css";
import Link from "next/link";

function Header() {
    return (
        <header className="border-b sticky top-0 z-50 bg-[--surface] backdrop-blur-md" style={{ borderColor: "var(--border)" }} data-testid="header">
            <div className="app-container h-16 flex items-center" data-testid="header-container">
                <nav className="flex w-full items-center justify-between gap-3 overflow-x-auto" data-testid="header-nav">
                    <Link href="/" className="text-lg font-bold whitespace-nowrap" data-testid="header-home-link">
                        Home
                    </Link>
                    <div className="flex gap-4 whitespace-nowrap text-sm sm:text-base" data-testid="header-links">
                        <Link href="/about" data-testid="header-about-link">About</Link>
                        <Link href="/contact" data-testid="header-contact-link">Contact</Link>
                        <Link href="/skills" data-testid="header-skills-link">Skills</Link>
                        <Link href="/projects" data-testid="header-projects-link">Projects</Link>
                        <Link href="/resume" data-testid="header-resume-link">Resume</Link>
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
