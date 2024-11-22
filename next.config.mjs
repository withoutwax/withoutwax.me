import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['localhost', 'withoutwax.me', 'vercel.app'],
  },
};

export default withPayload(nextConfig);
