import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Will Kim"
        canonical="https://withoutwax.me/about"
        openGraph={{
          url: 'https://withoutwax.me/about',
          title: 'About Me – Will Kim'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-10 text-black dark:text-white">
          About 👨🏻‍💻
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">Welcome to my about page! I saw you were wondering who I am. Well, let me introduce myself! 😊</p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          Who are you? 👨🏻‍💻
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">I am a Software Engineer 💻 based in South Korea with background in Art and Design 🎨. I attended School of the Art Institute of Chicago for my Bachelors degree 🎓</p>
        
        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          How did you start 💻 coding?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">During my Sophomore year, there was an opening for a class called 'Object Oriented Programming.' I was curious to know what the class was and took it - and it changed my life. Since then, I've been coding and diving deeper into the world of programming. Now I am here!</p>
        
        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          What are you currently doing?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">Currently, I am working as a Web Developer in Legion Collective, a design agency based in Chicago. I am currently into Web Technology 🌐 using JavaScript, React and TypeScript. Occasionally, I am also doing some work in PHP, Python and C++. At home, I normally work on my side projects 🕹, build dev tools 🛠 or fun games 👾</p>
        
        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          Anything else? 💭
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">I have special love for minimalism, technology and the nature 🌱 Let's save the nature and make the 🌎 a better place. Plus, I love quotes too.</p>

        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">Thanks for visiting! 🙌🏼</p>

        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">Will Kim</p>
      </div>
    </Container>
  );
}
