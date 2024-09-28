import { JSX, useState } from "react";
import Image from "next/image";

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
  let olList: JSX.Element[] = [];
  let ulList: JSX.Element[] = [];

  const element = blockMap.map((block, index) => {
    let returnElement: JSX.Element[] = [];

    if (block.type !== "numbered_list_item" && olList.length > 0) {
      const list = olList;
      olList = [];
      returnElement.push(
        <ol key={index} className="list-decimal list-inside space-y-1 ml-3">
          {list}
        </ol>
      );
    } else if (block.type !== "bulleted_list_item" && ulList.length > 0) {
      const list = ulList;
      ulList = [];
      returnElement.push(
        <ul key={index} className="list-disc list-inside space-y-1 ml-3">
          {list}
        </ul>
      );
    }

    switch (block.type) {
      case "heading_1":
        returnElement.push(<Heading1 block={block} />);
        break;
      case "heading_2":
        returnElement.push(<Heading2 block={block} />);
        break;
      case "heading_3":
        returnElement.push(<Heading3 block={block} />);
        break;
      case "paragraph":
        returnElement.push(<Paragraph block={block} />);
        break;
      case "numbered_list_item":
        olList.push(<ListElement block={block} />);
        break;
      case "bulleted_list_item":
        ulList.push(<ListElement block={block} />);
        break;
      case "image":
        returnElement.push(<ImageBlock block={block} />);
        break;
      case "code":
        returnElement.push(<Code block={block} />);
        break;
      case "quote":
        returnElement.push(<Quote block={block} />);
        break;
      case "divider":
        returnElement.push(<Divider />);
        break;
      default:
        returnElement.push(<></>);
        break;
    }

    return [...returnElement];
  });

  return <div className="space-y-3">{element}</div>;
}
const Divider = () => {
  return <hr className="my-3" />;
};

const Quote = (block: any) => {
  console.log("Quote Block", block);
  const elements = block.block.quote.rich_text.map((element: any) => {
    return <Text {...element} />;
  });
  return (
    <blockquote
      className={`border-l-4 border-black dark:border-white pl-4 py-1.5`}
    >
      {elements.length > 0 ? elements : <></>}
    </blockquote>
  );
};

const ListElement = (block: any) => {
  console.log("List Element", block);
  const lists =
    block.block.type === "numbered_list_item"
      ? block.block.numbered_list_item.rich_text
      : block.block.bulleted_list_item.rich_text;
  const elements = lists.map((element: any) => {
    return (
      <li key={element.id}>
        <Text {...element} />
      </li>
    );
  });
  return elements.length > 0 ? elements : <></>;
};

const ImageBlock = (block: any) => {
  console.log("Image block", block);
  const caption = block.block.image.caption.map((element: any) => {
    return (
      <p className="text-gray-600 dark:text-gray-400 text-xs">
        {element.text.content}
      </p>
    );
  });
  return (
    <div>
      <Image
        src={block.block.image.file.url}
        // alt={block.block.image.caption[0].text.content}
        alt={``}
        width={700}
        height={500}
        // width={block.block.image.file.width}
        // height={block.block.image.file.height}
        layout="responsive"
        className="w-full h-full object-cover"
      />
      <p className="text-gray-600 dark:text-gray-400 text-xs">{caption}</p>
    </div>
  );
};

const Code = (block: any) => {
  console.log("Code Block", block);
  const elements = block.block.code.rich_text.map((element: any) => {
    return (
      <div className="prose">
        <pre className="relative ">
          <code>{element.text.content}</code>
          {/* <p className="absolute right-4 text-gray-400">
            {block.block.code.language}
          </p> */}
        </pre>
      </div>
    );
  });
  const caption = block.block.code.caption.map((element: any) => {
    return (
      <p className="text-gray-600 dark:text-gray-400 text-xs">
        {element.text.content}
      </p>
    );
  });
  return (
    <>
      {elements.length > 0 ? (
        <div>
          {elements}
          {caption}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const Heading1 = (block: any) => {
  // console.log("Heading 1", block);
  const elements = block.block.heading_1.rich_text.map((element: any) => {
    return <Text {...element} />;
  });
  return <h1>{elements.length > 0 ? elements : <></>}</h1>;
};

const Heading2 = (block: any) => {
  // console.log("Heading 2", block);
  const elements = block.block.heading_2.rich_text.map((element: any) => {
    return <Text {...element} />;
  });
  return <h2>{elements.length > 0 ? elements : <></>}</h2>;
};

const Heading3 = (block: any) => {
  // console.log("Heading 3", block);
  const elements = block.block.heading_3.rich_text.map((element: any) => {
    return <Text {...element} />;
  });
  return <h3>{elements.length > 0 ? elements : <></>}</h3>;
};

const Paragraph = (block: any) => {
  // console.log("Paragraph Block", block.block);
  const elements = block.block.paragraph.rich_text.map((element: any) => {
    return <Text {...element} />;
  });

  return <p>{elements.length > 0 ? elements : <></>}</p>;
};

const Text = (element: any) => {
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
      ${element.annotations.color && notionTextColor(element.annotations.color)}
      `}
      key={element.id}
    >
      {element.text.content}
    </span>
  );
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
