import { Doctor } from './types';

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    specialization: 'Cardiologist',
    image: 'https://via.placeholder.com/100',
    status: 'Available Today',
    availability: ['2025-08-03 10:00', '2025-08-03 15:00']
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    specialization: 'Dermatologist',
    image: 'https://via.placeholder.com/100',
    status: 'Fully Booked',
    availability: []
  }
];
