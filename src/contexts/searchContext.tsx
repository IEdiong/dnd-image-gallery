'use client';
import { TImage } from '@/types';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

// data source
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
    alt: 'a wilson basketball',
    description: 'A man holding a basketball',
    tags: [{ title: 'ball' }, { title: 'wilson' }, { title: 'basketball' }],
  },
  {
    id: 3,
    url: '/cat-01.webp',
    alt: 'cat laying down',
    description: 'A black cat laying down',
    tags: [{ title: 'cat' }, { title: 'black' }, { title: 'cute' }],
  },
  {
    id: 4,
    url: '/coke-01.webp',
    alt: 'can cocacola drink',
    description: 'A can cocacola drink with ice',
    tags: [{ title: 'cocacola' }, { title: 'cup' }, { title: 'ice' }],
  },
  {
    id: 5,
    url: '/watch-01.webp',
    alt: 'wrist watch on a rock',
    description: 'A brown wrist watch on a rock',
    tags: [{ title: 'watch' }, { title: 'rock' }, { title: 'time' }],
  },
  {
    id: 6,
    url: '/bball-02.webp',
    alt: 'spalding basketball',
    description: 'A bunch of spalding basketballs',
    tags: [
      { title: 'basketball' },
      { title: 'spalding' },
      { title: 'basketballs' },
    ],
  },
  {
    id: 7,
    url: '/cat-02.webp',
    alt: 'white cat',
    description: 'A white cat',
    tags: [
      { title: 'cat' },
      { title: 'white' },
      { title: 'cute' },
      { title: 'blue eyes' },
    ],
  },
  {
    id: 8,
    url: '/coke-02.webp',
    alt: 'bottled cocacola drink',
    description: 'A opened bottled cocacola drink',
    tags: [{ title: 'cocacola' }, { title: 'bottle' }, { title: 'drink' }],
  },
  {
    id: 9,
    url: '/macbook-02.webp',
    alt: 'a Macbook',
    description: 'A Macbook by the window',
    tags: [{ title: 'macbook' }, { title: 'workstation' }, { title: 'window' }],
  },
  {
    id: 10,
    url: '/watch-02.webp',
    alt: 'wrist watch on a stand',
    description: 'A chain wrist watch in a show glass',
    tags: [{ title: 'watch' }, { title: 'chain' }, { title: 'gold' }],
  },
  {
    id: 11,
    url: '/bball-03.webp',
    alt: 'people playing basketball',
    description: 'A basketball match',
    tags: [{ title: 'basketball' }, { title: 'court' }, { title: 'team' }],
  },
  {
    id: 12,
    url: '/cat-03.webp',
    alt: 'cat and dog',
    description: 'A Cat and a Dog',
    tags: [{ title: 'cat' }, { title: 'dog' }, { title: 'separate' }],
  },
];

export interface ISearchContext {
  items: TImage[] | null;
  setItems: Dispatch<SetStateAction<TImage[]>> | null;
}

export const SearchContext = createContext<ISearchContext>({
  items: null,
  setItems: null,
});

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState(images);
  return (
    <SearchContext.Provider value={{ items, setItems }}>
      {children}
    </SearchContext.Provider>
  );
}
