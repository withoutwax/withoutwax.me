import Category from '@/components/articles/Category';
import dayjs from 'dayjs';
import { ArticleMetadata } from '@/types/global';

export default function ArticleHeader({
  title,
  description,
  publishedAt,
  readingTime,
  category,
}: ArticleMetadata) {
  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {title}
      </h1>
      <h3 className="font-bold text-xl md:text-3xl text-gray-300 mb-4 dark:text-white">
        {description}
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="flex items-center">
          <div className="text-sm text-gray-700 dark:text-gray-300 flex">
            {publishedAt && <>{dayjs(publishedAt).format('MMMM DD, YYYY')}</>}
            {category && (
              <>
                <span className="mx-2"> • </span>
                <Category category={category} />
              </>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {readingTime && readingTime.text}
        </p>
      </div>
    </>
  );
}
