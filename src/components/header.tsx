import { NavLink } from 'react-router-dom'
import { variantsHeader } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { header, headerTitle, headerCart, headerButton, headerIcon, headerBadge, headerPing, headerQuantity } = variantsHeader()

export const Header = () => {
  return (
    <div className={header()}>
      <NavLink className={({ isActive }) => isActive ? headerTitle({ active: true }) : headerTitle()} to='/'>
        <h1>Coffee Delivery</h1>
      </NavLink>
      <div className={headerCart()}>
        <NavLink className={({ isActive }) => isActive ? headerButton({ active: true }) : headerButton()} to='/checkout'>
          <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        </NavLink>
        <div className={headerBadge()}>
          <span className={headerPing()}></span>
          <span className={headerQuantity()}>2</span>
        </div>
      </div>
    </div>
  )
}