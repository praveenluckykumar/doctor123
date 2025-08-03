import { Doctor } from '../types';


export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Alice mith',
    specialization: 'Cardiologist',
    image: 'https://www.apollospectra.com/backend/web/doctor-images/1692943480DR.%20Mohammad%20Naseeruddin.jpg',
    status: 'Available Today',
    availability: ['Monday 10:00 AM', 'Wednesday 2:00 PM'],
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    specialization: 'Dermatologist',
    image: 'https://tse1.mm.bing.net/th/id/OIP.WDfcZHiDfY_bsf8BFFqvsgHaHz?pid=Api&P=0&h=220',
    status: 'Fully Booked',
    availability: [],
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    status: 'On Leave',
    availability: [],
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    specialization: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    status: 'Available Today',
    availability: ['Tuesday 9:00 AM', 'Friday 1:00 PM'],
  },
  {
    id: 5,
    name: 'Dr. Sarah Lee',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    status: 'Available Today',
    availability: ['Thursday 11:00 AM', 'Saturday 3:00 PM'],
  }
];
