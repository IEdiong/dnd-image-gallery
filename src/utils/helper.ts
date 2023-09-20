import { TImage } from '@/types';

export function filterImages(prevState: TImage[], queryString: string) {
  return prevState.filter((image) =>
    image.tags.some((tag) =>
      tag.title.toLowerCase().includes(queryString.toLowerCase())
    )
  );
}
