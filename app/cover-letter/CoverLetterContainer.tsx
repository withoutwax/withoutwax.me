'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import MDXCoverLetter from './cover-letter.mdx';

const CoverLetterClient = () => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: '김희창 자기소개서',
    onAfterPrint: () => console.log('PDF generation triggered'),
  });

  return (
    <div>
      <button
        onClick={handlePrint}
        className="download-button cursor-pointer flex items-center gap-2"
      >
        <span role="img" aria-label="download" className="text-3xl">
          📄
        </span>
        <span className="text-sm font-bold text-gray-500 hover:text-gray-700 dark:text-gray-100">
          PDF로 다운로드
        </span>
      </button>
      <div ref={contentRef} className="print-container mt-10">
        <MDXCoverLetter />
      </div>
    </div>
  );
};

export default CoverLetterClient;
