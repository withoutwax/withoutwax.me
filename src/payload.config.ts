import path from 'path'
import { fileURLToPath } from 'url'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres' // database-adapter-import
import { lexicalEditor } from '@payloadcms/richtext-lexical' // editor-import
import { buildConfig } from 'payload'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media' // Importing Media collection
import { s3Storage } from '@payloadcms/storage-s3' // Importing S3 storage plugin

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media], // Add the media collection here
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
