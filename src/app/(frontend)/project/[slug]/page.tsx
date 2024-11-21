import type { Metadata } from 'next';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { draftMode } from 'next/headers';
import React, { cache } from 'react';
import RichText from '@/components/RichText';
import { PostHero } from '@/heros/PostHero';
import { generateMeta } from '@/utils/generateMeta';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  });

  const params = posts.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Post({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise;
  const url = '/code/' + slug;
  const post = await queryPostBySlug({ slug });

  console.log('Post', post, url);

  if (!post) return <PayloadRedirects url={url} />;

  return (
    <article className="pt-4 pb-16 w-full">
      <PostHero post={post} />
      <RichText className="" content={post.content} enableGutter={false} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
