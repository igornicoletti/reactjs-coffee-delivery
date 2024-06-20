import { TrashIcon } from '@heroicons/react/24/outline'

import { CartProps } from '../types'
import { OrderVariants } from '../styles'
import { UseCart, UseToast } from '../hooks'
import { QuantityComponent } from './quantity'

const { orderaction, orderbetween, orderdescription, ordericon, orderimage, orderinfo, orderitem, ordertrash } = OrderVariants()

export const OrderComponent = ({ id, image, title, price, quantity }: CartProps) => {
  const toast = UseToast()
  const { handleRemoveProduct, handleIncrementProduct, handleDecrementProduct, handleValidateProduct } = UseCart()

  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  const handleRemoveCart = (id: number, title: string) => {
    handleRemoveProduct(id)
    toast.warning({
      title: `${title}`,
      description: 'foi removido do carrinho!'
    })
  }

  return (
    <li className={orderitem()}>
      <img className={orderimage()} src={image} alt={'Coffee Delivery'} />
      <div className={orderinfo()}>
        <div className={orderbetween()}>
          <p className={orderdescription()}>{title}</p>
          <p className={orderdescription()}>{currentFormat.format(price * quantity)}</p>
        </div>
        <div className={orderaction()}>
          <QuantityComponent
            currentQuantity={quantity}
            handleAddQuantity={() => handleIncrementProduct(id)}
            handleRemoveQuantity={() => handleDecrementProduct(id)}
            handleValidateQuantity={(event) => handleValidateProduct(id, event)} />
          <button className={ordertrash()} onClick={() => handleRemoveCart(id, title)} type={'button'}>
            <TrashIcon className={ordericon()} aria-hidden={true} />
          </button>
        </div>
      </div>
    </li>
  )
}