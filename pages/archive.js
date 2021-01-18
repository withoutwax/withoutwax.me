import { useState } from 'react';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import ArchivePost from '@/components/ArchivePost';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const url = 'https://withoutwax.me/archive';
const title = 'Archive – Will Kim';
const description =
  'All the posts and projects from the past.';

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
    .filter((frontMatter) => 
      frontMatter.category == 'archive'
    );

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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-4">
          Archive 🗄
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 ml-4">
          {`Leave things from the past. And move on. `}
        </p>
        {/* {!searchValue && (
          <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
              Most Popular
            </h3>
            <ArchivePost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <ArchivePost
              title="How Stripe Designs Beautiful Websites"
              summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
              slug="how-stripe-designs-beautiful-websites"
            />
            <ArchivePost
              title="Creating a Monorepo with Lerna & Yarn Workspaces"
              summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
              slug="monorepo-lerna-yarn-workspaces"
            />
          </>
        )} */}
        {!filteredArchivePosts.length && 'No posts found.'}
        {filteredArchivePosts.map((frontMatter) => (
          <ArchivePost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
