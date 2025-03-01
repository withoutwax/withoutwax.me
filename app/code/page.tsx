import ArticleLists from "@/components/articles/ArticleLists";

export const metadata = {
  title: "Code",
  description: "Tips 💡 and snippets of code that I found useful.",
};

export default async function Blog() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Code 💻
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Tips 💡 and snippets of code that I found useful.`}
      </p>
      <ArticleLists type={`code`} />
    </>
  );
}
