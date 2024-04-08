import { useNavigate } from 'react-router-dom'
import { ChangeEvent, ReactNode, createContext, useEffect, useState } from 'react'

import { CartProps } from '../types/cart'

type CartContextType = {
  cart: CartProps[]
  handleSubmitProduct: () => void
  handleAddProduct: (data: CartProps) => void
  handleRemoveProduct: (data: CartProps['id']) => void
  handleIncrementProduct: (data: CartProps['id']) => void
  handleDecrementProduct: (data: CartProps['id']) => void
  handleValidateProduct: (data: CartProps['id'], event: ChangeEvent<HTMLInputElement>) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const [currentCart, setCurrentCart] = useState<CartProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart')
    if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
    return []
  })

  const handleAddProduct = ({ id, title, image, price, quantity }: CartProps) => {
    setCurrentCart((state) =>
      state.some((item) => item.id === id)
        ? state.map((item) => item.id === id
          ? { ...item, quantity: item.quantity += quantity }
          : item)
        : [...state, { id, title, image, price, quantity: quantity }])
  }

  const handleRemoveProduct = (id: CartProps['id']) => {
    setCurrentCart((state) =>
      state.filter((item) => item.id !== id))
  }

  const handleIncrementProduct = (id: CartProps['id']) => {
    setCurrentCart((state) =>
      state.map((item) => item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item))
  }

  const handleDecrementProduct = (id: CartProps['id']) => {
    setCurrentCart((state) =>
      state.map((item) => item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item))
  }

  const handleValidateProduct = (id: CartProps['id'], event: ChangeEvent<HTMLInputElement>) => {
    setCurrentCart((state) =>
      state.map((item) => item.id === id
        ? { ...item, quantity: Math.max(1, Math.min(99, Number(event.target.value))) }
        : item))
  }

  const handleSubmitProduct = () => {
    setCurrentCart([])
    navigate('/')
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(currentCart)
    localStorage.setItem('@coffee-delivery:cart', stateJSON)
  }, [currentCart])

  return (
    <CartContext.Provider value={{
      cart: currentCart,
      handleAddProduct, handleRemoveProduct, handleSubmitProduct,
      handleIncrementProduct, handleDecrementProduct, handleValidateProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}