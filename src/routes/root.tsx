import { Outlet } from 'react-router-dom'

import { CartProvider } from '../contexts/cart'
import { RootVariants } from '../styles/variants'
import { HeaderComponent } from '../components/header'

const { rootLayout, rootContainer } = RootVariants()

export const RootPage = () => {
  return (
    <div className={rootLayout()}>
      <div className={rootContainer()}>
        <CartProvider>
          <HeaderComponent />
          <Outlet />
        </CartProvider>
      </div>
    </div>
  )
}