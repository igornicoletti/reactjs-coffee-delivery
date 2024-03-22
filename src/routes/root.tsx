import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { RootVariants } from '../styles/variants'
import { products } from '../api/product-data.json'
import { CartProvider } from '../contexts/cart-provider'

const { rootLayout, rootContainer } = RootVariants()

export const Root = () => {
  useEffect(() => {
    const stateJSON = JSON.stringify(products)
    localStorage.setItem('coffee-delivery:products', stateJSON)
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