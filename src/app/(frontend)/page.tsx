import { getPayload } from 'payload';
import config from '@payload-config';
import RichText from '@/components/RichText';

export default async function Home() {
  const payload = await getPayload({ config });
  const data = await payload.findGlobal({
    slug: 'home',
  });

  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <RichText content={data.content} />
    </div>
  );
}
