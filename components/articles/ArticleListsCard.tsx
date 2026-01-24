'use client';

import Link from 'next/link';
import Category from '@/components/articles/Category';
import dayjs from 'dayjs';
import { CategoryType } from '@/types/global';

const ArticleListsCard = ({
  title,
  publishedAt,
  description,
  category,
  slug,
  route,
  tags,
}: {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  category?: CategoryType;
  slug: string;
  route: string;
  tags?: string[];
}) => {
  return (
    <Link
      href={`/${route}/${slug}`}
      className="flex flex-col justify-between w-full rounded-md border p-4 transition-all border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <div className="w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-semibold text-slate-800 dark:text-gray-100 md:text-xl ">
            {title}
          </h4>
          <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
            {/* {`${views ? format(views) : '–––'} views`} */}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex justify-start items-center space-x-2">
        <span className="text-sm text-slate-900 dark:text-gray-200 tracking-normal">
          {dayjs(publishedAt).format('YYYY.MM.DD')}
        </span>
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default ArticleListsCard;
