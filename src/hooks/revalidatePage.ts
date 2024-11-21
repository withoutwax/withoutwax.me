import type { GlobalAfterChangeHook } from 'payload';
import { revalidatePath } from 'next/cache';

export const revalidatePage: GlobalAfterChangeHook = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (JSON.stringify(doc) !== JSON.stringify(previousDoc)) {
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Failed to revalidate: ${response.statusText}`);
      }

      payload.logger.info(`Revalidation successful for path: ${apiUrl}`);
    } catch (error) {
      payload.logger.error(`Revalidation failed: ${error}`);
    }
  }

  return doc;
};
