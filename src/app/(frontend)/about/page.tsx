import type { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@payload-config';
import RichText from '@/components/RichText';
import { unstable_cache } from 'next/cache';

export const metadata: Metadata = {
  title: "Will's Blog | About",
  description: 'About Will Kim',
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

const getCachedData = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    return await payload.findGlobal({
      slug: 'about',
    });
  },
  ['about'],
  { revalidate: 60, tags: ['about'] },
);

export default async function About() {
  const data = getCachedData();

  if (!data) {
    return <></>;
  }

  return <RichText content={(await data).content} />;
}
