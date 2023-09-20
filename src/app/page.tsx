'use client';
import Gallery from '@/components/gallery';
import SearchBar from '@/components/search-bar';
import { Fragment, useState } from 'react';
import json from '@/data/images.json';
import { TImage } from '@/types';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect('/signin?callbackUrl=/');
    // },
  });
  const [images, setImages] = useState(json);

  const handleChange = (queryString: string) => {
    // console.log('initial images', images);

    const newImages = filterImages(json, queryString);
    setImages(newImages);
    // console.log('new images', newImages);
  };

  return (
    <Fragment>
      <SearchBar setImages={handleChange} />
      <Gallery images={images} setImages={setImages} />
    </Fragment>
  );
}

function filterImages(prevState: TImage[], queryString: string) {
  return prevState.filter((image) =>
    image.tags.some((tag) =>
      tag.title.toLowerCase().includes(queryString.toLowerCase())
    )
  );
}
