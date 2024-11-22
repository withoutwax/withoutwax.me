import type { GlobalAfterChangeHook } from 'payload';
import { revalidatePath } from 'next/cache';

export const revalidateGlobalPage: GlobalAfterChangeHook = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (JSON.stringify(doc) !== JSON.stringify(previousDoc)) {
    const path = `/${previousDoc.globalType}`;

    payload.logger.info(`Revalidating post at path: ${path}`);

    revalidatePath(path);
  }

  return doc;
};
