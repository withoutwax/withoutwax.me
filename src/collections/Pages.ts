import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: '제목',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: '내용',
      required: true,
    },
  ],
};
