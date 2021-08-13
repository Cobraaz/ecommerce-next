export interface ProductImage {
  url: string;
  alt?: string;
}
export interface Productprice {
  value: number;
  currencyCode: "USD" | "EUR" | string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: Productprice;
}
