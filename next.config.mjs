/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
