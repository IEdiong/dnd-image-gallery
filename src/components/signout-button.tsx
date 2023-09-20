'use client';
import { signOut } from 'next-auth/react';

export default function SignoutButton() {
  return (
    <button
      className='bg-orange-400 text-white py-2 px-4 rounded-xl block'
      onClick={() => signOut()}
    >
      sign out
    </button>
  );
}
