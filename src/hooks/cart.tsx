import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const CartContextProvider = () => useContext(CartContext)