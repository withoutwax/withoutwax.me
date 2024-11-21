import type { Metadata } from 'next';

import type { Blog, Code, Project, Archive } from '@/payload-types';

import { mergeOpenGraph } from './mergeOpenGraph';

export const generateMeta = async (args: {
  doc: Code | Blog | Project | Archive;
}): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`;

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | Payload Website Template'
    : 'Payload Website Template';

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  };
};
