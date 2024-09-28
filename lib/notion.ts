"use server";

import { Client } from "@notionhq/client";
import {
  NOTION_TOKEN,
  NOTION_TOKEN_V2,
  NOTION_TEST_BLOG_ID,
  NOTION_PROJECT_ID,
  NOTION_CODE_ID,
  NOTION_BLOG_ID,
  NOTION_ACTIVE_USER,
} from "@/lib/constant";
import {
  DatabaseObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";

export async function getPageContentV1(
  id: string
): Promise<ListBlockChildrenResponse> {
  if (!NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.blocks.children.list({
      block_id: id,
      page_size: 50,
    });
    console.log("getPageContentV1", response);
    return response;
  } catch {
    throw new Error("There's an error fetching the Notion page");
  }
}

export async function getPageContentReactNotionX(id: string) {
  if (!NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN is not defined");
  }

  try {
    const notion = new NotionAPI({
      activeUser: NOTION_ACTIVE_USER,
      authToken: NOTION_TOKEN_V2,
    });
    const response = await notion.getPage(id);
    return response;
  } catch {
    throw new Error("There's an error fetching the Notion page");
  }
}

export async function getPageProperties(id: string) {
  if (!NOTION_TOKEN) {
    throw new Error("NOTION_TOKEN is not defined");
  }

  try {
    const notion = new Client({
      auth: NOTION_TOKEN,
    });
    const response = await notion.pages.retrieve({
      page_id: id as string,
    });

    return response;
  } catch {
    throw new Error("There's an error fetching the Notion database");
  }
}

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

export async function getArchives() {
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
        and: [
          {
            property: "블로그",
            status: {
              equals: "공개",
            },
          },
          {
            property: "상태",
            status: {
              equals: "아카이브",
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
