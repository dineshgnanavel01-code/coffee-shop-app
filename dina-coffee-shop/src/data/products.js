/*
 * Roast & Ritual — product catalog
 * Cream & Craft editorial theme data: 12 products across 4 categories.
 * Prices in USD. Images are generated assets referenced by URL.
 */
export const PRODUCTS = [
  {
    id: 1,
    name: "Classic Cappuccino",
    category: "Coffee",
    image: "/assets/cappuccino_e1437618.jpg",
    rating: 4.8,
    reviews: 124,
    price: 4.5,
    description:
      "A velvety pour of our signature espresso crowned with silky steamed milk foam and delicate rosetta art. Roasted in small batches for a chocolatey finish.",
    popular: true,
  },
  {
    id: 2,
    name: "Double Espresso",
    category: "Coffee",
    image: "/assets/espresso_29b9adc4.jpg",
    rating: 4.9,
    reviews: 98,
    price: 3.25,
    description:
      "Two shots of our house blend pulled to golden perfection. Bold, intense, and finished with a thick crema — the purist's morning ritual.",
    popular: true,
  },
  {
    id: 3,
    name: "Iced Caramel Latte",
    category: "Coffee",
    image: "/assets/latte_b28e5442.jpg",
    rating: 4.7,
    reviews: 212,
    price: 5.5,
    description:
      "Smooth espresso over chilled milk with hand-poured caramel, layered for the eye and the palate. Served with a straw, enjoyed slowly.",
    popular: true,
  },
  {
    id: 4,
    name: "Chocolate Mocha",
    category: "Coffee",
    image: "/assets/mocha_8edd0004.jpg",
    rating: 4.6,
    reviews: 87,
    price: 5.75,
    description:
      "Dark cocoa melted into a shot of espresso, topped with whipped cream and a slow drizzle of chocolate. Dessert and coffee, in one cup.",
    popular: false,
  },
  {
    id: 5,
    name: "Iced Matcha Latte",
    category: "Tea",
    image: "/assets/matcha_db78ef39.jpg",
    rating: 4.8,
    reviews: 156,
    price: 5.25,
    description:
      "Ceremonial-grade matcha whisked with chilled oat milk. Earthy, gentle, and layered into a meditative green swirl.",
    popular: true,
  },
  {
    id: 6,
    name: "Spiced Chai Latte",
    category: "Tea",
    image: "/assets/chai_e4e8e213.jpg",
    rating: 4.7,
    reviews: 102,
    price: 4.75,
    description:
      "Black tea steeped with cardamom, cinnamon, and clove, finished with steamed milk. A warm hug in a ceramic mug.",
    popular: false,
  },
  {
    id: 7,
    name: "Cold Brew Bottle",
    category: "Cold Drinks",
    image: "/assets/coldbrew_718083f0.jpg",
    rating: 4.9,
    reviews: 74,
    price: 6.0,
    description:
      "Steeped for 18 hours and bottled for the road. Smooth, low-acid, and naturally sweet — no ice dilution, ever.",
    popular: true,
  },
  {
    id: 8,
    name: "Fresh Peach Refresher",
    category: "Cold Drinks",
    image: "/assets/latte_b28e5442.jpg",
    rating: 4.5,
    reviews: 61,
    price: 4.5,
    description:
      "House-made peach syrup shaken with iced green tea and a squeeze of lemon. Bright, fruity, and built for summer.",
    popular: false,
  },
  {
    id: 9,
    name: "Butter Croissant",
    category: "Desserts",
    image: "/assets/croissant_ea457a38.jpg",
    rating: 4.8,
    reviews: 189,
    price: 3.75,
    description:
      "Flaky, golden, and layered seventy-two times. Baked fresh each morning with French butter — best with a cappuccino.",
    popular: true,
  },
  {
    id: 10,
    name: "Classic Tiramisu",
    category: "Desserts",
    image: "/assets/tiramisu_71512094.jpg",
    rating: 4.9,
    reviews: 143,
    price: 6.5,
    description:
      "Espresso-soaked savoiardi layered with mascarpone cream and dusted with cocoa. Our barista's recipe, unchanged since day one.",
    popular: false,
  },
  {
    id: 11,
    name: "Vanilla Bean Latte",
    category: "Coffee",
    image: "/assets/cappuccino_e1437618.jpg",
    rating: 4.6,
    reviews: 55,
    price: 5.0,
    description:
      "Real vanilla bean syrup stirred into our smooth latte. Soft, fragrant, and comforting — like Sunday morning.",
    popular: false,
  },
  {
    id: 12,
    name: "Jasmine Green Tea",
    category: "Tea",
    image: "/assets/matcha_db78ef39.jpg",
    rating: 4.5,
    reviews: 48,
    price: 3.5,
    description:
      "Delicate jasmine-scented green tea leaves, steeped hot or iced. Light, floral, and endlessly sippable.",
    popular: false,
  },
];

export const SIZE_PRICES = {
  S: 0,
  M: 0.75,
  L: 1.5,
};

export const DELIVERY_FEE = 2.5;
export const SERVICE_FEE = 1.0;
