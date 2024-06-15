import { ProductProps } from '../types'

export const ProductLoader = async (): Promise<ProductProps[]> => {
  const data = await fetch('http://localhost:3333/products').then((res) => res.json())
  return data
}