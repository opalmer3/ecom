import type { Review } from "./types";

export const mockReviews: Review[] = [
  {
    id: "1",
    author: {
      name: "Jerome Bell",
      title: "Founder",
      company: "Uranus",
      image: "/images/reviews/jerome.jpg",
    },
    rating: 5,
    content:
      "Saturn's attention to detail and creative flair made our collaboration truly enjoyable. The designs they delivered were impressive.",
  },
  {
    id: "2",
    author: {
      name: "Kathryn Murphy",
      title: "CEO",
      company: "Coca Soft",
      image: "/images/reviews/kathryn.jpg",
    },
    rating: 5,
    content:
      "Saturn is a design partner you can rely on. They grasped our brief accurately and produced designs.",
  },
  {
    id: "3",
    author: {
      name: "Albert Flores",
      title: "CEO",
      company: "Coca Soft",
      image: "/images/reviews/albert.jpg",
    },
    rating: 5,
    content:
      "Impressed doesn't cover it! Our project went from good to outstanding. This design team understands perfection.",
  },
  {
    id: "4",
    author: {
      name: "Kristin Watson",
      title: "Founder",
      company: "Neptunus",
      image: "/images/reviews/kristin.jpg",
    },
    rating: 5,
    content:
      "Working with this design team was fantastic! They nailed our vision, delivering designs that blew us away. Highly recommend!",
  },
];
