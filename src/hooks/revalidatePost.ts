import type { CollectionAfterChangeHook } from 'payload';
import { revalidatePath } from 'next/cache';
// import { revalidate } from '@/api/revalidate';

import type { Blog, Code, Project, Archive } from '@/payload-types';

export const revalidatePost: CollectionAfterChangeHook<Blog | Code | Project | Archive> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  revalidatePath('/archive', 'layout');

  if (doc._status === 'published') {
    const path = `/archive/${doc.slug}`;

    console.log('revalidatePost', doc, previousDoc, path);

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidatePath(path, 'layout');
    // revalidate({ payload, collection, slug: doc.slug });
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/archive/${previousDoc.slug}`;

    payload.logger.info(`Revalidating old post at path: ${oldPath}`);

    revalidatePath(oldPath, 'layout');
  }

  return doc;
};
