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
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16">
        <h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-10 text-black dark:text-white">
          About 👨🏻‍💻
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          Welcome to my about page! I saw you were wondering who I am. Well, let
          me introduce myself! 😊
        </p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          Who are you? 👨🏻‍💻
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          I am a Christian 🙏🏼 based in South Korea working as a Software
          Engineer 💻 I have a background in Art and Design 🎨 and I attended
          School of the Art Institute of Chicago for my Bachelors degree 🎓
        </p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          How did you start 💻 coding?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          During my Sophomore year, there was an opening for a class called
          'Object Oriented Programming.' I was curious to know what the class
          was and took it - and it changed my life. Since then, I've been coding
          and diving deeper into the world of programming. Now I am here!
        </p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          How did you meet Jesus?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          It was year 2021, January 1st, where I was giving new years service. I
          was thinking about stocks, pondering about what is the one ultimate
          investment in life which will never fail and always be profitable.
          Then I thought of Kingdom of Heaven - Matthew 6:19-21 - realizing the
          most profitable thing to invest for was the Kingdom of Heaven. It was
          a moment where Heaven became real to me and decided to jump with leap
          of faith to know more about it. And during that journey, I met Jesus.
        </p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          What are you currently doing?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          Currently, I am working as a Web Developer. I am currently into Web
          Technology 🌐 using JavaScript, React and PHP. I would occasionally do
          some work in Python and C++. At home, I used to work on my side
          projects 🕹, build dev tools 🛠 or fun games 👾. But now I pray 🤲🏼, read
          the Bible 📖 and worship 👏🏼 and glorify the God ❤️
        </p>

        <h3 className="font-bold text-2xl tracking-tight mt-6 mb-4 text-black dark:text-white">
          Anything else? 💭
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          I use to have special love for minimalism, technology and the nature
          🌱 I thought to the best thing to do in life was to save the nature
          and make the 🌎 a better place. But I found Jesus and realized he is
          the best way to make the 🌎 a better place.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">
          Thanks for visiting! 🙌🏼
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full">Will Kim</p>
      </div>
    </Container>
  );
}
