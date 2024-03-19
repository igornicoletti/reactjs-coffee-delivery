import { useContext } from 'react'
import { CartContext } from '../contexts/cart-provider'

export const useCart = () => useContext(CartContext)