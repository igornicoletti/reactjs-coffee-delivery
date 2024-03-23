import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const useCart = () => useContext(CartContext)