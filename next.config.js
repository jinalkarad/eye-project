const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_BASE_MEDIA_URL: process.env.NEXT_PUBLIC_API_BASE_MEDIA_URL,
  },
  images: {
    domains: ["corporatecb.azurewebsites.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
