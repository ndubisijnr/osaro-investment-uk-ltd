
export enum ListingStatus {
  FOR_SALE = 'FOR SALE',
  FOR_RENT = 'FOR RENT',
  INVESTMENT = 'INVESTMENT',
  COMMERCIAL = 'COMMERCIAL'
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  yield?: string;
  status: ListingStatus;
  imageUrl: string;
  isFeatured?: boolean;
  description?: string;
  amenities?: string[];
  floorPlanUrl?: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface Office {
  region: string;
  city: string;
  address: string;
  phone: string;
  imageUrl: string;
}
