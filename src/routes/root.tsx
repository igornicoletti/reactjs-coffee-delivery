
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { RootVariants } from '../styles/variants'
import { CartProvider } from '../contexts/cart-provider'

const { rootLayout, rootContainer } = RootVariants()

export const Root = () => {
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