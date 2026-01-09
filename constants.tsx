
import { Drink } from './types';

export const COLORS = {
  primary: '#b7926a',    // Latte
  charcoal: '#2c2d2a',   // Dark Accent
  cream: '#fcfaf7',      // Background
  white: '#ffffff',
  softBeige: '#eae6de'
};

export const FEATURED_DRINKS: Drink[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    description: 'A delicate body with bright acidity and floral notes of jasmine and bergamot.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    tag: 'Coffee of the Month'
  },
  {
    id: '2',
    name: 'Oat Milk Latte',
    description: 'Silky smooth espresso paired with creamy oat milk and a touch of agave.',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1544787210-22bb840c4bcd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Cold Brew High',
    description: '24-hour steeped concentrate, served over clear ice for maximum clarity.',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800'
  }
];
