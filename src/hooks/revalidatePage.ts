import type { GlobalAfterChangeHook } from 'payload';

import { revalidatePath } from 'next/cache';

import type { Blog, Code, Project, Archive } from '@/payload-types';

export const revalidatePage: GlobalAfterChangeHook = ({ doc, previousDoc, req: { payload } }) => {
  if (JSON.stringify(doc) !== JSON.stringify(previousDoc)) {
    const path = `/${doc.slug}`;

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidatePath(path);
  }

  return doc;
};
