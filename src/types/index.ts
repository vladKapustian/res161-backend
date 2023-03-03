type ImageSize = "small" | "medium" | "original" | "big";

interface IImage {
  height: number;
  width: number;
  uri: string;
}

export interface IProductPublicList {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  images: Record<ImageSize, IImage>;
}

export interface IProductFull {
  id: number;
  name: string;
  category: {
    id: number;
    name: number;
    slug: string;
  };
  images: {
    size: {
      height: number;
      width: number;
      uri: string;
    };
  };
  description: string;
  attributes: IAttribute[];
  seo?: {
    keywords?: string;
    description?: string;
  };
}

export interface IAttribute {
  id: number;
  name: string;
  value_type: string | boolean;
  value: (string | number | boolean)[];
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  seo?: {
    keywords?: string;
    description?: string;
  };
  images: Record<ImageSize, IImage>;
}
