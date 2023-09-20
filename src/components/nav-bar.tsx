export default function Navbar() {
  return (
    <nav className='w-full py-6'>
      <div className='sm:max-w-2xl mx-auto px-4 flex justify-between items-center'>
        <h1 className='font-bold text-2xl '>
          DnD <span className='text-orange-400'>Gallery</span>
        </h1>
        <button className='bg-orange-400 text-white py-2 px-4 rounded-xl block'>
          sign out
        </button>
      </div>
    </nav>
  );
}
