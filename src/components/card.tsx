import { ChangeEvent, useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { QuantityComponent } from './'
import { ProductProps } from '../types'
import { CardVariants } from '../styles'
import { UseCart, UseToast } from '../hooks'

const { cardaction, cardcart, cardcategory, cardcontent, carddescription, cardicon, cardimage, cardinfo, carditem, cardprice, cardquantity, cardsubtitle, cardtitle } = CardVariants()

type Props = {
  product: ProductProps
}

export const CardComponent = ({ product }: Props) => {
  const toast = UseToast()
  const { handleAddProduct } = UseCart()
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)

  const handleAddQuantity = () => setCurrentQuantity((state) => state + 1)

  const handleRemoveQuantity = () => setCurrentQuantity((state) => state - 1)

  const handleValidateQuantity = (event: ChangeEvent<HTMLInputElement>) =>
    setCurrentQuantity(Math.max(1, Math.min(99, Number(event.target.value))))

  const handleCurrentCard = () => {
    try {
      handleAddProduct({ ...product, quantity: currentQuantity })
      toast.success({
        title: `${currentQuantity} ${product.title}`,
        description: `${currentQuantity > 1 ? 'foram adicionados' : 'foi adicionado'} ao carrinho!`
      })
      setTimeout(() => setCurrentQuantity(1), 1500)
    } catch {
      toast.danger({
        title: `Oops! ${product.title}`,
        description: 'não foi adicionado ao carrinho!'
      })
    }
  }

  return (
    <li className={cardcontent()}>
      <img className={cardimage()} src={product.image} alt={product.title} />
      <ul className={cardcategory()}>
        {product.categories.map((category) => (
          <li className={carditem()} key={category}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
      <div className={carddescription()}>
        <h4 className={cardtitle()}>{product.title}</h4>
        <p className={cardsubtitle()}>{product.description}</p>
      </div>
      <div className={cardinfo()}>
        <p>R$ <span className={cardprice()}>{product.price.toFixed(2)}</span></p>
        <div className={cardaction()}>
          <div className={cardquantity()}>
            <QuantityComponent
              currentQuantity={currentQuantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
              handleValidateQuantity={handleValidateQuantity} />
          </div>
          <button className={cardcart()} onClick={handleCurrentCard} type={'button'}>
            <ShoppingCartIcon className={cardicon()} aria-hidden={true} />
          </button>
        </div>
      </div>
    </li>
  )
}