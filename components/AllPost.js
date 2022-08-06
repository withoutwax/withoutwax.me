import Link from 'next/link';

import Category from './Category';

const AllPost = ({ title, summary, category, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/all/${slug}`}>
      <a className="w-full rounded-md border p-4 transition-all hover:bg-gray-100 dark:hover:bg-gray-900">
        <div className="mb-4 w-full">
          <Category category={category}></Category>
          <div className="flex flex-col justify-between md:flex-row">
            {/* <p className="text-gray-500">{category}</p> */}
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

export default AllPost;
