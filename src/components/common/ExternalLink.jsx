/**
 * ExternalLink - A wrapper for external anchor tags.
 * Enforces consistent target="_blank" and rel="noreferrer" across the project.
 * Use this any time you link to an external URL (not an internal Next.js route).
 * For internal navigation, use Next.js <Link> instead.
 */
export default function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

