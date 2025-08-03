export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  status: 'Available Today' | 'Fully Booked' | 'On Leave';
  availability: string[];
}
