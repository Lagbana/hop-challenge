import { Product } from './products.model'
export interface FeaturedImage {
  id?: number;
  product_id?: number;
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
}

export interface Variant {
  sku: string;
  featured_image: FeaturedImage;
  price: string;
  grams: number;
}

export interface ApiResonse {
  error: string[];
  data: Product[];
} 