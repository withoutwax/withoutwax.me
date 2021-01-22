import Link from 'next/link';
// import useSWR from 'swr';
// import format from 'comma-number';

// import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, summary, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/archive/${slug}`}>
      <a className="w-full hover:bg-gray-100 dark:hover:bg-gray-900 p-4 rounded-md">
        <div className="mb-4 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {/* {`${views ? format(views) : '–––'} views`} */}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
