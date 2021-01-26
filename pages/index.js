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
          👋🏼
        </h1>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white w-full">
          Hi.
        </h1>

        <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 text-black dark:text-white w-full">
          My name is Will
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          Welcome to my page where I share my life 🌴, thoughts 💭, and code 💻.
        </p>

        <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Blender
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          For anyone who came from this <a href="https://www.youtube.com/user/Calibre097/featured" className="underline text-gray-900 dark:text-gray-100 hover:text-gray-500" target="_blank" rel="noopener noreferrer">YouTube channel</a>, a lot of things have changed: I kept following my passion, and now I am a Software Developer. If you are interested in my story, I've shared my story 
          <NextLink href="/blog/my-story">
            <a className="ml-1 text-gray-900 dark:text-gray-100 hover:text-gray-500 underline">
              here
            </a>
          </NextLink>
          .
        </p>

        {/* <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Latest Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a Posts.
        </p> */}

        {/* <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a dashboard.
        </p> */}

        {/* <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Timeline
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          This is a timeline.
        </p> */}

        {/* <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
          Music
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 w-full">
          Show what's on my playlist.
        </p> */}

        <section className="w-full flex flex-col">
          <h2 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
            Archive
          </h2>
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
