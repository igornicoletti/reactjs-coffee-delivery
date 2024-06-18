import { ProductProps } from '../types'

export const ProductLoader = async (): Promise<ProductProps[]> =>
  await fetch('https://api-coffee-delivery-igornicoletti.vercel.app/products').then((res) => res.json())