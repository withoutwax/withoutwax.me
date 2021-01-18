import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black md:bg-transparent md:grid md:grid-cols-12">{/* */}
      <nav className="navbar z-10 bg-white dark:bg-black bg-opacity-50 md:col-start-1 md:col-end-4 w-full sticky top-0 flex md:flex-col justify-between md:h-screen items-center md:items-end px-8 py-8 md:py-16 my-0">{/*  */}
        <div className="order-1 md:order-0 flex md:flex-col">
          {/* <NextLink href="/dashboard">
            <a className="p-1 smr:p-4 text-gray-900 dark:text-gray-100">
              Dashboard
            </a>
          </NextLink> */}
          <NextLink href="/">
            <a className="text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="home">
                🏡
              </span>
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a className="text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="thoughts">
                💭
              </span>
            </a>
          </NextLink>
          <NextLink href="/code">
            <a className="text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="code">
                💻
              </span>
            </a>
          </NextLink>
          <NextLink href="/project">
            <a className="text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="project">
                🕹
              </span>
            </a>
          </NextLink>
          <NextLink href="/about">
            <a className="text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="profile">
                👨🏻‍💻
              </span>
            </a>
          </NextLink>
        </div>

        <div className="order-0 md:order-1 flex md:flex-col items-center">
          <NextLink href="/contact">
            <a className="order-1 md:order-0 text-xl p-1 sm:p-4 mr-6 md:mr-0 text-gray-900 dark:text-gray-100">
              <span role="img" aria-label="mail">
                📬
              </span>
            </a>
          </NextLink>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="order-0 md:order-1 bg-gray-200 dark:bg-gray-800 rounded mr-6 md:m-2 p-3 h-10 w-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
      <main className="md:col-start-4 md:col-end-10 flex flex-col bg-white dark:bg-black p-8 md:mt-8 mb-8">
        {children}
        <Footer />
      </main>
    </div>
  );
}
