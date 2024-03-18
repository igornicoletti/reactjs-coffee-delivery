import { useContext } from 'react'
import { CartContext } from '../contexts/cart-provider'

export const useCartContext = () => useContext(CartContext)