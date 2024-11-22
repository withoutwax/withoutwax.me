import type { StaticImageData } from 'next/image';

import { cn } from 'src/utils/cn';
import React from 'react';
import RichText from '@/components/RichText';

import type { MediaBlock as MediaBlockProps } from '@/payload-types';

import { Media } from '../../components/Media';

type Props = MediaBlockProps & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = 'default',
    staticImage,
    disableInnerContainer,
    mediaType,
    youtubeLink,
  } = props;

  if ((mediaType === 'youtube' && !youtubeLink) || (mediaType === 'imageOrVideo' && !media)) {
    return <></>;
  }

  console.log('mediaType', mediaType, 'youtubeLink', youtubeLink, 'media', media);

  return (
    <div
      className={cn(
        '',
        {
          container: position === 'default' && enableGutter,
        },
        className,
      )}
    >
      {mediaType === 'imageOrVideo' ? (
        <>
          {position === 'fullscreen' && (
            <div className="relative">{media && <Media resource={media} src={staticImage} />}</div>
          )}
          {position === 'default' && media && (
            <Media imgClassName={cn('rounded', imgClassName)} resource={media} src={staticImage} />
          )}
        </>
      ) : (
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="100%"
            src={`https://www.youtube.com/embed/${extractYouTubeId(youtubeLink)}`}
            title="YouTube video player"
            width="100%"
          />
        </div>
      )}
    </div>
  );
};

const extractYouTubeId = (url: string | null | undefined) => {
  if (!url) {
    return '';
  }
  console.log('url', url);
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/,
  );
  return match ? match[1] : '';
};
