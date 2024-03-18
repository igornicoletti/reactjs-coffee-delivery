import { ReactNode, createContext, useEffect, useState } from 'react'
import { CardProps } from '../type/card'

interface CartProps {
  id: number
  title: string
  source: string
  quantity: number
  price: number
}

interface CartContextType {
  cart: CartProps[]
  handleAddItem: (data: CardProps, currentQuantity: number) => void
  handleRemoveItem: (id: CartProps['id']) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartProps[]>([])

  const handleAddItem = ({ id, title, source, price }: CardProps, currentQuantity: number) => {
    const currentItem = currentCart.find((item) => item.id === id)

    currentItem
      ? currentItem.quantity += currentQuantity
      : setCurrentCart((state) => [...state, { id, title, source, price, quantity: currentQuantity }])
  }

  const handleRemoveItem = (id: number) => {
    const currentItem = currentCart.filter((item) => item.id !== id)
    setCurrentCart(currentItem)
  }

  useEffect(() => {
    currentCart && localStorage.setItem('reactjs-coffee-delivery:cart', JSON.stringify(currentCart))
  }, [currentCart])

  return (
    <CartContext.Provider value={{
      handleAddItem,
      handleRemoveItem,
      cart: currentCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}