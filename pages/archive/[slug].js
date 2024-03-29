import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import BlogLayout from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} lazy />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('archive');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('archive', params.slug);

  return { props: post };
}
