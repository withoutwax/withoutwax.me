"use client";

import Link from "next/link";
import Category from "@/components/articles/Category";
import { DateTime } from "luxon";

const ArticleListsCard = ({
  title,
  publishedAt,
  description,
  category,
  slug,
  route,
}: {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  category?: string;
  slug: string;
  route: string;
}) => {
  return (
    <Link
      href={`/${route}/${slug}`}
      className="flex flex-col justify-between w-full rounded-md border p-4 transition-all border-gray-200 hover:border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <div className="w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl ">
            <span className="mr-1">
              {/* {data.icon && data.icon.type === 'emoji' ? data.icon.emoji : null} */}
            </span>
            {title}
          </h4>
          <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
            {/* {`${views ? format(views) : '–––'} views`} */}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex justify-start items-center space-x-2">
        <span className="text-sm text-gray-500 tracking-normal">
          {DateTime.fromISO(publishedAt).toFormat("yyyy.MM.dd")}
        </span>
        {category ? (
          <>
            <span className="text-sm text-gray-500">•</span>
            {/* <BlogPostCategory
              data={category}
              type={pathname === "/projects" ? "pill" : ""}
            /> */}
            <Category category={category} />
          </>
        ) : null}
      </div>
    </Link>
  );
};

export default ArticleListsCard;
