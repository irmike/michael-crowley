import "./globals.css";
import Link from "next/link";

const MOBILE_HEADER_LINK_TEXT_SIZE = "text-[13px]";

function Header() {
    return (
        <header className="border-b sticky top-0 z-50 bg-(--surface) backdrop-blur-md"
                style={{borderColor: "var(--border)"}} data-testid="header">
            <div className="app-container h-16 flex items-center" data-testid="header-container">
                <nav className="flex w-full items-center justify-between gap-3 overflow-x-auto"
                     data-testid="header-nav">
                    <Link href="/"
                          className={`font-bold whitespace-nowrap px-1 py-0.5 sm:text-lg text-base sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}
                          data-testid="header-home-link">
                        Home
                    </Link>
                    <div
                        className={`flex gap-0 sm:gap-4 whitespace-nowrap ${MOBILE_HEADER_LINK_TEXT_SIZE} sm:text-base px-0 sm:px-0`}
                        data-testid="header-links">
                        <Link href="/about" data-testid="header-about-link"
                              className={`px-1 py-0.5 sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}>About</Link>
                        <Link href="/contact" data-testid="header-contact-link"
                              className={`px-1 py-0.5 sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}>Contact</Link>
                        <Link href="/skills" data-testid="header-skills-link"
                              className={`px-1 py-0.5 sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}>Skills</Link>
                        <Link href="/projects" data-testid="header-projects-link"
                              className={`px-1 py-0.5 sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}>Projects</Link>
                        <Link href="/resume" data-testid="header-resume-link"
                              className={`px-1 py-0.5 sm:px-4 sm:py-1 ${MOBILE_HEADER_LINK_TEXT_SIZE}`}>Resume</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <div className="app-main">{children}</div>
        </body>
        </html>
    );
}
