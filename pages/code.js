import { useState } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import CodePost from '@/components/CodePost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://withoutwax.me/code';
const title = 'Code – Will Kim';
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredCodePosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((frontMatter) => frontMatter.category == 'code');

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Code 💻
        </h1>
        <p className="mb-10 text-gray-600 dark:text-gray-400">
          {`Tips 💡 and snippets of code that I found useful.`}
        </p>
        {/* <div className="relative w-full mb-12">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search code"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div> */}
        <div className="grid grid-cols-1 gap-4">
          {!filteredCodePosts.length && 'No posts found.'}
          {filteredCodePosts.map((frontMatter) => (
            <CodePost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('code');

  return { props: { posts } };
}
