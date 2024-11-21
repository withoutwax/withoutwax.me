import { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  label: 'About',
  slug: 'about',
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: '내용',
      required: true,
    },
  ],
};
