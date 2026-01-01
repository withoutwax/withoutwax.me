import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="font-bold text-3xl md:text-5xl tracking-tight text-gray-700 dark:text-gray-200 mb-6"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="font-bold text-2xl md:text-4xl tracking-tight text-gray-700 dark:text-gray-200 mb-4"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="font-bold text-xl md:text-3xl tracking-tight text-gray-700 dark:text-gray-200 mb-4"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="font-bold text-xl tracking-tight text-gray-700 dark:text-gray-200 mb-4"
      {...props}
    />
  ),
  h5: (props: HeadingProps) => (
    <h5
      className="font-bold text-lg tracking-tight text-gray-700 dark:text-gray-200 mb-4"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-gray-700 dark:text-gray-300 tracking-normal leading-7 mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-700 dark:text-gray-300 tracking-normal leading-7 mb-4 list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-700 dark:text-gray-300 tracking-normal leading-7 mb-4 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-bold dark:text-gray-200" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold dark:text-gray-200" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 dark:text-blue-400 font-medium underline';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => <hr className="my-4" {...props} />,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
