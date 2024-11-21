import type { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@payload-config';
import RichText from '@/components/RichText';
import { unstable_cache } from 'next/cache';

export const metadata: Metadata = {
  title: "Will's Blog | About",
  description: 'About Will Kim',
};

const getCachedData = unstable_cache(
  async () => {
    const payload = await getPayload({ config });
    return await payload.findGlobal({
      slug: 'about',
    });
  },
  ['about'],
  { revalidate: 3600, tags: ['about'] },
);

export default async function About() {
  const data = getCachedData();

  if (!data) {
    return <></>;
  }

  return <RichText content={(await data).content} />;
}
