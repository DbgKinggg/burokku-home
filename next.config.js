/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**",
            },
        ],
    },
    webpack: (config) => {
        // eslint-disable-next-line
        config.externals.push("pino-pretty", "lokijs", "encoding");
        // eslint-disable-next-line
        return config;
    },
}

module.exports = nextConfig
