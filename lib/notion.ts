"use server";

import { Client } from "@notionhq/client";
import { NOTION_TOKEN, NOTION_TEST_BLOG_ID } from "@/lib/constant";
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getTestDatabase() {
  if (!NOTION_TEST_BLOG_ID) {
    throw new Error("NOTION_TEST_BLOG_ID is not defined");
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
