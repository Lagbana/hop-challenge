import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  body_html: string;

  @Field()
  published_at: string;

  @Field()
  vendor: string;

  @Field()
  product_type: string;

  @Field(() => [String])
  tags: string[];

  @Field(() => [Variant])
  variants: Variant[];

  /**
   * *Unused API fields
   */
  handle: string;
  created_at: string;
  updated_at: string;
  images: Image[];
  options: Option[];
}

@ObjectType()
export class FeaturedImage {
  @Field()
  id: number;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  src: string;

  /**
   * *Unused API fields
   */
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: string;
  variant_ids: number[];
}

@ObjectType()
export class Variant {
  @Field()
  sku: string;

  @Field()
  featured_image: FeaturedImage;

  @Field()
  price: string;

  @Field()
  grams: number;

  /**
   * *Unused API fields
   */
  id: number;
  title: string;
  option1: string;
  option2: null;
  option3: null;
  requires_shipping: boolean;
  taxable: boolean;
  available: true;
  compare_at_price: null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

@ObjectType()
export class Image {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  variant_ids: number[];
  src: string;
  width: number;
  height: number;
}

@ObjectType()
export class Option {
  name: string;
  position: number;
  values: string[];
}
