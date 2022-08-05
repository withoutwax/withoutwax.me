// import { useState, useEffect } from 'react';
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
      <div className="flex flex-col md:flex-row mx-auto bg-white dark:bg-black md:bg-transparent w-full max-w-[900px]">
        <nav className="navbar z-10 bg-white dark:bg-black bg-opacity-50 sticky top-0 flex md:flex-col flex-wrap gap-8 md:gap-0 justify-between md:h-screen items-center px-8 py-8 md:py-16 my-0 w-full md:w-2/12">
          <div className="order-1 md:order-0 flex justify-between w-full md:flex-col">
            {/* <NextLink href="/dashboard">
              <a className="p-1 smr:p-4 text-gray-900 dark:text-gray-100">
                Dashboard
              </a>
            </NextLink> */}
            <NextLink href="/">
              <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="home">
                  🏡
                </span>
              </a>
            </NextLink>
            <NextLink href="/blog">
              <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="thoughts">
                  💭
                </span>
              </a>
            </NextLink>
            <NextLink href="/code">
              <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="code">
                  💻
                </span>
              </a>
            </NextLink>
            <NextLink href="/project">
              <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="project">
                  🕹
                </span>
              </a>
            </NextLink>
            <NextLink href="/about">
              <a className="text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="profile">
                  👨🏻‍💻
                </span>
              </a>
            </NextLink>
            <NextLink href="/contact">
              <a className="order-1 md:order-0 text-xl p-1 sm:p-4 text-gray-900 dark:text-gray-100 text-center">
                <span role="img" aria-label="mail">
                  📬
                </span>
              </a>
            </NextLink>
          </div>
          
          {/* Desktop - Dark Mode Button */}
          <div className="hidden order-0 md:order-1 md:flex items-center justify-center">
            <DarkModeButton theme={theme} setTheme={setTheme} />
          </div>
        </nav>
        <main className="flex flex-col w-full md:w-10/12 bg-white dark:bg-black p-8 md:mt-8 mb-8">
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
