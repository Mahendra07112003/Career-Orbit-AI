/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images:{
        unoptimized: true,
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me",
            },
        ],
    },
};

export default nextConfig;
