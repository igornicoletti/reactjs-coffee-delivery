import { ReactNode, createContext, useEffect, useState } from 'react'

interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  handleAddItem: (cartItem: CartItem) => void
  handleRemoveItem: (cartId: CartItem['id']) => void
  handleAddQuantity: (cartId: CartItem['id']) => void
  handleRemoveQuantity: (cartId: CartItem['id']) => void
  handleValidateQuantity: (cartId: CartItem['id']) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartItem[]>([])

  const handleAddItem = () => { }
  const handleRemoveItem = () => { }
  const handleAddQuantity = () => { }
  const handleRemoveQuantity = () => { }
  const handleValidateQuantity = () => { }
  console.log(setCurrentCart)

  useEffect(() => {
    currentCart && localStorage.setItem('reactjs-coffee-delivery:cart', JSON.stringify(currentCart))
  }, [currentCart])

  return (
    <CartContext.Provider value={{
      cart: currentCart,
      handleAddItem,
      handleRemoveItem,
      handleAddQuantity,
      handleRemoveQuantity,
      handleValidateQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}