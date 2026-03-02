/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  // Uncomment these for GitHub Pages deployment to /michael-crowley
  // basePath: '/michael-crowley',
  // assetPrefix: '/michael-crowley/',
  images: { unoptimized: true },
};

export default nextConfig;
