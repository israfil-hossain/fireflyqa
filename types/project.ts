
export interface Project {
    _id: string;
    title: string;
    description: string;
    href: string;
    thumbnail: {
      asset: {
        id: string;
        url: string;
      };
    };
    images: {
      asset: {
        _id: string;
        url: string;
      };
    }[];
    stack: string[];
    slug: string;
    content: string;
  }