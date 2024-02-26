import { Link } from 'react-router-dom'
import { variantsHeader } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { header, headerTitle, headerCart, headerIcon, headerBadge } = variantsHeader()

export const Header = () => {
  return (
    <div className={header()}>
      <Link className={headerTitle()} to='/'>
        <h1>Coffee Delivery</h1>
      </Link>
      <Link className={headerCart()} to='/checkout'>
        <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        <span className={headerBadge()}>1</span>
      </Link>
    </div>
  )
}