import type { CollectionAfterChangeHook } from 'payload';

import { revalidatePath, revalidateTag } from 'next/cache';

import type { Blog, Code, Project, Archive } from '@/payload-types';

export const revalidatePost: CollectionAfterChangeHook<Blog | Code | Project | Archive> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/archive/${doc.slug}`;

    console.log('revalidatePost', doc, previousDoc, path);

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidateTag(path);
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/archive/${previousDoc.slug}`;

    payload.logger.info(`Revalidating old post at path: ${oldPath}`);

    revalidateTag(oldPath);
  }

  revalidateTag('/archive');

  return doc;
};
