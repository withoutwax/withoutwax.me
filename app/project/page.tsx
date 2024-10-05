import { getProjects } from "@/lib/notion";
import BlogPostListCard from "@/components/BlogPostListCard";

export default async function Project() {
  const posts = await getProjects();
  console.log("Project Posts", posts);

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Project 🕹
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Things that I tinker on my spare time.`}
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {!posts.length
          ? "Loading..."
          : posts.map((post) => (
              <BlogPostListCard key={post.id} data={post} route={"blog"} />
            ))}
      </div>
    </>
  );
}
