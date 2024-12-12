import { 
  GiWoodPile, 
  GiTreeBranch, 
  GiWoodBeam,
  GiWarAxe,
  GiForestCamp 
} from 'react-icons/gi';
import { 
  FaWarehouse, 
  FaShip, 
  FaIndustry 
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Timber Sourcing',
    description: 'Premium quality timber sourced from sustainable forests worldwide, meeting international standards and certifications.',
    icon: GiWoodPile
  },
  {
    id: 2,
    title: 'Global Logistics',
    description: 'End-to-end shipping solutions with real-time tracking and efficient customs clearance services.',
    icon: FaShip
  },
  {
    id: 3,
    title: 'Custom Processing',
    description: 'Precision cutting and processing services tailored to your specific requirements and industry standards.',
    icon: GiWarAxe
  },
  {
    id: 4,
    title: 'Warehousing',
    description: 'Climate-controlled storage facilities ensuring your timber maintains its quality and characteristics.',
    icon: FaWarehouse
  },
]; 