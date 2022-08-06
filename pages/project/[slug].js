import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import ProjectLayout from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  return <ProjectLayout frontMatter={frontMatter}><MDXRemote {...mdxSource} components={MDXComponents} lazy /></ProjectLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('project');

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
  const post = await getFileBySlug('project', params.slug);

  return { props: post };
}
