/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // about/index.html instead of about.html: clean URLs on any static host.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig