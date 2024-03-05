import { NavLink } from 'react-router-dom'
import { variantsHeader } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const { header, headerTitle, headerCart, headerButton, headerIcon, headerBadge, headerPing, headerQuantity } = variantsHeader()

export const Header = () => {
  const [amount, setAmount] = useState<number>(1)
  console.log(setAmount)

  return (
    <div className={header()}>
      <NavLink className={({ isActive }) => isActive ? headerTitle({ active: true }) : headerTitle()} to='/'>
        <h1>Coffee Delivery</h1>
      </NavLink>
      <div className={headerCart()}>
        <NavLink className={({ isActive }) => isActive ? headerButton({ active: true }) : headerButton()} to='/checkout'>
          <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        </NavLink>
        {amount >= 1 &&
          <div className={headerBadge()}>
            <span className={headerPing()}></span>
            <span className={headerQuantity()}>{amount}</span>
          </div>
        }
      </div>
    </div>
  )
}