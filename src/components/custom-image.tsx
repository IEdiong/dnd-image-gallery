'use client';
import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomImage({
  imagePath,
  alt,
  priority = false,
}: {
  imagePath: string;
  alt: string;
  priority?: boolean;
}) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <a href='#' className='group'>
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
    </a>
  );
}
