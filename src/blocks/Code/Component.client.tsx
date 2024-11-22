'use client';
import { Highlight, themes } from 'prism-react-renderer';
import React from 'react';
import { CopyButton } from './CopyButton';
import customCodeTheme from '@/utils/customCodeTheme';

type Props = {
  code: string;
  language?: string;
};

export const Code: React.FC<Props> = ({ code, language = '' }) => {
  if (!code) return null;

  return (
    <div className="relative">
      <Highlight code={code} language={language} theme={customCodeTheme}>
        {({ getLineProps, getTokenProps, tokens }) => (
          <pre className="bg-black py-12 px-4 border text-sm border-border rounded overflow-x-auto">
            <p className="absolute top-2 left-2 text-xs text-gray-400">{language}</p>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ className: 'table-row', line })}>
                <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
                <span className="table-cell pl-4">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
            <CopyButton code={code} />
          </pre>
        )}
      </Highlight>
    </div>
  );
};
