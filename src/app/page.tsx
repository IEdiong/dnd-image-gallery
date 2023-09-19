import Gallery from '@/components/gallery';
import SearchBar from '@/components/search-bar';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <SearchBar />
      <Gallery />
    </Fragment>
  );
}
