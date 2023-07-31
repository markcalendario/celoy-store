/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH
};

module.exports = nextConfig;
