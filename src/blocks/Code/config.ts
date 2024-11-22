import type { Block } from 'payload';

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          label: 'TypeScript',
          value: 'typescript',
        },
        {
          label: 'JavaScript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
        {
          label: 'HTML',
          value: 'html',
        },
        {
          label: 'JSON',
          value: 'json',
        },
        {
          label: 'Markdown',
          value: 'markdown',
        },
        {
          label: 'Python',
          value: 'python',
        },
        {
          label: 'Ruby',
          value: 'ruby',
        },
        {
          label: 'Java',
          value: 'java',
        },
        {
          label: 'C',
          value: 'c',
        },
        {
          label: 'C++',
          value: 'cpp',
        },
        {
          label: 'C#',
          value: 'csharp',
        },
        {
          label: 'Go',
          value: 'go',
        },
        {
          label: 'PHP',
          value: 'php',
        },
        {
          label: 'Shell',
          value: 'shell',
        },
        {
          label: 'Swift',
          value: 'swift',
        },
        {
          label: 'Dart',
          value: 'dart',
        },
        {
          label: 'Kotlin',
          value: 'kotlin',
        },
        {
          label: 'Rust',
          value: 'rust',
        },
        {
          label: 'Scala',
          value: 'scala',
        },
        {
          label: 'SQL',
          value: 'sql',
        },
        {
          label: 'YAML',
          value: 'yaml',
        },
        {
          label: 'Bash',
          value: 'bash',
        },
        {
          label: 'Dockerfile',
          value: 'dockerfile',
        },
        {
          label: 'GraphQL',
          value: 'graphql',
        },
        {
          label: 'Makefile',
          value: 'makefile',
        },
        {
          label: 'Objective-C',
          value: 'objectivec',
        },
        {
          label: 'Perl',
          value: 'perl',
        },
        {
          label: 'R',
          value: 'r',
        },
        {
          label: 'Sass',
          value: 'sass',
        },
        {
          label: 'SCSS',
          value: 'scss',
        },
        {
          label: 'TeX',
          value: 'tex',
        },
        {
          label: 'Vue',
          value: 'vue',
        },
        {
          label: 'XML',
          value: 'xml',
        },
        {
          label: 'YAML',
          value: 'yaml',
        },
        {
          label: 'Other',
          value: 'other',
        },
        {
          label: 'JSX',
          value: 'jsx',
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
};
