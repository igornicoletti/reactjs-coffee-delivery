import { Notify } from './notify'
import { Quantity } from './quantity'
import { ChangeEvent, useState } from 'react'
import { ProductProps } from '../types/product'
import { CardVariants } from '../styles/variants'
import { CartContextProvider } from '../hooks/cart'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { cardContent, cardImage, cardCategory, cardItem, cardDescription, cardTitle, cardSubtitle, cardInfo, cardPrice, cardAction, cardQuantity, cardCart, cardIcon } = CardVariants()

type Props = {
  product: ProductProps
}

export const Card = ({ product }: Props) => {
  const { handleAddProduct } = CartContextProvider()

  const [currentTitle, setCurrentTitle] = useState<string>('')
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)
  const [currentNotify, setCurrentNotify] = useState<boolean>(false)

  const handleAddQuantity = () => setCurrentQuantity((state) => state + 1)
  const handleRemoveQuantity = () => setCurrentQuantity((state) => state - 1)
  const handleValidateQuantity = (e: ChangeEvent<HTMLInputElement>) => setCurrentQuantity(Math.max(1, Math.min(99, Number(e.target.value))))

  const handleCurrentCard = () => {
    setCurrentNotify(true)
    setCurrentTitle(product.title)
    handleAddProduct({ id: product.id, title: product.title, image: product.image, price: product.price, quantity: currentQuantity })
    setTimeout(() => { setCurrentNotify(false), setCurrentQuantity(1) }, 1500)
  }

  return (
    <li className={cardContent()}>
      <img className={cardImage()} src={product.image} alt={product.title} />
      <ul className={cardCategory()}>
        {product.categories.map((category) => (
          <li className={cardItem()} key={category}>
            <span>{category}</span>
          </li>
        ))}
      </ul>
      <div className={cardDescription()}>
        <h4 className={cardTitle()}>{product.title}</h4>
        <p className={cardSubtitle()}>{product.description}</p>
      </div>
      <div className={cardInfo()}>
        <p>R$ <span className={cardPrice()}>{product.price.toFixed(2)}</span></p>
        <div className={cardAction()}>
          <div className={cardQuantity()}>
            <Quantity
              currentQuantity={currentQuantity}
              handleAddQuantity={handleAddQuantity}
              handleRemoveQuantity={handleRemoveQuantity}
              handleValidateQuantity={handleValidateQuantity} />
          </div>
          <button className={cardCart()} onClick={handleCurrentCard} disabled={currentNotify}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
      <Notify currentNotify={currentNotify} currentTitle={currentTitle} />
    </li>
  )
}