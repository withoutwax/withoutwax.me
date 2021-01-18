import NextLink from 'next/link';

// import Timeline from '../components/Timeline';
import Container from '../components/Container';
// import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white w-full">
          Welcome 👋🏼
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          Welcome to my site! This is my personal website where I share my thoughts, code and life.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          The site is built with Next.js and MDX. Previously, I've been using Gatsby and NetlifyCMS.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          The current page is still in WIP, more features will be added soon!
        </p>

        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Latest Posts
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a Posts.
        </p> */}

        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Dashboard
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a dashboard.
        </p> */}

        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Timeline
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a timeline.
        </p> */}

        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Music
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          Show what's on my playlist.
        </p> */}

        <section className="w-full flex flex-col">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
            Archive
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For any old posts before ~2018, you can find them here:
            <span>
              <NextLink href="/archive">
                <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100">
                  <span role="img" aria-label="archive">
                    🗄
                  </span>
                </a>
              </NextLink>
            </span>
          </p>
        </section>
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}
