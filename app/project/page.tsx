import ArticleLists from "@/components/articles/ArticleLists";

export const metadata = {
  title: "Project",
  description: "Read my blog.",
};

export default async function Blog() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Project 🕹
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Things that I tinker on my spare time.`}
      </p>
      <ArticleLists type={`project`} />
    </>
  );
}
