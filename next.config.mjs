/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["acertinity ui.com", "images.unsplash.com", "assets.aceternity.com","picsum.photos","avatar.vercel.sh","i.ibb.co","i.vimeocdn.com"]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    swcMinify: false,
    experimental: {
        forceSwcTransforms: false,
    },
    compiler: {
        // Disable SWC and use Babel instead
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
