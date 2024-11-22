import path from 'path';
import { fileURLToPath } from 'url';
import { postgresAdapter } from '@payloadcms/db-postgres'; // database-adapter-import
import { buildConfig } from 'payload';
import { Users } from '@/collections/Users';
import { Media } from '@/collections/Media'; // Importing Media collection
import { Tags } from '@/collections/Tags';
import { Categories } from '@/collections/Categories';
import { Blogs } from '@/collections/Blogs';
import { Codes } from '@/collections/Codes';
import { Projects } from '@/collections/Projects';
import { Archives } from '@/collections/Archives';
import { Home } from '@/globals/Home';
import { About } from '@/globals/About';
import { Contact } from '@/globals/Contact';
import { s3Storage } from '@payloadcms/storage-s3'; // Importing S3 storage plugin
// import { defaultLexical } from '@/fields/defaultLexical'; // Importing defaultLexical}
import { lexicalEditor } from '@payloadcms/richtext-lexical'; // Importing defaultLexical

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Tags, Categories, Blogs, Codes, Projects, Archives], // Add the media collection here
  globals: [Home, About, Contact],
  editor: lexicalEditor({}),
  // editor: defaultLexical,
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
});
