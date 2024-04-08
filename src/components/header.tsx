import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { NotifyComponent } from './notify'
import { HeaderVariants } from '../styles/variants'
import { CartContextProvider } from '../hooks/cart'

const { headerContent, headerTitle, headerCart, headerButton, headerIcon, headerBadge, headerPing, headerQuantity } = HeaderVariants()

export const HeaderComponent = () => {
  const { cart } = CartContextProvider()
  const [currentNotify, setCurrentNotify] = useState<boolean>(false)

  const handleCurrentNav = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    setCurrentNotify(true)
    setTimeout(() => { setCurrentNotify(false) }, 2500)
  }

  return (
    <div className={headerContent()}>
      <NavLink className={headerTitle()} to={'/'}>
        <h1>Coffee Delivery</h1>
      </NavLink>
      <div className={headerCart()}>
        <NavLink className={headerButton()} to={'cart'} onClick={(event) => cart.length === 0 && handleCurrentNav(event)}>
          <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        </NavLink>
        {cart.length > 0 && (
          <div className={headerBadge()}>
            <span className={headerPing()}></span>
            <span className={headerQuantity()}>{cart.length}</span>
          </div>
        )}
      </div>
      <NotifyComponent currentNotify={currentNotify} />
    </div>
  )
}