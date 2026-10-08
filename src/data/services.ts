export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
  tag?: string;
  traits?: string[];
};

export const homeServices: Service[] = [
  {
    title: "Dog Grooming",
    description:
      "Complete dog grooming including bath, haircut, nail trimming, and ear cleaning in the comfort of your driveway.",
    image: "/images/service-dog-grooming.jpg",
    imageAlt: "Happy dog after grooming",
    imageObjectPosition: "22% center",
  },
  {
    title: "Cat Grooming",
    description:
      "Gentle, stress-free cat grooming with specialized handling for anxious felines.",
    image: "/images/service-cat-grooming.jpg",
    imageAlt: "Cat grooming professional",
  },
  {
    title: "Nail Trimming",
    description: "Quick and safe nail trimming for dogs and cats.",
    image: "/images/service-cat-grooming.jpg",
    imageAlt: "Pet nail trimming",
    imageObjectPosition: "50% 30%",
  },
  {
    title: "De-shedding Treatments",
    description:
      "Reduce shedding and keep your pet's coat healthy with specialized de-shedding treatments.",
    image: "/images/before-1.jpg",
    imageAlt: "De-shedding treatment",
    imageObjectPosition: "center center",
  },
  {
    title: "Nail Polish & Hair Dye",
    description:
      "Add flair to your pet's look with safe nail polish and creative hair dye options.",
    image: "/images/service-specialty-addons.jpg",
    imageAlt: "Dog with colorful hair dye",
  },
  {
    title: "Personalized Care",
    description:
      "Every pet receives one-on-one attention for a calm, comfortable experience.",
    image: "/images/hero.jpg",
    imageAlt: "Personalized mobile pet grooming care",
    imageObjectPosition: "55% center",
  },
];

export const allServices: Service[] = [...homeServices];
