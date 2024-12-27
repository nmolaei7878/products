import { Product } from '@/types/Product';

export async function getProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = (await res.json()) as Product;
  return product;
}
