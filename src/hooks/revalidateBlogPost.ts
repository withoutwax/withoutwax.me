import type { CollectionAfterChangeHook } from 'payload';
import { revalidatePath } from 'next/cache';
// import { revalidate } from '@/api/revalidate';

import type { Blog, Code, Project, Archive } from '@/payload-types';

export const revalidateBlogPost: CollectionAfterChangeHook<Blog | Code | Project | Archive> = ({
  doc,
  previousDoc,
  req: { payload },
  collection,
}) => {
  if (doc._status === 'published') {
    const path = `/${collection.slug}/${doc.slug}`;

    console.log('revalidateBlogPost', doc, previousDoc, path, collection.slug);

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidatePath(`/${collection.slug}`);
    revalidatePath(path);
    // revalidate({ payload, collection, slug: doc.slug });
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/${collection.slug}/${previousDoc.slug}`;

    payload.logger.info(`Revalidating old post at path: ${oldPath}`);

    revalidatePath(`/${collection.slug}`);
    revalidatePath(oldPath);
  }

  return doc;
};
