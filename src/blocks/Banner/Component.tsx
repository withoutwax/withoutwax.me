import type { BannerBlock as BannerBlockProps } from 'src/payload-types';

import { cn } from 'src/utils/cn';
import React from 'react';
import RichText from '@/components/RichText';

type Props = {
  className?: string;
} & BannerBlockProps;

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded', {
          'border-blue-500 bg-blue-50': style === 'info',
          'border-yellow-500 bg-yellow-50': style === 'warning',
          'border-red-500 bg-red-50': style === 'error',
          'border-green-500 bg-green-50': style === 'success',
        })}
      >
        <RichText content={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
