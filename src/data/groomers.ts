export type Groomer = {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
};

export const groomers: Groomer[] = [
  {
    name: "Grace Watson",
    title: "Lead Mobile Groomer",
    image: "/images/service-dog-grooming.jpg",
    imageAlt: "Grace Watson, lead mobile groomer",
  },
  {
    name: "Jordan Kim",
    title: "Cat & Senior Pet Specialist",
    image: "/images/service-cat-grooming.jpg",
    imageAlt: "Jordan Kim, cat and senior pet specialist",
  },
];
