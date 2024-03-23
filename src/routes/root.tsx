import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { CartProvider } from '../contexts/cart'
import { RootVariants } from '../styles/variants'

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