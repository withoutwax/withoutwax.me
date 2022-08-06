import { useState } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ArchivePost from '@/components/ArchivePost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://withoutwax.me/archive';
const title = 'Archive – Will Kim';
const description = 'All the posts and projects from the past.';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredArchivePosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((frontMatter) => frontMatter.category == 'archive');

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
          Archive 🗄
        </h1>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          {`Leave things from the past. And move on. `}
        </p>
        <div className="grid grid-cols-1 gap-4">
          {!filteredArchivePosts.length && 'No posts found.'}
          {filteredArchivePosts.map((frontMatter) => (
            <ArchivePost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('archive');

  return { props: { posts } };
}
