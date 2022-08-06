import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';
import DarkModeButton from './DarkModeButton';

export default function Container({ children }) {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  // useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="mx-auto flex w-full max-w-[900px] flex-col bg-white dark:bg-black md:flex-row md:bg-transparent">
        <nav className="navbar sticky top-0 z-10 my-0 flex w-full flex-wrap items-center justify-between gap-8 bg-white bg-opacity-50 px-8 py-8 dark:bg-black md:h-screen md:w-2/12 md:flex-col md:gap-0 md:py-16">
          <div className="md:order-0 order-1 flex w-full justify-between md:flex-col">
            {/* <NextLink href="/dashboard">
              <a className="p-1 smr:p-4 text-gray-900 dark:text-gray-100">
                Dashboard
              </a>
            </NextLink> */}
            <NextLink href="/">
              <a className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="home">
                  🏡
                </span>
              </a>
            </NextLink>
            <NextLink href="/blog">
              <a className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="thoughts">
                  💭
                </span>
              </a>
            </NextLink>
            <NextLink href="/code">
              <a className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="code">
                  💻
                </span>
              </a>
            </NextLink>
            <NextLink href="/project">
              <a className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="project">
                  🕹
                </span>
              </a>
            </NextLink>
            <NextLink href="/about">
              <a className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="profile">
                  👨🏻‍💻
                </span>
              </a>
            </NextLink>
            <NextLink href="/contact">
              <a className="md:order-0 order-1 p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4">
                <span role="img" aria-label="mail">
                  📬
                </span>
              </a>
            </NextLink>
          </div>

          {/* Desktop - Dark Mode Button */}
          <div className="order-0 hidden items-center justify-center md:order-1 md:flex">
            <DarkModeButton theme={theme} setTheme={setTheme} />
          </div>
        </nav>
        <main className="mb-8 flex w-full flex-col bg-white p-8 dark:bg-black md:mt-8 md:w-10/12">
          {children}
          <Footer />
        </main>
      </div>

      {/* Mobile - Dark Mode Button */}
      <div className="fixed bottom-8 left-8 md:hidden">
        <DarkModeButton theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}
