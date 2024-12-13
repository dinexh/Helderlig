import { IconType } from 'react-icons';
import { FaTree, FaWarehouse, FaShippingFast } from 'react-icons/fa';
import { GiWoodBeam } from 'react-icons/gi';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  woodTypes?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Premium Timber Wood Supply",
    description: "Specialized in sourcing and supplying high-quality timber wood varieties including Iroko, Okan, Teak, and Azobe wood. Each variety is carefully selected to meet specific industrial and construction needs.",
    icon: FaTree,
  },
  {
    id: 2,
    title: "Wood Processing & Treatment",
    description: "Professional processing and treatment of premium wood varieties ensuring optimal quality and durability for various applications.",
    icon: GiWoodBeam
  },
  {
    id: 3,
    title: "Warehousing & Storage",
    description: "State-of-the-art storage facilities ensuring proper maintenance of wood quality and characteristics before delivery.",
    icon: FaWarehouse
  },
  {
    id: 4,
    title: "Logistics & Distribution",
    description: "Efficient logistics solutions for timely delivery of timber products to your desired location.",
    icon: FaShippingFast
  },
]; 