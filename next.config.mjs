/** @type {import('next').NextConfig} */
const nextConfig = {
    ignoreDuringBuilds: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co.com',
            },
        ],
    },
};

export default nextConfig;
