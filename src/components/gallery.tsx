import CustomImage from './custom-image';

const imagPath = 'https://source.unsplash.com/random/900x700/?gun';
const api = `https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}/photos/random?count=10`;

async function getData() {
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Gallery() {
  const data = await getData();
  console.log(data);

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
