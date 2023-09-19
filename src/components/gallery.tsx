import CustomImage from './custom-image';

const api = `https://api.unsplash.com/photos/random?count=12&query=workspace&client_id=${process.env.ACCESS_KEY}`;

async function getData() {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

type Image = {
  id: string;
  urls: {
    full: string;
    regular: string;
  };
  alt_description: string;
};

export default async function Gallery() {
  const images = await getData();
  // console.log(images);

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {images.map((image: Image, idx: number) => (
          <CustomImage
            key={image.id}
            imagePath={image.urls.regular}
            alt={image.alt_description}
            priority={idx < 5 ? true : false}
            tag={idx}
          />
        ))}
      </div>
    </div>
  );
}
