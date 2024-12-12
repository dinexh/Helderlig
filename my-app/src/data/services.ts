import { IconType } from 'react-icons';
import { FaShip, FaWarehouse, FaHandshake, FaClipboardCheck } from 'react-icons/fa';

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const servicesList: Service[] = [
    {
      icon: FaShip,
      title: "International Shipping",
      description: "Reliable wood shipping services across global markets with efficient logistics management."
    },
    {
      icon: FaWarehouse,
      title: "Storage Solutions",
      description: "Climate-controlled warehousing facilities to maintain wood quality during transit and storage."
    },
    {
      icon: FaHandshake,
      title: "Trade Partnerships",
      description: "Building strong relationships with suppliers and buyers worldwide for premium wood products."
    },
    {
      icon: FaClipboardCheck,
      title: "Quality Control",
      description: "Rigorous quality inspection and certification processes for all wood products."
    }
];

export default servicesList;  