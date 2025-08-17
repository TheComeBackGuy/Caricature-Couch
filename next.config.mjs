/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if applicable, but HTTPS is recommended
        hostname: "caricaturecouch.com", // Replace with the actual hostname
        port: "", // Leave empty if no specific port is required
        pathname: "/images", // Allows any path on the specified hostname
      },
      // Add more objects for other external image domains if needed
    ],
  },
};

export default nextConfig;
