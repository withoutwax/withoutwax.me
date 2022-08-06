import { useEffect, useState } from 'react'
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import BlogSeo from '@/components/BlogSeo';
import Category from '@/components/Category';

// const editUrl = (slug) =>
//   `https://github.com/withoutwax/withoutwax.me/edit/master/data/blog/${slug}.mdx`;
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `https://withoutwax.me/blog/${slug}`
//   )}`;

export default function BlogLayout({ children, frontMatter }) {
  // const hasMounted = reHydrationCheck();

  // if (!hasMounted) {
  //   return null;
  // }

  return (
    <Container>
      <BlogSeo
        url={`https://withoutwax.me/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article className="flex flex-col justify-center w-full max-w-2xl mx-auto items-start mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <h3 className="font-bold text-xl md:text-3xl text-gray-300 mb-4 dark:text-white">
          {frontMatter.summary}
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            {/* <Image
              alt="Will Kim"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            /> */}
            <p className="text-sm text-gray-700 dark:text-gray-300 flex">
              {frontMatter.by}
              {/* {'Will Kim / '} */}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              <span className="mx-2"> • </span>
              <Category category={frontMatter.category} />
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose dark:prose-dark w-full">
          {children}
        </div>
      </article>
    </Container>
  );
}

const reHydrationCheck = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  return hasMounted;
}