import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
	  mdxRs: true,
	},
	swcMinify: true,
	reactStrictMode: true,
	poweredByHeader: false,
	webpack: (config) => {
	  config.optimization.moduleIds = 'deterministic';
	  return config;
	}
  };

export default withContentlayer(nextConfig);
