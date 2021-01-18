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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ml-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 text-black dark:text-white">
          About 👨🏻‍💻
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Hi. 🙌🏼, This is Will.
          </h2>
          <p>Welcome to my about page! I saw you were wondering who I am. Well, let me introduce myself! 😊</p>

          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Who are you? 👨🏻‍💻
          </h2>
          <p>I am a Software Engineer 💻 based in Chicago with background in Art and Design 🎨. I attended School of the Art Institute of Chicago for my Bachelors degree 🎓</p>
          
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            How did you start 💻 coding?
          </h2>
          <p>During my Sophomore year, there was an opening for a class called 'Object Oriented Programming.' I was curious to know what the class was and took it - and it changed my life. Since then, I've been coding and diving deeper into the world of programming. Now I am here!</p>
          
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            What are you currently doing?
          </h2>
          <p>Currently, I am working as a Web Developer in Legion Collective, a design agency based in Chicago. I am currently into Web Technology 🌐 using JavaScript, React and TypeScript. Occasionally, I am also doing some work in PHP, Python and C++. At home, I normally work on my side projects 🕹, build dev tools 🛠 or fun games 👾</p>
          
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Anything else? 💭
          </h2>
          <p>I have special love for minimalism, technology and the nature 🌱 Let's save the nature and make the 🌎 a better place. Plus, I love quotes too.</p>

          <p>Thanks for visiting! 🙌🏼</p>

          <p>Will Kim</p>

        </div>
      </div>
    </Container>
  );
}
