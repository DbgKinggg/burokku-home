/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // eslint-disable-next-line
        config.externals.push("pino-pretty", "lokijs", "encoding");
        // eslint-disable-next-line
        return config;
    },
}

module.exports = nextConfig
