import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Product } from '../../product.json'
import { Header } from '../components/header'
import { CartProvider } from '../contexts/cart'
import { rootVariants } from '../styles/variants'

const { rootLayout, rootContainer } = rootVariants()

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