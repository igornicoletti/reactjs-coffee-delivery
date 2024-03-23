import { ReactNode, createContext, useState } from 'react'
import { CartProps } from '../types/cart-props'

type CartContextType = {
  cart: CartProps[]
  handleAddProduct: (data: CartProps) => void
  handleRemoveProduct: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartProps[]>([])

  const handleAddProduct = ({ id, title, image, price, quantity }: CartProps) => {
    setCurrentCart((state) => state.some((item) => item.id === id)
      ? state.map((item) => item.id === id
        ? { ...item, quantity: item.quantity += quantity }
        : item)
      : [...state, { id, title, image, price, quantity: quantity }])
  }

  const handleRemoveProduct = (id: number) => {
    const currentItem = currentCart.filter((item) => item.id !== id)
    setCurrentCart(currentItem)
  }

  /*   useEffect(() => {
      if (currentCart) {
        const stateJSON = JSON.stringify(currentCart)
        localStorage.setItem('coffee-delivery:cart', stateJSON)
      }
    }, [currentCart]) */

  return (
    <CartContext.Provider value={{ cart: currentCart, handleAddProduct, handleRemoveProduct }}>
      {children}
    </CartContext.Provider>
  )
}