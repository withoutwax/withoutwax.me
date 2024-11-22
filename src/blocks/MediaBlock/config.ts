import type { Block } from 'payload';

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'mediaType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Image / Video',
          value: 'imageOrVideo',
        },
        {
          label: 'YouTube Link',
          value: 'youtube',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (data) => data.mediaType === 'imageOrVideo',
      },
    },
    {
      name: 'youtubeLink',
      type: 'text',
      required: true,
      admin: {
        condition: (data) => data.mediaType === 'youtube',
      },
    },
  ],
};
