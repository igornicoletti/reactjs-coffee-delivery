import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { HeaderVariants } from '../styles'
import { UseCart, UseToast } from '../hooks'

const { headercontent, headertitle, headercart, headerbutton, headericon, headerbadge, headerping, headerquantity } = HeaderVariants()

export const HeaderComponent = () => {
  const toast = UseToast()
  const { cart } = UseCart()

  const handleCurrentNav = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (cart.length === 0) {
      event.preventDefault()
      toast.info({
        title: 'Adicione um produto!',
        description: 'Dê um novo propósito ao carrinho.'
      })
    }
  }

  return (
    <div className={headercontent()}>
      <NavLink className={headertitle()} to={'/'}>
        <h1>Coffee Delivery</h1>
      </NavLink>
      <div className={headercart()}>
        <NavLink className={headerbutton()} to={'cart'} onClick={(event) => handleCurrentNav(event)}>
          <ShoppingCartIcon className={headericon()} aria-hidden={true} />
        </NavLink>
        {cart.length > 0 && (
          <div className={headerbadge()}>
            <span className={headerping()}></span>
            <span className={headerquantity()}>{cart.length}</span>
          </div>
        )}
      </div>
    </div>
  )
}