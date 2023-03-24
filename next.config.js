/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	externalDir:
		true |
		{
			enabled: true,
			silent: true
		},
	experimental: {
		appDir: true
	}
}

module.exports = nextConfig
