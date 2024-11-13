/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['randomuser.me','res.cloudinary.com'],
        remotePatterns: [
            {
              hostname: "cdn.hashnode.com",
              protocol: "https",
            },
            {
              hostname: "randomuser.me",
              protocol: "https",
            },
            {
              hostname: "res.cloudinary.com",
              protocol: "https",
            },
          ],
    }
};

export default nextConfig;
