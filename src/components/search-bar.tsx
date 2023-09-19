export default function SearchBar({
  setImages,
}: {
  setImages: (e: any) => void;
}) {
  return (
    <header className='py-6'>
      <div className='sm:max-w-xl mx-auto xs:max-w-xs px-4'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          id='search'
          placeholder='search by tag e.g. ball'
          className='px-6 py-2 border-gray-300 border w-full rounded-full focus-visible:outline-orange-400 hover:cursor-pointer'
          onChange={(e) => setImages(e.target.value)}
        />
      </div>
    </header>
  );
}
