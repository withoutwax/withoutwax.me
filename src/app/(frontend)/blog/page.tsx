import BlogPostListCard from '@/components/BlogPostListCard';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function Blog() {
  const payload = await getPayload({ config });
  const data = await payload.find({
    collection: 'blogs',
  });

  console.log('data', data);

  const posts = data.docs.filter((post: any) => {
    return post.categories.title != 'Code' && post.categories.title != 'Project';
  });

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Blog 💭
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`A place where I share my thoughts and life.`}
      </p>
      <div className="flex flex-col gap-4 w-full">
        {!data.docs.length
          ? 'Loading...'
          : posts.map((post) => <BlogPostListCard key={post.id} data={post} route={'blog'} />)}
      </div>
    </>
  );
}
