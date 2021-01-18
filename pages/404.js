import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title="404 – Will Kim"
        canonical="https://withoutwax.me/404"
        openGraph={{
          url: 'https://withoutwax.me/404',
          title: '404 – Will Kim'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Page Unavailable
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Seems like the page you are looking for doesn't exist here. Perhaps
          you can try checking the url once more.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
