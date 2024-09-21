/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flowbite.com',
            port: '',
            pathname: '/docs/images/people/**',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
