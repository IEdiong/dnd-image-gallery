import SignoutButton from './signout-button';

export default function Navbar() {
  return (
    <nav className='w-full py-6'>
      <div className='sm:max-w-2xl mx-auto px-4 flex justify-between items-center'>
        <h1 className='font-bold text-2xl '>
          DnD <span className='text-orange-400'>Gallery</span>
        </h1>
        <SignoutButton />
      </div>
    </nav>
  );
}
