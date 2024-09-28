import React from "react";

interface Block {
  type: string;
  properties: {
    title?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface CustomNotionBlockRendererProps {
  blockMap: Block[];
}

export default function CustomNotionBlockRenderer({
  blockMap,
}: CustomNotionBlockRendererProps) {
  console.log("Block Map", blockMap);
  return (
    <div>
      {blockMap.map((block, index) => (
        <BlockBuilder key={index} block={block} />
      ))}
    </div>
  );
}

const BlockBuilder = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph block={block} />;
    // Add more cases for different block types as needed
    default:
      return <></>;
  }
};

const Paragraph = (block: any) => {
  console.log("Paragraph Block", block.block);

  const elements = block.block.paragraph.rich_text.map((element: any) => {
    console.log("Element", element);
    if (element.href) {
      return (
        <a
          href={element.text.link.url}
          className={`text-blue-500 underline`}
          target="_blank"
          rel="noreferrer noopener"
          key={element.id}
        >
          {element.text.content}
        </a>
      );
    }

    return (
      <span
        className={`${element.annotations.bold && "font-bold"} ${
          element.annotations.italic && "italic"
        } ${element.annotations.strikethrough && "line-through"} ${
          element.annotations.underline && "underline"
        } ${
          element.annotations.code &&
          "font-mono text-red-500 bg-[#eeeeec] dark:bg-gray-800 px-1 rounded-sm"
        } 
        ${
          element.annotations.color &&
          notionBackgroundColor(element.annotations.color)
        }
        ${
          element.annotations.color &&
          notionTextColor(element.annotations.color)
        }
        `}
        key={element.id}
      >
        {element.text.content}
      </span>
    );
  });

  return <p>{elements.length > 0 ? elements : <p>Empty values</p>}</p>;
};

const notionBackgroundColor = (color: string) => {
  switch (color) {
    case "blue_background":
      return "bg-blue-100";
    case "brown_background":
      return "bg-stone-200";
    case "gray_background":
      return "bg-gray-100";
    case "green_background":
      return "bg-green-100";
    case "orange_background":
      return "bg-orange-100";
    case "pink_background":
      return "bg-pink-100";
    case "purple_background":
      return "bg-purple-100";
    case "red_background":
      return "bg-red-100";
    case "yellow_background":
      return "bg-yellow-100";
    default:
      return "";
  }
};

const notionTextColor = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-700";
    case "brown":
      return "text-brown-700";
    case "gray":
      return "text-gray-700";
    case "green":
      return "text-green-700";
    case "orange":
      return "text-orange-700";
    case "pink":
      return "text-pink-700";
    case "purple":
      return "text-purple-700";
    case "red":
      return "text-red-700";
    case "yellow":
      return "text-yellow-500";
    default:
      return "";
  }
};
