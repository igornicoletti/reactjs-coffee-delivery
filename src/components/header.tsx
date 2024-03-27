import { useCart } from '../hooks/cart'
import { NavLink } from 'react-router-dom'
import { HeaderVariants } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { headerContent, headerTitle, headerCart, headerButton, headerIcon, headerBadge, headerPing, headerQuantity } = HeaderVariants()

export const Header = () => {
  const { cart } = useCart()

  return (
    <div className={headerContent()}>
      <NavLink className={headerTitle()} to={`/`}>
        <h1>Coffee Delivery</h1>
      </NavLink>
      <div className={headerCart()}>
        <NavLink className={({ isActive }) => isActive ? headerButton({ active: true }) : headerButton()} to={`cart`} onClick={(e) => cart.length === 0 && e.preventDefault()}>
          <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        </NavLink>
        {cart.length !== 0 &&
          <div className={headerBadge()}>
            <span className={headerPing()}></span>
            <span className={headerQuantity()}>{cart.length}</span>
          </div>
        }
      </div>
    </div>
  )
}