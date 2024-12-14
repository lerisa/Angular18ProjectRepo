import { CarModel } from '../models/car-model';

export const carModels: CarModel[] = [
  {
    name: 'Ferrari Roma',
    parts: ['Engine', 'Brakes', 'Headlights', 'Seats'],
    prices: [200, 100, 15000, 10000],
  },
  {
    name: 'Ferrari SF90 Stradale',
    parts: ['Engine', 'Mirrors', 'Lights', 'Air Conditioning'],
    prices: [600, 5000, 7000, 15000],
  },
  {
    name: 'Ferrari F8 Tributo',
    parts: ['Bumper', 'Engine', 'Brakes', 'Windows'],
    prices: [1500, 5000, 800, 300],
  },
];
