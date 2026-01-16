
import { Property, ListingStatus, Milestone, Office } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Royal Kensington Suite',
    location: 'Kensington, London',
    price: '£1,250,000',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    status: ListingStatus.FOR_SALE,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterpiece of contemporary design situated in the heart of Kensington. This exquisite suite offers floor-to-ceiling windows with panoramic views of Hyde Park, bespoke marble finishes, and a state-of-the-art smart home integration system.',
    amenities: ['24/7 Concierge', 'Private Gym', 'Underground Parking', 'Climate Control', 'Wine Cellar'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Deansgate Square Luxury',
    location: 'Deansgate, Manchester',
    price: '£450,000',
    beds: 1,
    baths: 1,
    yield: '6.5%',
    status: ListingStatus.INVESTMENT,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Setting a new standard for urban living, this luxury apartment in Deansgate Square offers unmatched amenities including the largest private residents-only leisure club in the UK. Perfectly positioned for strong rental demand.',
    amenities: ['Swimming Pool', 'Sauna & Steam Room', 'Business Lounge', 'Roof Terrace', 'Private Cinema'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Chelsea Harbour Townhouse',
    location: 'Chelsea, London',
    price: '£3,500 pcm',
    beds: 3,
    baths: 3,
    status: ListingStatus.FOR_RENT,
    imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant four-story townhouse located within a secure gated development. Featuring a private garden, multiple balconies, and a spacious open-plan kitchen perfect for entertaining. Recently renovated to the highest specifications.',
    amenities: ['Gated Security', 'Private Garden', 'Guest Suite', 'Balcony', 'EV Charging'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Skyline Penthouse',
    location: 'Canary Wharf, London',
    price: '£2,100,000',
    beds: 3,
    baths: 3.5,
    sqft: '2,400',
    status: ListingStatus.FOR_SALE,
    imageUrl: 'https://images.unsplash.com/photo-1600607687937-657c91835334?auto=format&fit=crop&q=80&w=1200',
    description: 'This duplex penthouse represents the pinnacle of Canary Wharf living. Spanning the top two floors, it features a 500 sq ft wrap-around terrace and double-height ceilings in the main living area. Pure luxury above the clouds.',
    amenities: ['Wrap-around Terrace', 'Direct Lift Access', 'High-speed Fiber', 'Smart Lighting', 'Yoga Studio'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    title: 'The Edgbaston Collection',
    location: 'Edgbaston, Birmingham',
    price: '£320,000',
    beds: 2,
    baths: 2,
    yield: '7%',
    status: ListingStatus.INVESTMENT,
    imageUrl: 'https://images.unsplash.com/photo-1580587767513-39988cc1882c?auto=format&fit=crop&q=80&w=1200',
    description: 'A boutique development of just twelve luxury apartments in the prestigious Edgbaston area. Boasting heritage features blended with contemporary interiors, this is an ideal portfolio addition for the discerning investor.',
    amenities: ['Period Features', 'Landscaped Grounds', 'Secured Entry', 'Cycle Storage', 'Energy Efficient'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    title: 'Prime City Office Floor',
    location: 'The City, London',
    price: '£5,500 pcm',
    sqft: '1,500',
    status: ListingStatus.COMMERCIAL,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Flexible Grade A office space in the heart of the financial district. Open-plan layout with dedicated breakout zones and boardroom. High-spec technical infrastructure suitable for fintech or law firms.',
    amenities: ['High-speed Lift', 'Shower Facilities', 'Boardroom Access', 'CCTV', 'Manned Reception'],
    floorPlanUrl: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: 2013,
    title: 'Foundation',
    description: 'Osaro Investment established its London headquarters, focusing initially on residential renovations in emerging boroughs.'
  },
  {
    year: 2016,
    title: 'Portfolio Expansion',
    description: 'Reached £10M in managed assets and expanded operations to Manchester and Birmingham markets.'
  },
  {
    year: 2019,
    title: 'Global Reach',
    description: 'Launched the International Investor Program, partnering with firms in New York and Toronto.'
  },
  {
    year: 2023,
    title: 'Digital Transformation',
    description: 'Introduced our proprietary analytics platform for real-time portfolio tracking for global clients.'
  }
];

export const OFFICES: Office[] = [
  {
    region: 'Europe',
    city: 'London',
    address: '123 Canary Wharf, London, E14 5AB',
    phone: '+44 (0) 20 7123 4567',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    region: 'North America',
    city: 'New York',
    address: 'Rockefeller Center, Manhattan, NY 10112',
    phone: '+1 212 555 0199',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800'
  },
  {
    region: 'North America',
    city: 'Toronto',
    address: 'Bay Street, Financial District, Toronto, ON',
    phone: '+1 416 555 0122',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800'
  }
];
