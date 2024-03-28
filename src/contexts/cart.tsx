import { CartProps } from '../types/cart'
import { useNavigate } from 'react-router-dom'
import { ReactNode, createContext, useEffect, useState } from 'react'

type CartContextType = {
  cart: CartProps[]
  handleSubmitProduct: () => void
  handleAddProduct: (data: CartProps) => void
  handleRemoveProduct: (data: CartProps['id']) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const [currentCart, setCurrentCart] = useState<CartProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem('coffee-delivery:cart')
    if (storedStateAsJSON)
      return JSON.parse(storedStateAsJSON)

    return []
  })

  const handleAddProduct = ({ id, title, image, price, quantity }: CartProps) => {
    setCurrentCart((state) => state.some((item) => item.id === id)
      ? state.map((item) => item.id === id
        ? { ...item, quantity: item.quantity += quantity }
        : item)
      : [...state, { id, title, image, price, quantity: quantity }])
  }

  const handleRemoveProduct = (id: CartProps['id']) => {
    const newCurrentCart = currentCart.filter((item) => item.id !== id)
    setCurrentCart(newCurrentCart)
  }

  const handleSubmitProduct = () => {
    setCurrentCart([])
    navigate('/')
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(currentCart)
    localStorage.setItem('coffee-delivery:cart', stateJSON)
  }, [currentCart])

  return (
    <CartContext.Provider value={{ cart: currentCart, handleAddProduct, handleRemoveProduct, handleSubmitProduct }}>
      {children}
    </CartContext.Provider>
  )
}