import ArticleLists from "@/components/articles/ArticleLists";

export const metadata = {
  title: "Archive 🗄",
  description: "Leave things from the past. And move on.",
};

export default async function Blog() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Archive 🗄
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Leave things from the past. And move on.`}
      </p>
      <ArticleLists type={`archive`} />
    </>
  );
}
