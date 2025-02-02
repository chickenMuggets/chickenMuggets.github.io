const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for deployment on GitHub Pages
  output: "export",

  // Set basePath only in production (GitHub Pages)
  basePath: isProd ? "/nextjs-github-pages" : "",

  // Fixes image issues since Next.js doesn't support dynamic images with static export
  images: {
    unoptimized: true,
  },

  // Ensures correct asset paths for GitHub Pages
  assetPrefix: isProd ? "/nextjs-github-pages/" : "",
};

export default nextConfig;
