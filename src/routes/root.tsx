import { Outlet } from 'react-router-dom'

import { RootVariants } from '../styles'
import { CartProvider } from '../contexts'
import { HeaderComponent } from '../components'

const { rootlayout, rootcontainer } = RootVariants()

export const RootPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <CartProvider>
          <HeaderComponent />
          <Outlet />
        </CartProvider>
      </div>
    </div>
  )
}