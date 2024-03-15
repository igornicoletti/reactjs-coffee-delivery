import { ReactNode, createContext, useEffect, useState } from 'react'

interface CartProps {
  id: number
  quantity: number
}

interface CartContextType {
  cart: CartProps[]
  handleAddItem: (id: CartProps['id'], currentQuantity: number) => void
  handleRemoveItem: (id: CartProps['id']) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartProps[]>([])

  const handleAddItem = (id: number, currentQuantity: number) => {
    const currentItem = currentCart.find((item) => item.id === id)
    currentItem
      ? currentItem.quantity += currentQuantity
      : setCurrentCart((state) => [...state, { id, quantity: currentQuantity }])
  }

  const handleRemoveItem = (id: number) => {
    const currentItem = currentCart.findIndex((item) => item.id === id)
    currentCart.splice(currentItem, 1)
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