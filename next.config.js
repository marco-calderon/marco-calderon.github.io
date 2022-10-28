/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix:
		process.env.NODE_ENV === 'production' ? '/marco-calderon.gitlab.io' : '',
};

module.exports = nextConfig;
