import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './app.scss';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import DarkModeButton from '@/components/DarkModeButton';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GOOGLE_ANALYTICS_ID } from '@/utils/constant';
import { Analytics } from '@vercel/analytics/react';

const inter = localFont({
  src: './fonts/inter-var-latin.woff2',
  variable: '--font-inter',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Will's Blog",
  description: 'A place where I share my life, thoughts and code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Font files */}
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
        /> */}
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/sf-mono-webfont@1.0.0/stylesheet.min.css"
        />
        {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
      </head>
      <body className={`${inter.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="w-full justify-center dark:bg-black">
            <div className="mx-auto flex w-full max-w-[900px] flex-col bg-white md:flex-row md:bg-transparent">
              <nav className="navbar sticky top-0 z-10 my-0 flex w-full md:w-auto flex-wrap items-center justify-between gap-8 bg-white bg-opacity-50 px-8 py-8 dark:bg-black md:h-screen md:flex-col md:gap-0 md:py-16">
                <div className="md:order-0 order-1 flex w-full justify-between md:flex-col">
                  <Link
                    href="/"
                    className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="home">
                      🏡
                    </span>
                  </Link>
                  <Link
                    href="/blogs"
                    className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="thoughts">
                      💭
                    </span>
                  </Link>
                  <Link
                    href="/codes"
                    className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="code">
                      💻
                    </span>
                  </Link>
                  <Link
                    href="/projects"
                    className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="project">
                      🕹
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="profile">
                      👨🏻‍💻
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="md:order-0 order-1 p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    <span role="img" aria-label="mail">
                      📬
                    </span>
                  </Link>
                </div>

                {/* Desktop - Dark Mode Button */}
                <div className="order-0 hidden items-center justify-center md:order-1 md:flex">
                  <DarkModeButton />
                </div>
              </nav>
              <main className="mb-8 flex w-full flex-col bg-white p-8 dark:bg-black md:mt-8 flex-1">
                <div className="max-w-2xl mx-auto mb-16 flex w-full flex-col items-start justify-center">
                  {children}
                </div>
                <Footer />
              </main>
            </div>

            {/* Mobile - Dark Mode Button */}
            <div className="fixed bottom-8 left-8 md:hidden">
              <DarkModeButton />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
