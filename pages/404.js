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
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          404 – Page Unavailable
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Seems like the page you are looking for doesn't exist here. Perhaps
          you can try checking the url once more.
        </p>
        <Link href="/">
          <a className="mx-auto w-64 rounded-md bg-gray-100 p-1 text-center font-bold text-black dark:bg-gray-900 dark:text-white sm:p-4">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
