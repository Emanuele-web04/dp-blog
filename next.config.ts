import createMDX from '@next/mdx'
import { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint warnings in production
  },
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  extension: /\.mdx?$/,

})
// Merge MDX config with Next.js config
export default withMDX(nextConfig)