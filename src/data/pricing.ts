export type PricingTier = {
  name: string;
  description: string;
  startingAt: string;
  includes: string[];
};

export const pricingIntro =
  "Starting rates for mobile grooming at your home. Final price depends on breed, size, coat, and temperament. We confirm your quote before we arrive.";

export const pricingTiers: PricingTier[] = [
  {
    name: "Bath & Tidy",
    description: "Refresh between full grooms.",
    startingAt: "$65",
    includes: [
      "Bath & blow dry",
      "Brush out",
      "Sanitary trim",
      "Nail trim",
      "Ear cleaning",
    ],
  },
  {
    name: "Full Groom — Small",
    description: "Dogs up to 25 lbs.",
    startingAt: "$85",
    includes: [
      "Bath & haircut",
      "Nail trim & filing",
      "Ear cleaning",
      "Bandana or bow",
    ],
  },
  {
    name: "Full Groom — Medium",
    description: "Dogs 26–50 lbs.",
    startingAt: "$95",
    includes: [
      "Bath & haircut",
      "Nail trim & filing",
      "Ear cleaning",
      "Bandana or bow",
    ],
  },
  {
    name: "Full Groom — Large",
    description: "Dogs over 50 lbs.",
    startingAt: "$110",
    includes: [
      "Bath & haircut",
      "Nail trim & filing",
      "Ear cleaning",
      "Bandana or bow",
    ],
  },
  {
    name: "Cat Groom",
    description: "Gentle handling for felines.",
    startingAt: "$90",
    includes: [
      "Bath or brush-out (as suited)",
      "Mat removal when safe",
      "Nail trim",
      "Sanitary trim",
    ],
  },
  {
    name: "Add-ons",
    description: "Enhance any visit.",
    startingAt: "from $15",
    includes: [
      "De-shedding treatment",
      "Nail polish",
      "Pet-safe creative color",
      "Teeth brushing",
      "Flea bath (when needed)",
    ],
  },
];
