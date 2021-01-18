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
        <p className="text-gray-600 dark:text-gray-400 mb-16 w-full">
          Welcome to my site! This is my personal website where I share my thoughts, code and life. 
          Feel free to look around!
        </p>
        {/* <section className="w-full flex flex-col">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white w-full">
            Archive
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">~ 2018</p>
          <NextLink href="/archive">
            <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="archive">
                🗄
              </span>
            </a>
          </NextLink>
        </section> */}
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}
