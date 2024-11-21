import type { Payload } from 'payload';
import { revalidate } from '@/utils/revalidate';

export const revalidatePost = async ({
  doc,
  collection,
  payload,
}: {
  doc: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  collection: string;
  payload: Payload;
}): Promise<void> => {
  if (doc._status === 'published') {
    revalidate({ payload, collection, slug: doc.slug });
  }
};
