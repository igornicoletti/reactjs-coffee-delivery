import { ProductProps } from '../types/product'
import { ProductData } from '../data/product.json'

export const ProductLoader = async (): Promise<ProductProps[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800))
  return ProductData
}