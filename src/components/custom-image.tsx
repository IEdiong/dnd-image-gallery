'use client';
import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  imagePath: string;
  alt: string;
  priority?: boolean;
  tag: string;
};

export default function CustomImage({
  imagePath,
  alt,
  priority = false,
  tag,
}: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <div className='group relative cursor-pointer'>
      <div className='aspect-w-7 aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 relative'>
        <Image
          alt={alt}
          src={imagePath}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority={priority}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <span className='absolute bottom-4 left-4 bg-gray-700 text-white px-4 h-8 flex items-center justify-center rounded-full font-semibold text-sm'>
        {tag}
      </span>
    </div>
  );
}
