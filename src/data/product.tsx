import { ProductProps } from '../types'
import { ProductData } from '../data/product.json'

export const ProductLoader = async (): Promise<ProductProps[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return ProductData
}