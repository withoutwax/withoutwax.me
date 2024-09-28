"use server";

import { Client } from "@notionhq/client";
import {
  NOTION_TOKEN,
  NOTION_TEST_BLOG_ID,
  NOTION_PROJECT_ID,
  NOTION_CODE_ID,
  NOTION_BLOG_ID,
} from "@/lib/constant";
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getBlogs() {
  if (!NOTION_BLOG_ID || !NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN or NOTION_BLOG_ID is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.databases.query({
      database_id: NOTION_BLOG_ID as string,
      filter: {
        and: [
          {
            property: "블로그",
            status: {
              equals: "공개",
            },
          },
          {
            property: "분류",
            select: {
              does_not_equal: "개발 💻",
            },
          },
        ],
      },
      sorts: [
        {
          property: "블로그 개시일",
          direction: "descending",
        },
      ],
    });

    return response.results as DatabaseObjectResponse[];
  } catch {
    throw new Error("There's an error fetching the Notion database");
  }
}

export async function getCodes() {
  if (!NOTION_CODE_ID || !NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN or NOTION_CODE_ID is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.databases.query({
      database_id: NOTION_CODE_ID as string,
      filter: {
        and: [
          {
            property: "블로그",
            status: {
              equals: "공개",
            },
          },
          {
            property: "분류",
            select: {
              equals: "개발 💻",
            },
          },
        ],
      },
      sorts: [
        {
          property: "블로그 개시일",
          direction: "descending",
        },
      ],
    });

    return response.results as DatabaseObjectResponse[];
  } catch {
    throw new Error("There's an error fetching the Notion database");
  }
}

export async function getProjects() {
  if (!NOTION_PROJECT_ID || !NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN or NOTION_PROJECT_ID is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.databases.query({
      database_id: NOTION_PROJECT_ID as string,
      filter: {
        property: "블로그",
        status: {
          equals: "공개",
        },
      },
      sorts: [
        {
          property: "블로그 개시일",
          direction: "descending",
        },
      ],
    });

    return response.results as DatabaseObjectResponse[];
  } catch {
    throw new Error("There's an error fetching the Notion database");
  }
}

export async function getTestDatabase() {
  if (!NOTION_TEST_BLOG_ID) {
    throw new Error("NOTION_TOKEN or NOTION_TEST_BLOG_ID is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.databases.query({
      database_id: NOTION_TEST_BLOG_ID as string,
      filter: {
        property: "상태",
        status: {
          equals: "공개",
        },
      },
      sorts: [
        {
          property: "게시일",
          direction: "descending",
        },
      ],
    });

    return response.results as DatabaseObjectResponse[];
  } catch {
    throw new Error("There's an error fetching the Notion database");
  }
}
