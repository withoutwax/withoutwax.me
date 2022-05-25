import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function Contact() {
  return (
    <Container>
      <NextSeo
        title="Contact – Will Kim"
        canonical="https://withoutwax.me/contact"
        openGraph={{
          url: 'https://withoutwax.me/contact',
          title: 'Contact – Will Kim'
        }}
      />
      <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white text-center">
        Contact 📬
      </h2>
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 prose">
        <h3 className="text-center font-bold text-2xl tracking-tight mb-4 text-black dark:text-white">
          If you wish to contact me, reach me with the email below:
        </h3>

        <a className="mailto text-center my-8" href="mailto:w@withoutwax.me">
          w@withoutwax.me
        </a>

        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full text-center">
          I'm currently not open to work, or freelancing. For such emails, I may
          not respond back.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6 w-full text-center">
          For other enquiries, if I do not get back to you please do not be
          offended. I am either in a situation where I cannot check my mail and
          I will do my best to reply back you.
        </p>
      </div>
    </Container>
  );
}
