import { Link } from 'react-router-dom'
import { variantsNavbar } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { navbar, navBadge, navCart, navIcon, navTtitle } = variantsNavbar()

export const Navbar = () => {
  return (
    <div className={navbar()}>
      <Link to='/'>
        <h1 className={navTtitle()}>Coffee Delivery</h1>
      </Link>
      <Link to='/checkout' className={navCart()}>
        <ShoppingCartIcon className={navIcon()} aria-hidden='true' />
        <span className={navBadge()}>1</span>
      </Link>
    </div>
  )
}