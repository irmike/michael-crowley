# Resume Website

A modern, responsive resume website built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).

## Features

- **Multi-page layout** with consistent navigation and theming
- **Skills & Certificates** sections with interactive accordion and PDF preview modal
- **Projects showcase** with embedded iframes and links to source code
- **Resume page** with embedded PDF viewer
- **About & Contact** pages with contact information
- **Dark theme** with customizable CSS variables
- **Responsive design** that works on all screen sizes

## Deployment: GitHub Pages

This site is built as a static export using Next.js. To deploy to GitHub Pages:

1. Run `npm run export` to generate the static site in the `out` directory.
2. Copy the contents of `out/` to your `gh-pages` branch (or use a GitHub Action).
3. Ensure `.nojekyll` is present in the output directory to avoid issues with files/folders starting with `_`.
4. If deploying to a subpath (e.g., `username.github.io/repo-name`), uncomment and set `basePath` and `assetPrefix` in `next.config.mjs`.
5. Enable GitHub Pages in your repo settings, pointing to the `gh-pages` branch.

For automated deployment, consider using the `peaceiris/actions-gh-pages` GitHub Action.

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/data/` - Data files for skills, projects, and certificates
- `public/` - Static assets (images, PDFs, certificates)
- `src/app/globals.css` - Global theme variables and styling

## Building & Deployment

```bash
npm run build
npm start
```

## License

MIT
