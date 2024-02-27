import { Link } from 'react-router-dom'
import { variantsHeader } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { header, headerTitle, headerCart, headerButton, headerIcon, headerBadge, headerPing, headerQuantity } = variantsHeader()

export const Header = () => {
  return (
    <div className={header()}>
      <Link className={headerTitle()} to='/'>
        <h1>Coffee Delivery</h1>
      </Link>
      <div className={headerCart()}>
        <Link className={headerButton()} to='/checkout'>
          <ShoppingCartIcon className={headerIcon()} aria-hidden='true' />
        </Link>
        <div className={headerBadge()}>
          <span className={headerPing()}></span>
          <span className={headerQuantity()}>1</span>

        </div>

      </div>
    </div>
  )
}