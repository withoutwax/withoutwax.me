import { BannerBlock } from '@/blocks/Banner/Component';
import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
import React, { Fragment, JSX } from 'react';
import { CMSLink } from '@/components/Link';
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical';
import type { BannerBlock as BannerBlockProps } from '@/payload-types';

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
              const fields = node.fields as MediaBlockProps;
              return <MediaBlock key={index} {...fields} />;
            }

            case 'horizontalrule':
              return <hr key={index} />;

            case 'relationship':
              return (
                <a
                  href={
                    typeof node.value === 'object' && 'slug' in node.value
                      ? `/${node.relationTo}/${node.value.slug}`
                      : '#'
                  }
                  className="border py-4 px-6 flex flex-col items-start rounded-md border-border space-y-2 hover:bg-gray-100 transition-all"
                  key={index}
                >
                  {typeof node?.value === 'object' && 'title' in node.value && (
                    <h3 className="my-0 no-underline decoration-none">{node.value.title}</h3>
                  )}
                  {typeof node?.value === 'object' && 'description' in node.value && (
                    <p className="my-0 no-underline decoration-none">{node.value.description}</p>
                  )}
                </a>
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
