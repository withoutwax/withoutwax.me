import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@payload-config';

export default async function Home() {
  const payload = await getPayload({ config });
  const test = await payload.find({
    collection: 'tests',
  });

  console.log('test', test);

  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 w-full text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        👋🏼
      </h1>
      <h1 className="mb-4 w-full text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Hi.
      </h1>

      <h3 className="mb-6 w-full text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
        My name is Will
      </h3>

      <p className="mb-4 w-full text-gray-600 dark:text-gray-400">
        Welcome to my page where I share my life 🌴, thoughts 💭, and code 💻.
      </p>

      <h2 className="mb-4 mt-8 w-full text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
        Blender
      </h2>
      <p className="mb-4 w-full text-gray-600 dark:text-gray-400">
        For anyone who came from this{' '}
        <a
          href="https://www.youtube.com/user/Calibre097/featured"
          className="text-gray-900 underline hover:text-gray-500 dark:text-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube channel
        </a>
        , a lot of things have changed: I kept following my passion, and now I am a Software
        Developer. If you are interested in my story, I&apos;ve shared my story
        <Link
          href="/blog/my-story"
          className="ml-1 text-gray-900 underline hover:text-gray-500 dark:text-gray-100"
        >
          here
        </Link>
        .
      </p>

      <section className="flex w-full flex-col">
        <h2 className="mb-4 mt-8 w-full text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
          Archive
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          For any old posts before ~2018, you can find them here:
          <span>
            <Link href="/archive" className="p-1 text-xl text-gray-900 dark:text-gray-100 sm:p-4">
              <span role="img" aria-label="archive">
                🗄
              </span>
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
}
