export interface Review {
  id: string;
  author: {
    name: string;
    title: string;
    company: string;
    image?: string;
  };
  rating: number;
  content: string;
}

export interface ReviewsProps {
  title: string;
  reviews: Review[];
}
