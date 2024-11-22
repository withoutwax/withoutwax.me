import { formatDateTimeWithWords } from 'src/utils/formatDateTime';
import React from 'react';

import type { Blog, Code, Project, Archive } from '@/payload-types';

import { Media } from '@/components/Media';

export const PostHero: React.FC<{
  post: Blog | Code | Project | Archive;
}> = ({ post }) => {
  const {
    categories,
    meta: { image: metaImage } = {},
    // populatedAuthors,
    publishedAt,
    description,
    title,
  } = post;

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto items-start">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-gray-700 dark:text-white">
        {title}
      </h1>
      <h2 className="font-bold text-xl md:text-3xl text-gray-300 mb-4 dark:text-white">
        {description}
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-8">
        <div className="flex items-center">
          {/* <Image
          alt="Will Kim"
          height={24}
          width={24}
          src="/avatar.jpg"
          className="rounded-full"
        /> */}
          <div className="text-sm text-gray-600 dark:text-gray-300 flex">
            {publishedAt ? formatDateTimeWithWords(publishedAt) : ''}

            {/* {categories && categories.length > 0 ? (
              <>
                <span className="mx-2" key={`category-1`}>
                  {' '}
                  •{' '}
                </span>
                {categories[0].title as string}
              </>
            ) : (
              ''
            )} */}
            {/* {pageProperties.properties?.프로젝트 &&
            pageProperties.properties?.프로젝트.type === 'select' &&
            pageProperties.properties?.프로젝트.select
              ? [
                  <span className="mx-2" key={`category-2`}>
                    {' '}
                    •{' '}
                  </span>,
                  pageProperties.properties?.프로젝트.select.name,
                ]
              : ''} */}
          </div>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {/* {frontMatter.readingTime.text} */}
          {/* {` • `} */}
          {/* <ViewCounter slug={frontMatter.slug} /> */}
        </p>
      </div>
    </div>
    // <div className="relative -mt-[10.4rem] flex items-end">
    //   <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
    //     <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
    //       {/* <div className="uppercase text-sm mb-6">
    //         {categories?.map((category: any, index: number) => {
    //           if (typeof category === 'object' && category !== null) {
    //             const { title: categoryTitle } = category;

    //             const titleToUse = categoryTitle || 'Untitled category';

    //             const isLast = index === categories.length - 1;

    //             return (
    //               <React.Fragment key={index}>
    //                 {titleToUse}
    //                 {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
    //               </React.Fragment>
    //             );
    //           }
    //           return null;
    //         })}
    //       </div> */}

    //       <div className="">
    //
    //       </div>

    //       <div className="flex flex-col md:flex-row gap-4 md:gap-16">
    //         <div className="flex flex-col gap-4">
    //           {populatedAuthors && (
    //             <div className="flex flex-col gap-1">
    //               <p className="text-sm">Author</p>
    //               {populatedAuthors.map((author: any, index: number) => {
    //                 const { name } = author;

    //                 const isLast = index === populatedAuthors.length - 1;
    //                 const secondToLast = index === populatedAuthors.length - 2;

    //                 return (
    //                   <React.Fragment key={index}>
    //                     {name}
    //                     {secondToLast && populatedAuthors.length > 2 && (
    //                       <React.Fragment>, </React.Fragment>
    //                     )}
    //                     {secondToLast && populatedAuthors.length === 2 && (
    //                       <React.Fragment> </React.Fragment>
    //                     )}
    //                     {!isLast && populatedAuthors.length > 1 && (
    //                       <React.Fragment>and </React.Fragment>
    //                     )}
    //                   </React.Fragment>
    //                 );
    //               })}
    //             </div>
    //           )}
    //         </div>
    //         {publishedAt && (
    //           <div className="flex flex-col gap-1">
    //             <p className="text-sm">Date Published</p>

    //             <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="min-h-[80vh] select-none">
    //     {metaImage && typeof metaImage !== 'string' && (
    //       <Media fill imgClassName="-z-10 object-cover" resource={metaImage} />
    //     )}
    //     <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
    //   </div>
    // </div>
  );
};
