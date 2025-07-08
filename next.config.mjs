/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
            {
              hostname: "images.unsplash.com", 
              protocol: "https",
            }, 
            {
              hostname: "unsplash.com",
              protocol:"https"
            },
            {
              hostname: "cdn.sanity.io", 
              protocol: "https"
            }
          ],
    }
};

export default nextConfig;
