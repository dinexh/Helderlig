export interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
}

export const team: TeamMember[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23e0e0e0'/%3E%3Cpath d='M10 85 Q50 95 90 85 Q90 65 50 65 Q10 65 10 85' fill='%23e0e0e0'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "COO",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23d0d0d0'/%3E%3Cpath d='M10 85 Q50 95 90 85 Q90 65 50 65 Q10 65 10 85' fill='%23d0d0d0'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Mike Johnson",
        position: "CTO",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23e5e5e5'/%3E%3Cpath d='M10 85 Q50 95 90 85 Q90 65 50 65 Q10 65 10 85' fill='%23e5e5e5'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Sarah Williams",
        position: "CFO",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='20' fill='%23d5d5d5'/%3E%3Cpath d='M10 85 Q50 95 90 85 Q90 65 50 65 Q10 65 10 85' fill='%23d5d5d5'/%3E%3C/svg%3E"
    }
];