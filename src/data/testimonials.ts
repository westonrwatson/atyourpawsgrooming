export type Testimonial = {
  quote: string;
  author: string;
  pet?: string;
};

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "The best grooming experience for my dog. So convenient, and they truly care!",
    author: "Maria L.",
    pet: "Golden Retriever mom",
  },
  {
    quote:
      "My cat is usually anxious, but she was so calm with At Your Paws. Highly recommend!",
    author: "James T.",
    pet: "Siamese cat dad",
  },
  {
    quote: "Super easy to book and my pup looks amazing every time!",
    author: "Sarah K.",
    pet: "Doodle owner",
  },
];

export const aboutTestimonial: Testimonial = {
  quote:
    "At Your Paws made grooming so easy! My dog is usually anxious, but the mobile service was calm and quick. Highly recommend!",
  author: "Jessica R.",
  pet: "Pet owner",
};
