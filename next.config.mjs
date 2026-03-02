/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  basePath: '/michael-crowley',
  assetPrefix: '/michael-crowley/',
  images: { unoptimized: true },
};

export default nextConfig;
