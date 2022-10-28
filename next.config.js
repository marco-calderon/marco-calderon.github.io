/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix:
		process.env.NODE_ENV === 'production' ? '/marco-calderon.gitlab.io' : '',
	images: {
		unoptimized: true
	}
};

module.exports = nextConfig;
