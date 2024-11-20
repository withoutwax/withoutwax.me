import { getPageProperties, getPageContentV1 } from "@/lib/notion";
// import { DateTime } from "luxon";
import "react-notion-x/src/styles.css";
import CustomNotionBlockRenderer from "@/components/CustomNotionBlockRenderer";
import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  ListBlockChildrenResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { formatNotionDate } from "@/lib/utils";

export default async function DetailPage({ id }: { id: string }) {
  const pageProperties = (await getPageProperties(id)) as PageObjectResponse;
  const pageBlockChildren = (await getPageContentV1(
    id
  )) as ListBlockChildrenResponse;

  console.log("Page Properties", pageProperties, pageProperties.properties);
  console.log("Page Content V1 - Block Children", pageBlockChildren);
  // console.log("Page Content", recordMap);

  return (
    <div className="prose dark:prose-dark flex flex-col justify-center w-full max-w-2xl mx-auto items-start mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {/* <span>{pageProperties.icon.emoji}</span> */}
        {pageProperties.properties?.Name?.type === "title" &&
        pageProperties.properties?.Name.title.length > 0
          ? pageProperties.properties?.Name.title
              .filter(
                (text): text is TextRichTextItemResponse => text.type === "text"
              )
              .map((text) => (text as TextRichTextItemResponse).plain_text)
          : ""}
        {pageProperties.properties?.이름?.type === "title" &&
        pageProperties.properties?.이름.title.length > 0
          ? pageProperties.properties?.이름.title
              .filter(
                (text): text is TextRichTextItemResponse => text.type === "text"
              )
              .map((text) => text.plain_text)
          : ""}
      </h1>
      <h3 className="font-bold text-xl md:text-3xl text-gray-300 mb-4 dark:text-white mt-2">
        {pageProperties.properties?.설명?.type === "rich_text" &&
        pageProperties.properties?.설명.rich_text.length > 0
          ? pageProperties.properties?.설명.rich_text
              .filter(
                (text): text is TextRichTextItemResponse => text.type === "text"
              )
              .map((text) => text.text.content)
          : ""}
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="flex items-center">
          {/* <Image
          alt="Will Kim"
          height={24}
          width={24}
          src="/avatar.jpg"
          className="rounded-full"
        /> */}
          <div className="text-sm text-gray-700 dark:text-gray-300 flex">
            {pageProperties.properties.날짜 &&
            pageProperties.properties.날짜.type === "date" &&
            pageProperties.properties.날짜.date
              ? formatNotionDate(pageProperties.properties.날짜)
              : formatNotionDate(pageProperties.created_time)}

            {pageProperties.properties?.분류 &&
            pageProperties.properties?.분류.type === "select" &&
            pageProperties.properties?.분류.select
              ? [
                  <span className="mx-2" key={`category-1`}>
                    {" "}
                    •{" "}
                  </span>,
                  pageProperties.properties?.분류.select.name,
                ]
              : ""}
            {pageProperties.properties?.프로젝트 &&
            pageProperties.properties?.프로젝트.type === "select" &&
            pageProperties.properties?.프로젝트.select
              ? [
                  <span className="mx-2" key={`category-2`}>
                    {" "}
                    •{" "}
                  </span>,
                  pageProperties.properties?.프로젝트.select.name,
                ]
              : ""}
          </div>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {/* {frontMatter.readingTime.text} */}
          {/* {` • `} */}
          {/* <ViewCounter slug={frontMatter.slug} /> */}
        </p>
      </div>
      {/* <div className="prose dark:prose-dark w-full">{children}</div> */}
      {/* {recordMap && <ExtendedNotionRenderer recordMap={recordMap} />} */}
      <CustomNotionBlockRenderer blockMap={pageBlockChildren} />
    </div>
  );
}
