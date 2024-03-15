import { useContext } from 'react'
import { CartContext } from './cart-provider'

export const useCartContext = () => useContext(CartContext)