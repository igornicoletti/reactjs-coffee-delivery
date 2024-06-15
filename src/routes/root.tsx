import { Outlet } from 'react-router-dom'

import { RootVariants } from '../styles'
import { HeaderComponent } from '../components'
import { CartContextProvider } from '../contexts'

const { rootlayout, rootcontainer } = RootVariants()

export const RootPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <CartContextProvider>
          <HeaderComponent />
          <Outlet />
        </CartContextProvider>
      </div>
    </div>
  )
}