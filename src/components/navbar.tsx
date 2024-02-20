import { Link } from 'react-router-dom'
import { variantsNavbar } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { navbar, logo, action, cart } = variantsNavbar()

export const Navbar = () => {
  return (
    <div className={navbar()}>
      <h1 className={logo()}>Coffee Delivery</h1>
      <Link to='/checkout' className={action()}>
        <ShoppingCartIcon className={cart()} />
      </Link>
    </div>
  )
}