import type { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'tests',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Test',
      required: true,
    },
  ],
}
