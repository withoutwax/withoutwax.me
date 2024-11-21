import { JSX } from 'react';
import Image from 'next/image';
import { extractIdFromYouTubeUrl } from '@/utils/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  BlockObjectResponse,
  ParagraphBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  QuoteBlockObjectResponse,
  CodeBlockObjectResponse,
  ImageBlockObjectResponse,
  VideoBlockObjectResponse,
  RichTextItemResponse,
  ListBlockChildrenResponse,
  PartialBlockObjectResponse,
  // ToDoBlockObjectResponse,
  // ToggleBlockObjectResponse,
  // TemplateBlockObjectResponse,
  // SyncedBlockBlockObjectResponse,
  // ChildPageBlockObjectResponse,
  // ChildDatabaseBlockObjectResponse,
  // EquationBlockObjectResponse,
  // CalloutBlockObjectResponse,
  // DividerBlockObjectResponse,
  // BreadcrumbBlockObjectResponse,
  // TableOfContentsBlockObjectResponse,
  // ColumnListBlockObjectResponse,
  // ColumnBlockObjectResponse,
  // LinkToPageBlockObjectResponse,
  // TableBlockObjectResponse,
  // TableRowBlockObjectResponse,
  // EmbedBlockObjectResponse,
  // BookmarkBlockObjectResponse,
  // PdfBlockObjectResponse,
  // FileBlockObjectResponse,
  // AudioBlockObjectResponse,
  // LinkPreviewBlockObjectResponse,
  // UnsupportedBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { notionBackgroundColor, notionTextColor } from '@/utils/utils';

export default function CustomNotionBlockRenderer({
  blockMap,
}: {
  blockMap: ListBlockChildrenResponse;
}) {
  console.log('Block Map', blockMap);
  let olList: JSX.Element[] = [];
  let ulList: JSX.Element[] = [];

  const element = blockMap.results.map(
    (block: PartialBlockObjectResponse | BlockObjectResponse, index: number) => {
      const returnElement: JSX.Element[] = [];

      if ('type' in block === false) {
        return returnElement;
      }

      if (block.type !== 'numbered_list_item' && olList.length > 0) {
        const list = olList;
        olList = [];
        returnElement.push(
          <ol key={index} className="list-decimal list-inside space-y-1 ml-3">
            {list}
          </ol>,
        );
      } else if (block.type !== 'bulleted_list_item' && ulList.length > 0) {
        const list = ulList;
        ulList = [];
        returnElement.push(
          <ul key={index} className="list-disc list-inside space-y-1 ml-3">
            {list}
          </ul>,
        );
      }

      switch (block.type) {
        case 'heading_1':
          returnElement.push(<Heading1 block={block} />);
          break;
        case 'heading_2':
          returnElement.push(<Heading2 block={block} />);
          break;
        case 'heading_3':
          returnElement.push(<Heading3 block={block} />);
          break;
        case 'paragraph':
          returnElement.push(<Paragraph block={block} />);
          break;
        case 'numbered_list_item':
          olList.push(<ListElement block={block} />);
          break;
        case 'bulleted_list_item':
          ulList.push(<ListElement block={block} />);
          break;
        case 'image':
          returnElement.push(<ImageBlock block={block} />);
          break;
        case 'code':
          returnElement.push(<Code block={block} />);
          break;
        case 'quote':
          returnElement.push(<Quote block={block} />);
          break;
        case 'divider':
          returnElement.push(<Divider />);
          break;
        case 'video':
          returnElement.push(<Video block={block} />);
          break;
        default:
          returnElement.push(<></>);
          break;
      }

      return [...returnElement];
    },
  );

  return <div className="space-y-3">{element}</div>;
}

const Video = ({ block }: { block: VideoBlockObjectResponse }) => {
  console.log('Video Block', block);
  const videoUrl =
    block.video.type === 'external' ? block.video.external.url : block.video.file.url;
  const id = extractIdFromYouTubeUrl(videoUrl);
  return (
    <div className="relative aspect-video">
      <iframe
        id="ytplayer"
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=1&fullscreen=1`}
      ></iframe>
      {/* <iframe
        src={block.block.video.external.url}
        className="w-full h-full border border-red-500"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

const Divider = () => {
  return <hr className="my-3" />;
};

const Quote = ({ block }: { block: QuoteBlockObjectResponse }) => {
  console.log('Quote Block', block);
  const elements = block.quote.rich_text.map((element: RichTextItemResponse, index: number) => {
    return <Text {...element} key={index} />;
  });
  return (
    <blockquote className={`border-l-4 border-black dark:border-white pl-4 py-1.5`}>
      {elements.length > 0 ? elements : <></>}
    </blockquote>
  );
};

const ListElement = ({
  block,
}: {
  block: NumberedListItemBlockObjectResponse | BulletedListItemBlockObjectResponse;
}) => {
  console.log('List Element', block);
  const lists =
    block.type === 'numbered_list_item'
      ? block.numbered_list_item.rich_text
      : block.bulleted_list_item.rich_text;
  const elements = lists.map((element: RichTextItemResponse, index: number) => {
    return (
      <li key={index}>
        <Text {...element} />
      </li>
    );
  });
  return elements.length > 0 ? elements : <></>;
};

const ImageBlock = ({ block }: { block: ImageBlockObjectResponse }) => {
  console.log('Image block', block);
  const caption = block.image.caption.map((element: RichTextItemResponse, index: number) => {
    return (
      <p key={index} className="text-gray-600 dark:text-gray-400 text-xs">
        {'text' in element ? element.text.content : ''}
      </p>
    );
  });
  return (
    <div>
      <Image
        src={block.image.type === 'file' ? block.image.file.url : block.image.external.url}
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

const Code = ({ block }: { block: CodeBlockObjectResponse }) => {
  console.log('Code Block', block);
  const elements = block.code.rich_text.map((element: RichTextItemResponse, index: number) => {
    return (
      <div key={index}>
        <SyntaxHighlighter
          language={block.code.language || 'text'}
          useInlineStyles={false}
          customStyle={{
            fontFamily: 'SF Mono',
          }}
          // style={coy}
        >
          {'text' in element ? element.text.content : ''}
        </SyntaxHighlighter>
      </div>
    );
  });
  const caption = block.code.caption.map((element: RichTextItemResponse, index: number) => {
    return (
      <p key={index} className="text-gray-600 dark:text-gray-400 text-xs">
        {'text' in element ? element.text.content : ''}
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

const Heading1 = ({ block }: { block: Heading1BlockObjectResponse }) => {
  // console.log("Heading 1", block);
  const elements = block.heading_1.rich_text.map((element: RichTextItemResponse, index: number) => {
    return <Text {...element} key={index} />;
  });
  return <h1 className="font-bold text-4xl">{elements.length > 0 ? elements : <></>}</h1>;
};

const Heading2 = ({ block }: { block: Heading2BlockObjectResponse }) => {
  // console.log("Heading 2", block);
  const elements = block.heading_2.rich_text.map((element: RichTextItemResponse, index: number) => {
    return <Text {...element} key={index} />;
  });
  return <h2 className="font-bold text-3xl">{elements.length > 0 ? elements : <></>}</h2>;
};

const Heading3 = ({ block }: { block: Heading3BlockObjectResponse }) => {
  // console.log("Heading 3", block);
  const elements = block.heading_3.rich_text.map((element: RichTextItemResponse, index: number) => {
    return <Text {...element} key={index} />;
  });
  return <h3 className="font-bold text-xl">{elements.length > 0 ? elements : <></>}</h3>;
};

const Paragraph = ({ block }: { block: ParagraphBlockObjectResponse }) => {
  // console.log("Paragraph Block", block.block);
  const elements = block.paragraph.rich_text.map((element: RichTextItemResponse, index: number) => {
    return <Text {...element} key={index} />;
  });

  return <p>{elements.length > 0 ? elements : <></>}</p>;
};

const Text = (element: RichTextItemResponse) => {
  if (element.href) {
    return (
      <a
        href={'text' in element && element.text.link ? element.text.link.url : ''}
        className={`text-blue-500 underline`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {'text' in element ? element.text.content : ''}
      </a>
    );
  }

  return (
    <span
      className={`${element.annotations.bold && 'font-bold'} ${
        element.annotations.italic && 'italic'
      } ${element.annotations.strikethrough && 'line-through'} ${
        element.annotations.underline && 'underline'
      } ${
        element.annotations.code &&
        'font-mono font-semibold text-[14px] text-gray-600 dark:text-gray-200 px-1 py-0.5 rounded-md bg-gray-100 dark:bg-gray-900'
      } 
      ${element.annotations.color && notionBackgroundColor(element.annotations.color)}
      ${element.annotations.color && notionTextColor(element.annotations.color)}
      `}
    >
      {'text' in element ? element.text.content : ''}
    </span>
  );
};
