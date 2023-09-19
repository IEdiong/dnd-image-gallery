export type TImage = {
  id: number;
  description: string;
  url: string;
  alt: string;
  tags: Tag[];
};

type Tag = {
  title: string;
};
