import type { Metadata } from "next";
import localFont from "next/font/local";
import "./app.scss";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import DarkModeButton from "@/components/DarkModeButton";
import Link from "next/link";

const inter = localFont({
  src: "./fonts/inter-var-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Will's Blog",
  description: "A place where I share my life, thoughts and code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* {children} */}
          <div className="mx-auto flex w-full max-w-[900px] flex-col bg-white dark:bg-black md:flex-row md:bg-transparent">
            <nav className="navbar sticky top-0 z-10 my-0 flex w-full flex-wrap items-center justify-between gap-8 bg-white bg-opacity-50 px-8 py-8 dark:bg-black md:h-screen md:w-2/12 md:flex-col md:gap-0 md:py-16">
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
                  href="/blog"
                  className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  <span role="img" aria-label="thoughts">
                    💭
                  </span>
                </Link>
                <Link
                  href="/engineering"
                  className="p-1 text-center text-xl text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  <span role="img" aria-label="code">
                    💻
                  </span>
                </Link>
                <Link
                  href="/project"
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
            <main className="mb-8 flex w-full flex-col bg-white p-8 dark:bg-black md:mt-8 md:w-10/12">
              {children}
              <Footer />
            </main>
          </div>

          {/* Mobile - Dark Mode Button */}
          <div className="fixed bottom-8 left-8 md:hidden">
            <DarkModeButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
