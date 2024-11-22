import type { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@payload-config';
import RichText from '@/components/RichText';

export const metadata: Metadata = {
  title: "Will's Blog | Contact",
  description: 'Reach out! 📬',
};

export default async function Contact() {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({
    slug: 'contact',
  });

  return <RichText content={data.content} />;
}
