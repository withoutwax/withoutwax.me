import Link from 'next/link';
// import useSWR from 'swr';
// import format from 'comma-number';

import BlogPostCategory from '@/components/BlogPostCategory';
// import fetcher from '@/lib/fetcher';

// import Category from './Category';

const BlogPost = ({ title, summary, category, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full hover:bg-gray-100 dark:hover:bg-gray-900 p-4 rounded-md border">
        <div className="w-full">
          {/* <Category category={category}></Category> */}
          <div className="flex flex-col md:flex-row justify-between">
            {/* <p className="text-gray-500">{category}</p> */}
            
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {/* {`${views ? format(views) : '–––'} views`} */}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          <div className="mt-4">
            <BlogPostCategory category={category} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
