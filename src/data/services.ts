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
      "Bath, haircut, nail trim, and ear cleaning in your driveway.",
    image: "/images/service-dog-grooming.jpg",
    imageAlt: "Happy dog after grooming",
    imageObjectPosition: "22% center",
  },
  {
    title: "Cat Grooming",
    description: "Gentle, stress-free grooming for anxious felines.",
    image: "/images/service-cat-grooming.jpg",
    imageAlt: "Cat grooming professional",
  },
  {
    title: "Specialty Add-ons",
    description:
      "Pet-safe nail polish and creative hair dye for a fun pop of color.",
    image: "/images/service-specialty-addons.jpg",
    imageAlt: "Dog with colorful hair dye",
  },
];

export const allServices: Service[] = [
  ...homeServices,
  {
    title: "Nail Trimming",
    description: "Quick and safe nail trimming for dogs and cats.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=520&fit=crop",
    imageAlt: "Pet nail trimming",
  },
  {
    title: "De-shedding Treatments",
    description:
      "Reduce shedding and keep your pet's coat healthy with specialized treatments.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=520&fit=crop",
    imageAlt: "De-shedding treatment",
  },
];
