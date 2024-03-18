import { ReactNode, createContext, useEffect, useState } from 'react'

type CartProps = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

interface CartContextType {
  cart: CartProps[]
  handleAddItem: (data: CartProps) => void
  handleRemoveItem: (data: CartProps) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartProps[]>([])

  const handleAddItem = (data: CartProps) => {
    const currentItem = currentCart.find((item) => item.id === data.id)
    console.log(currentItem);

    currentItem
      ? currentItem.quantity += data.quantity
      : setCurrentCart((state) => [...state, data])
  }

  const handleRemoveItem = (data: CartProps) => {
    const currentItem = currentCart.filter((item) => item.id !== data.id)
    setCurrentCart(currentItem)
  }

  useEffect(() => {
    if (currentCart) {
      const stateJSON = JSON.stringify(currentCart)
      localStorage.setItem('reactjs-coffee-delivery:cart', stateJSON)
    }
  }, [currentCart])

  return (
    <CartContext.Provider value={{
      handleAddItem,
      handleRemoveItem,
      cart: currentCart
    }}>
      {children}
    </CartContext.Provider>
  )
}