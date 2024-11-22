import BlogPostListCard from '@/components/BlogPostListCard';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function Code() {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: 'codes',
  });

  console.log('data', data);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Code 💻
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Tips 💡 and snippets of code that I found useful.`}
      </p>
      <div className="flex flex-col gap-4 w-full">
        {!data.docs.length
          ? 'Loading...'
          : data.docs.map((post) => <BlogPostListCard key={post.id} data={post} route={'code'} />)}
      </div>
    </>
  );
}
