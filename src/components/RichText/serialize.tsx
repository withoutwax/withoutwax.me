import { BannerBlock } from '@/blocks/Banner/Component';
import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
import React, { Fragment, JSX } from 'react';
import { CMSLink } from '@/components/Link';
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical';
import type { BannerBlock as BannerBlockProps } from '@/payload-types';
import Image from 'next/image';
import { Media } from '@/payload-types';
import Link from 'next/link';

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat';
import type { MediaBlock as MediaBlockProps } from '@/payload-types';

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<MediaBlockProps | BannerBlockProps | CodeBlockProps>;

type Props = {
  nodes: NodeTypes[];
};

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null | undefined => {
        if (node == null) {
          return null;
        }

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>;
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false;
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] });
          }
        };

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : '';

        console.log('node', node);

        if (node.type === 'block') {
          const block = node.fields;

          const blockType = block?.blockType;

          if (!block || !blockType) {
            return null;
          }

          switch (blockType) {
            case 'banner': {
              return <BannerBlock key={index} {...(block as BannerBlockProps)} />;
            }
            case 'code': {
              return <CodeBlock key={index} {...(block as CodeBlockProps)} />;
            }
            case 'mediaBlock': {
              const fields = block as MediaBlockProps;

              return <MediaBlock key={index} {...fields} />;
            }
            default:
              return null;
          }
        } else {
          switch (node.type) {
            case 'linebreak': {
              return <br className="col-start-2" key={index} />;
            }
            case 'paragraph': {
              return (
                <p className="col-start-2" key={index}>
                  {serializedChildren}
                </p>
              );
            }
            case 'heading': {
              const Tag = node?.tag;
              return (
                <Tag className="col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              );
            }
            case 'list': {
              const Tag = node?.tag;
              return (
                <Tag className="list col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              );
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={`space-x-2 list-none`}
                    key={index}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    <input
                      type="checkbox"
                      checked={node.checked}
                      readOnly
                      className="pointer-events-none w-4 h-4"
                    />
                    <span>{serializedChildren}</span>
                  </li>
                );
              } else {
                return (
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                );
              }
            }
            case 'quote': {
              return (
                <blockquote className="col-start-2" key={index}>
                  {serializedChildren}
                </blockquote>
              );
            }
            case 'link': {
              const fields = node.fields;

              return (
                <CMSLink
                  key={index}
                  newTab={Boolean(fields?.newTab)}
                  reference={fields.doc as any}
                  type={fields.linkType === 'internal' ? 'reference' : 'custom'}
                  url={fields.url}
                >
                  {serializedChildren}
                </CMSLink>
              );
            }

            case 'upload': {
              const media = node.value as Media;
              const mimeType = media?.mimeType;

              if (mimeType?.startsWith('image/')) {
                return (
                  <Image
                    alt={media?.alt}
                    className="col-start-2"
                    src={media?.url as string}
                    key={index}
                    width={media?.width as number}
                    height={media?.height as number}
                    loading="lazy"
                  />
                );
              } else if (mimeType?.startsWith('video/')) {
                return (
                  <video
                    className="col-start-2"
                    src={media?.url as string}
                    key={index}
                    width={media?.width as number}
                    height={media?.height as number}
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                );
              } else if (mimeType?.startsWith('audio/')) {
                return (
                  <audio className="col-start-2" src={media?.url as string} key={index} controls>
                    Your browser does not support the audio element.
                  </audio>
                );
              } else {
                return (
                  <Link
                    className="col-start-2 no-underline decoration-none flex items-center space-x-2 text-black hover:text-black hover:opacity-50 dark:text-white dark:hover:text-white transition-all"
                    href={media?.url as string}
                    key={index}
                    download
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    <span>{media?.alt || 'file'}</span>
                  </Link>
                );
              }
            }

            case 'horizontalrule':
              return <hr key={index} />;

            case 'relationship':
              return (
                <Link
                  href={
                    typeof node.value === 'object' && 'slug' in node.value
                      ? `/${node.relationTo}/${node.value.slug}`
                      : '#'
                  }
                  className="border border-gray-300 hover:border-gray-200 dark:border-gray-600 dark:hover:border-gray-600 py-4 px-6 flex flex-col items-start rounded-md border-border space-y-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all no-underline decoration-none"
                  key={index}
                >
                  {typeof node?.value === 'object' && 'title' in node.value && (
                    <div className="flex items-center space-x-2 text-gray-800 dark:text-white">
                      <h3 className="my-0">{node.value.title}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-6 transition-all"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  )}
                  {typeof node?.value === 'object' && 'description' in node.value && (
                    <p className="my-0 text-gray-600">{node.value.description}</p>
                  )}
                </Link>
              );

            default:
              return (
                <p>
                  <i>{node.type} is missing</i>
                </p>
              );
          }
        }
      })}
    </Fragment>
  );
}
