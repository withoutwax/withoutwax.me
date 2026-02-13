'use client';

import Link from 'next/link';
import dayjs from 'dayjs';

const ArticleListsCard = ({
  title,
  publishedAt,
  description,
  image,
  slug,
  route,
  tags,
}: {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  slug: string;
  route: string;
  tags?: string[];
}) => {
  return (
    <Link
      href={`/${route}/${slug}`}
      className="flex flex-col md:flex-row justify-between w-full rounded-md border p-4 transition-all border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900 group"
    >
      <div
        className={`flex flex-col justify-between w-full ${
          image ? 'md:w-3/4 pr-0 md:pr-4' : 'w-full'
        }`}
      >
        <div>
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full text-lg font-semibold text-slate-800 dark:text-gray-100 md:text-xl ">
              {title}
            </h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>
        <div>
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
        </div>
      </div>
      {image && (
        <div className="w-full md:w-1/4 mt-4 md:mt-0 relative aspect-video md:aspect-square rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </Link>
  );
};

export default ArticleListsCard;
