'use client';
import Image from 'next/image';
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomImage({ imagePath }: { imagePath: string }) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <a href='#' className='group'>
      <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
        <Image
          alt=''
          src={imagePath}
          fill
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
