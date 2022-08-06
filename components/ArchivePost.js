import Link from 'next/link';

const BlogPost = ({ title, summary, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/archive/${slug}`}>
      <a className="w-full rounded-md border p-4 hover:bg-gray-100 dark:hover:bg-gray-900">
        <div className="mb-4 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
              {title}
            </h4>
            <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
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
