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

1. On every push to `main`, GitHub Actions will automatically build the site using Node.js 24.13.0 and publish the static output from the `out` directory to the `gh-pages` branch.
2. The workflow file is located at `.github/workflows/gh-pages.yml` and uses the peaceiris/actions-gh-pages action for deployment.
3. Ensure your `next.config.mjs` includes `output: 'export'`, `basePath: '/michael-crowley'`, `assetPrefix: '/michael-crowley/'`, and `images: { unoptimized: true }` for compatibility.
4. All static asset paths (images, PDFs, iframes) should include `/michael-crowley/` as the prefix.
5. Enable GitHub Pages in your repo settings, pointing to the `gh-pages` branch.

No manual copying of the `out` directory is needed—deployment is fully automated.

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
