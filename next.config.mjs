/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ? '/michael-crowley' : '';
const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH ? '/michael-crowley/' : '';

const nextConfig = {
  output: 'export',
  reactCompiler: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: { unoptimized: true },
};

export default nextConfig;
