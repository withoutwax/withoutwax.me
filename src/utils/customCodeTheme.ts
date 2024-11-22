import type { PrismTheme } from '@/types/theme';

const customCodeTheme: PrismTheme = {
  plain: {
    color: '#9CDCFE',
    backgroundColor: '#1E1E1E',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: '#93a1a1',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#586e75',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#268bd2',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#2aa198',
      },
    },
    {
      types: ['operator', 'entity', 'url', 'language-css', 'style'],
      style: {
        color: '#657b83',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#859900',
      },
    },
    {
      types: ['function', 'class-name'],
      style: {
        color: '#b58900',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#cb4b16',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    // {
    //   types: ['code'],
    //   style: {
    //     fontFamily: 'inherit !important',
    //   },
    // },
    {
      types: ['code', 'pre'],
      style: {
        color: '#657b83',
        backgroundColor: '#1E1E1E',
      },
    },
    // {
    //   types: ['pre'],
    //   style: {
    //     msOverflowStyle: 'none', // IE and Edge
    //     scrollbarWidth: 'none', // Firefox
    //   },
    // },
    // {
    //   types: ['remark-code-title'],
    //   style: {
    //     color: '#657b83',
    //     backgroundColor: '#1E1E1E',
    //     padding: '0.5rem 1rem',
    //     border: '1px solid #657b83',
    //     borderBottom: 'none',
    //     borderRadius: '0.25rem 0.25rem 0 0',
    //     fontSize: '0.875rem',
    //     fontFamily: 'monospace',
    //     fontWeight: 'bold',
    //   },
    // },
    // {
    //   types: ['remark-code-title + pre'],
    //   style: {
    //     marginTop: '0',
    //     borderRadius: '0 0 0.25rem 0.25rem',
    //   },
    // },
    // {
    //   types: ['mdx-marker'],
    //   style: {
    //     display: 'block',
    //     margin: '0 -1rem',
    //     padding: '0 1rem',
    //     backgroundColor: '#1E1E1E',
    //     borderLeft: '4px solid #268bd2',
    //   },
    // },
    // {
    //   types: ['metric-card > a'],
    //   style: {
    //     textDecoration: 'none',
    //   },
    // },
    // {
    //   types: ['metric-card > p'],
    //   style: {
    //     margin: '0.5rem 0',
    //   },
    // },
    // {
    //   types: ['step > h3'],
    //   style: {
    //     margin: '0',
    //   },
    // },
  ],
};

export default customCodeTheme;
