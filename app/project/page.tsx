"use client";

import { useEffect, useState } from "react";
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getProjects } from "@/lib/notion";
import BlogPostListCard from "@/components/BlogPostListCard";

export default function Project() {
  const [posts, setPosts] = useState<DatabaseObjectResponse[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getProjects();
        console.log("postsData", postsData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

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
              <BlogPostListCard data={post} route={"blog"} />
            ))}
      </div>
    </>
  );
}
