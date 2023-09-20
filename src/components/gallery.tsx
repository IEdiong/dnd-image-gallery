'use client';
import { TImage } from '@/types';
import CustomImage from './custom-image';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useCallback, useState } from 'react';

type Props = {
  images: TImage[];
  setImages: any;
};

export default function Gallery({ images: items, setImages: setItems }: Props) {
  // const [items, setItems] = useState(images);
  const [activeId, setActiveId] = useState<number | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  // handle Drag Start
  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as number);
    console.log('dragStart', event);
  }, []);

  // handle Drag End
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        setItems((items: TImage[]) => {
          const oldIndex = items.findIndex((items) => items.id === active.id);
          const newIndex = items.findIndex((items) => items.id === over!.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }

      setActiveId(null);
    },
    [setItems]
  );

  // handle Drag Cancel
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <main className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((image: TImage) => (
              <SortableImage key={image.id} image={image} />
            ))}
          </SortableContext>
          <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
            {activeId ? (
              <CustomImage
                imagePath={images[activeId - 1].url}
                alt={''}
                tag={''}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </main>
  );
}

function SortableImage({ image }: { image: TImage }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    transition: transition || undefined,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <CustomImage
        imagePath={image.url}
        alt={image.alt}
        priority={image.id < 5 ? true : false}
        tag={image.tags[0].title}
      />
    </div>
  );
}

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
