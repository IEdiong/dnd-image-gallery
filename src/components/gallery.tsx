import { TImage } from '@/types';
import CustomImage from './custom-image';

// const api = `https://api.unsplash.com/photos/random?count=15&query=coke&client_id=${process.env.ACCESS_KEY}`;

// async function getData() {
//   const res = await fetch(api);

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

// type Image = {
//   id: string;
//   urls: {
//     full: string;
//     regular: string;
//   };
//   alt_description: string;
// };

export default function Gallery() {
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {images.map((image: TImage) => (
          <CustomImage
            key={image.id}
            imagePath={image.url}
            alt={image.alt}
            priority={image.id < 5 ? true : false}
            tag={image.tags[0].title}
          />
        ))}
      </div>
    </div>
  );
}

const images: TImage[] = [
  {
    id: 1,
    url: '/macbook-01.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 2,
    url: '/bball-01.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 3,
    url: '/cat-01.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 4,
    url: '/coke-01.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 5,
    url: '/watch-01.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 6,
    url: '/bball-02.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 7,
    url: '/cat-02.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 8,
    url: '/coke-02.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 9,
    url: '/macbook-02.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 10,
    url: '/watch-02.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 11,
    url: '/bball-03.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
  {
    id: 12,
    url: '/cat-03.webp',
    alt: 'workstation with Macbook',
    description: 'A workstation with Macbook',
    tags: [
      { title: 'macbook' },
      { title: 'workstation' },
      { title: 'monitor' },
    ],
  },
];
