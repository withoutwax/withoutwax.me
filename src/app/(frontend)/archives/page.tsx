import BlogPostListCard from '@/components/BlogPostListCard';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function Archive() {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: 'archives',
  });

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Archive 🗄
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Leave things from the past. And move on.`}
      </p>
      <div className="flex flex-col gap-4 w-full">
        {!data.docs.length
          ? 'Loading...'
          : data.docs.map((post) => (
              <BlogPostListCard key={post.id} data={post} route={'archives'} />
            ))}
      </div>
    </>
  );
}
