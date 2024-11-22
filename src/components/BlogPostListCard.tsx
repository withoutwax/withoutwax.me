'use client';

import Link from 'next/link';
import BlogPostCategory from '@/components/BlogPostCategory';
// import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { DateTime } from 'luxon';
import { usePathname } from 'next/navigation';
import { BlogPostCategoryProps } from '@/types';

const BlogPostListCard = ({ data, route }: { data: any; route: string }) => {
  const pathname = usePathname();
  console.log('Card Data', data);
  console.log('pathname', pathname);

  return (
    <Link
      href={`/${route}/${data.slug}`}
      className="flex flex-col justify-between w-full rounded-md border p-4 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <div className="w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl ">
            <span className="mr-1">
              {/* {data.icon && data.icon.type === 'emoji' ? data.icon.emoji : null} */}
            </span>
            {data.title && 'title' in data ? (data.title as string) : null}
          </h4>
          <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
            {/* {`${views ? format(views) : '–––'} views`} */}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {data.description ? (data.description as string) : null}
        </p>
      </div>
      <div className="mt-4 flex justify-start items-center space-x-2">
        <span className="text-sm text-gray-500">
          {data.publishedAt
            ? DateTime.fromISO(data.publishedAt).toFormat('yyyy.MM.dd')
            : DateTime.fromISO(data.createdAt).toFormat('yyyy.MM.dd')}
        </span>
        {data.categories ? (
          <>
            <span className="text-sm text-gray-500">•</span>
            <BlogPostCategory
              data={data.categories}
              type={pathname === '/projects' ? 'pill' : ''}
            />
          </>
        ) : null}
      </div>
    </Link>
  );
};

export default BlogPostListCard;
