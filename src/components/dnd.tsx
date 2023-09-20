'use client';
import { filterImages } from '@/utils/helper';
import { Fragment, useState } from 'react';
import json from '@/data/images.json';
import SearchBar from './search-bar';
import Gallery from './gallery';

export default function DndComponent() {
  const [images, setImages] = useState(json);

  const handleChange = (queryString: string) => {
    const newImages = filterImages(json, queryString);
    setImages(newImages);
  };

  return (
    <Fragment>
      <SearchBar setImages={handleChange} />
      <Gallery images={images} setImages={setImages} />
    </Fragment>
  );
}
