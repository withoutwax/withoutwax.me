import { revalidateGlobalPage } from '@/hooks/revalidateGlobalPage';
import { GlobalConfig } from 'payload';

export const Home: GlobalConfig = {
  label: 'Home',
  slug: 'home',
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
