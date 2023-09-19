'use client';
import Gallery from '@/components/gallery';
import SearchBar from '@/components/search-bar';
import { Fragment, useState } from 'react';
import json from '@/data/images.json';

export default function Home() {
  const [images, setImages] = useState(json);
  return (
    <Fragment>
      <SearchBar />
      <Gallery images={images} setImages={setImages} />
    </Fragment>
  );
}
