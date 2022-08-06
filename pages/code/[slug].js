import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import CodeLayout from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <CodeLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} lazy />
    </CodeLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('code');

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
  const post = await getFileBySlug('code', params.slug);

  return { props: post };
}
