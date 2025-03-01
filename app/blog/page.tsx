import ArticleLists from "@/components/articles/ArticleLists";

export const metadata = {
  title: "Blog",
  description: "A place where I share my thoughts and life.",
};

export default async function Blog() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Blog 💭
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`A place where I share my thoughts and life.`}
      </p>
      <ArticleLists type={`blog`} />
    </>
  );
}
