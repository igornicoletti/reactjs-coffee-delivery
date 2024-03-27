import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Product } from '../api/product.json'
import { CartProvider } from '../contexts/cart'
import { RootVariants } from '../styles/variants'

const { rootLayout, rootContainer } = RootVariants()

export const Root = () => {
  useEffect(() => {
    if (Product) {
      const stateJSON = JSON.stringify(Product)
      localStorage.setItem('coffee-delivery:product', stateJSON)
    }
  }, [])

  return (
    <div className={rootLayout()}>
      <div className={rootContainer()}>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </div>
    </div>
  )
}