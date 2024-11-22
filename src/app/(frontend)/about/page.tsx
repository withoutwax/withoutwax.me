import type { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@payload-config';
import RichText from '@/components/RichText';

export const metadata: Metadata = {
  title: "Will's Blog | About",
  description: 'About Will Kim',
};

export default async function About() {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({
    slug: 'about',
  });

  return <RichText content={data.content} />;
}
