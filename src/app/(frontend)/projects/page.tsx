import BlogPostListCard from '@/components/BlogPostListCard';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function Project() {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: 'projects',
  });

  console.log('data', data);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Project 🕹
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Things that I tinker on my spare time.`}
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {!data.docs.length
          ? 'Loading...'
          : data.docs.map((post) => (
              <BlogPostListCard key={post.id} data={post} route={'project'} />
            ))}
      </div>
    </>
  );
}
