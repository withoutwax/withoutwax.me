export default function Contact() {
  return (
    <>
      <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Contact 📬
      </h2>
      <div className="prose mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center">
        <h3 className="mb-4 text-center text-2xl font-bold tracking-tight text-black dark:text-white">
          If you wish to contact me, reach me with the email below:
        </h3>

        <a
          className="mailto my-8 text-center font-sans"
          href="mailto:w@withoutwax.me"
        >
          w@withoutwax.me
        </a>

        <p className="mb-6 w-full text-center text-gray-600 dark:text-gray-400">
          I&apos;m currently not open to work, or freelancing. For such emails,
          I may not respond back.
        </p>
        <p className="mb-6 w-full text-center text-gray-600 dark:text-gray-400">
          For other enquiries, if I do not get back to you please do not be
          offended. I am either in a situation where I cannot check my mail and
          I will do my best to reply back you.
        </p>
      </div>
    </>
  );
}
