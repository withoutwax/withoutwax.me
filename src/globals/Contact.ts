import { revalidateGlobalPage } from '@/hooks/revalidateGlobalPage';
import { GlobalConfig } from 'payload';

export const Contact: GlobalConfig = {
  label: 'Contact',
  slug: 'contact',
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: '내용',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateGlobalPage],
  },
};
