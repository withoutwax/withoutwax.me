"use client";

import { useEffect, useState } from "react";
import {
  getPageProperties,
  getPageContentReactNotionX,
  getPageContentV1,
} from "@/lib/notion";
import { DateTime } from "luxon";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";
import ExtendedNotionRenderer from "@/components/ExtendedNotionRenderer";
import CustomNotionBlockRenderer from "@/components/CustomNotionBlockRenderer";

export default function Page({ params }: { params: { id: string } }) {
  const [pageProperties, setProperties] = useState<any>({});
  // const [recordMap, setRecordMap] = useState<ExtendedRecordMap>();
  const [pageBlockChildren, setPageBlockChildren] = useState<any[]>([]);

  useEffect(() => {
    const fetchPageContentV1 = async () => {
      try {
        const blockData = await getPageContentV1(params.id);
        console.log("blockData", blockData);
        setPageBlockChildren(blockData.results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    const fetchPageProperties = async () => {
      try {
        const pagePropertyData = await getPageProperties(params.id);
        console.log("pagePropertyData", pagePropertyData);
        setProperties(pagePropertyData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    // const fetchPageContent = async () => {
    //   try {
    //     const recordMapData = await getPageContentReactNotionX(params.id);
    //     console.log("recordMapData", recordMapData);
    //     setRecordMap(recordMapData);
    //   } catch (error) {
    //     console.error("Error fetching posts");
    //   }
    // };

    fetchPageProperties();
    // fetchPageContent();
    fetchPageContentV1();
  }, []);

  if (!pageProperties) return <></>;

  console.log("Page Properties", pageProperties);
  // console.log("Page Content", recordMap);
  console.log("Page Content V1 - Block Children", pageBlockChildren);

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto items-start mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {/* <span>{pageProperties.icon.emoji}</span> */}
        {pageProperties.properties?.Name.title[0].plain_text}
      </h1>
      <h3 className="font-bold text-xl md:text-3xl text-gray-300 mb-4 dark:text-white">
        {pageProperties.properties?.설명.rich_text[0].plain_text}
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
            {DateTime.fromISO(pageProperties.created_time).toLocaleString({
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
            <span className="mx-2"> • </span>
            {pageProperties.properties?.분류.select.name}
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
