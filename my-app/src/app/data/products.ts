import oak from '../Assets/Wood_1.jpg';
import teak from '../Assets/about.jpg';

export const products = [
  {
    id: 1,
    name: 'Premium Oak',
    shortDesc: 'Classic European Oak known for its strength and beauty',
    description: 'Our Premium Oak is carefully sourced from sustainable European forests. Known for its distinctive grain pattern and exceptional durability, this timber is perfect for high-end applications.',
    image: oak, // Fixed: Directly assign the imported image path
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
    image: teak, // Fixed: Directly assign the imported image path
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
  // Add more products...
];
