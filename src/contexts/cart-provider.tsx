import { ReactNode, createContext, useEffect, useState } from 'react'

type CartProps = {
  id: number
  quantity: number
}

type CartContextType = {
  cart: CartProps[]
  handleAddProduct: ({ id, quantity }: CartProps) => void
  handleRemoveProduct: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currentCart, setCurrentCart] = useState<CartProps[]>([])

  const handleAddProduct = ({ id, quantity }: CartProps) => {
    setCurrentCart((state) => state.some((item) => item.id === id)
      ? state.map((item) => item.id === id
        ? { ...item, quantity: item.quantity += quantity }
        : item)
      : [...state, { id, quantity: quantity }])
  }

  const handleRemoveProduct = (id: number) => {
    const currentItem = currentCart.filter((item) => item.id !== id)
    setCurrentCart(currentItem)
  }

  useEffect(() => {
    console.log(currentCart)

    if (currentCart) {
      const stateJSON = JSON.stringify(currentCart)
      localStorage.setItem('reactjs-coffee-delivery:cart', stateJSON)
    }
  }, [currentCart])


  return (
    <CartContext.Provider value={{ cart: currentCart, handleAddProduct, handleRemoveProduct }}>
      {children}
    </CartContext.Provider>
  )
}