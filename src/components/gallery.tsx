'use client';
import Image from 'next/image';
import { useState } from 'react';

const imagPath = 'https://source.unsplash.com/random/900x700/?car';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Gallery() {
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {[1, 2, 3, 4, 5, 6].map((i: number) => (
          <CustomImage key={i} imagePath={imagPath} />
        ))}
      </div>
    </div>
  );
}

function CustomImage({ imagePath }: { imagePath: string }) {
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
