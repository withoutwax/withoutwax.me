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
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Project 🕹
      </h1>
      <p className="mb-10 text-gray-600 dark:text-gray-400">
        {`Things that I tinker on my spare time.`}
      </p>
      {/* <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div> */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {!posts.length
          ? "No posts found."
          : posts.map((post) => (
              <BlogPostListCard data={post} route={"project"} />
            ))}
      </div>
    </div>
  );
}
