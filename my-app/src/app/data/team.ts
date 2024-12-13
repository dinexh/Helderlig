import Director1 from '../Assets/Director-1.png';
import Director2 from '../Assets/Director-2.png';
import { StaticImageData } from 'next/image';
export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string | StaticImageData;
}

export const team: TeamMember[] = [
    {
        id: 1,
        name: "G Sujitha",
        position: "Director",
        image: Director1
    },
    {
        id: 2,
        name: "G Varun",
        position: "Director",
        image: Director2
    },
    {
        id: 3,
        name: "G Shyam Prasad",
        position: "CEO",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23e5e5e5'/%3E%3Cpath d='M10 85 Q50 95 90 85 Q90 65 50 65 Q10 65 10 85' fill='%23e5e5e5'/%3E%3C/svg%3E"
    },
];
