'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);

    const result = await signIn('credentials', {
      username: credentials.username,
      password: credentials.password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <main className='bg-orange-400/95 h-screen flex items-center justify-center'>
      <form
        className='py-10 px-10 bg-white w-5/6 max-w-md rounded-lg'
        onSubmit={handleSubmit}
      >
        <h1 className='uppercase font-semibold text-center text-lg pb-6'>
          Sign in to view the gallery
        </h1>
        <label htmlFor='username' className='sr-only'>
          Username
        </label>
        <input
          placeholder='user@example.com'
          type='text'
          id='username'
          name='username'
          className='px-6 py-2 border-gray-300 border w-full rounded-lg focus-visible:outline-orange-400 hover:cursor-pointer mt-4'
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <input
          placeholder='**********'
          type='password'
          id='password'
          name='password'
          className='px-6 py-2 border-gray-300 border w-full rounded-lg focus-visible:outline-orange-400 hover:cursor-pointer mt-4'
          value={credentials.password}
          onChange={handleChange}
        />
        <button
          className='text-center mt-7 bg-orange-400 text-white w-full py-3 hover:opacity-80'
          type='submit'
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
