import oak from '../Assets/Wood_1.jpg';
import teakAbout from '../Assets/about.jpg';
import iroko from '../Assets/iroko.jpeg';
import teak from '../Assets/Teak.jpeg';
import azobe from '../Assets/Azobe.webp';

export const products = [
  {
    id: 1,
    name: 'Premium Oak',
    shortDesc: 'Classic European Oak known for its strength and beauty',
    description: 'Our Premium Oak is carefully sourced from sustainable European forests. Known for its distinctive grain pattern and exceptional durability, this timber is perfect for high-end applications.',
    image: oak,
    origin: 'European Union',
    hardness: 85,
    durability: 90,
    applications: [
      'High-end furniture',
      'Flooring',
      'Architectural millwork',
      'Cabinetry'
    ]
  },
  {
    id: 2,
    name: 'Teak',
    shortDesc: 'Premium grade teak with excellent weather resistance',
    description: 'Sustainably harvested teak with superior weather resistance and natural oils that make it perfect for outdoor applications.',
    image: teakAbout,
    origin: 'Southeast Asia',
    hardness: 80,
    durability: 95,
    applications: [
      'Outdoor furniture',
      'Marine applications',
      'Decking',
      'High-end exterior doors'
    ]
  },
  {
    id: 3,
    name: "Iroko Wood",
    shortDesc: "Premium African hardwood with excellent durability",
    description: "Iroko is a large hardwood tree from the west coast of tropical Africa. Known for its excellent durability and stability, Iroko wood is often used as a substitute for teak. It features a golden-brown color that darkens with age and offers remarkable resistance to decay and insect attack.",
    image: iroko,
    origin: "West Africa",
    hardness: 85,
    durability: 90,
    applications: [
      "Exterior construction",
      "Marine construction",
      "Furniture making",
      "Flooring",
      "Veneer"
    ]
  },
  {
    id: 4,
    name: "Okan Wood",
    shortDesc: "Dense African hardwood with superior strength",
    description: "Okan is an extremely dense and durable hardwood from Africa. Its exceptional strength and natural resistance to weathering make it ideal for heavy-duty applications. The wood typically displays a warm reddish-brown color with an interlocked grain pattern.",
    image: oak,
    origin: "Central and West Africa",
    hardness: 95,
    durability: 95,
    applications: [
      "Heavy construction",
      "Marine applications",
      "Industrial flooring",
      "Railway sleepers",
      "Bridge construction"
    ]
  },
  {
    id: 5,
    name: "Teak Wood",
    shortDesc: "Premium quality wood with natural oil content",
    description: "Teak is one of the most valuable and sought-after hardwoods in the world. Known for its high natural oil content, exceptional durability, and resistance to weather, rot, and pests. Its golden-brown color and fine grain make it aesthetically pleasing for both indoor and outdoor applications.",
    image: teak,
    origin: "Southeast Asia",
    hardness: 80,
    durability: 100,
    applications: [
      "Luxury furniture",
      "Boat building",
      "Outdoor furniture",
      "High-end flooring",
      "Decorative veneers"
    ]
  },
  {
    id: 6,
    name: "Azobe Wood",
    shortDesc: "Ultra-durable African hardwood",
    description: "Azobe is an extremely dense and durable hardwood from Africa. Its exceptional strength and natural resistance to decay make it perfect for heavy-duty exterior applications. The wood has a dark reddish-brown color and is known for its remarkable durability in marine environments.",
    image: azobe,
    origin: "West and Central Africa",
    hardness: 98,
    durability: 98,
    applications: [
      "Marine construction",
      "Heavy construction",
      "Harbor installations",
      "Railway sleepers",
      "Industrial flooring"
    ]
  }
  // Add more products...
];
