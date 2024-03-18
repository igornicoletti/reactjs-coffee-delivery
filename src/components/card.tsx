import { ChangeEvent, useState } from 'react'
import { Notify } from './notify'
import { Quantity } from './quantity'
import { CardProps } from '../type/card'
import { useCartContext } from '../hooks/cart'
import { CardVariants } from '../styles/variants'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const { cardContent, cardImage, cardCategory, cardCategoryItem, cardDescription, cardTitle, cardSubtitle, cardInfo, cardPrice, cardAction, cardCart, cardIcon } = CardVariants()

type CardType = {
  data: CardProps
}

export const Card = ({ data }: CardType) => {
  const { handleAddItem } = useCartContext()
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)
  const [currentNotify, setCurrentNotify] = useState<boolean>(false)
  const [currentNotifyTitle, setCurrentNotifyTitle] = useState<string>('')

  const handleAddQuantity = () =>
    currentQuantity < 99 && setCurrentQuantity((state) => state + 1)

  const handleRemoveQuantity = () =>
    currentQuantity > 1 && setCurrentQuantity((state) => state - 1)

  const handleValidateQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const currentItem = Math.max(1, Math.min(99, Number(event.target.value)))
    setCurrentQuantity(currentItem)
  }

  const handleCurrentCard = () => {
    handleAddItem({ id: data.id, title: data.title, image: data.image, price: data.price, quantity: currentQuantity })
    setCurrentNotify(true)
    setCurrentNotifyTitle(data.title)
    setTimeout(() => {
      setCurrentQuantity(1)
      setCurrentNotify(false)
    }, 1500)
  }

  return (
    <li className={cardContent()}>
      <img className={cardImage()} src={data.image} alt={data.title} />
      <ul className={cardCategory()}>
        {data.category.map((iem) => (
          <li className={cardCategoryItem()} key={iem}>
            <span>{iem}</span>
          </li>
        ))}
      </ul>
      <div className={cardDescription()}>
        <h4 className={cardTitle()}>{data.title}</h4>
        <p className={cardSubtitle()}>{data.subtitle}</p>
      </div>
      <div className={cardInfo()}>
        <p>R$ <span className={cardPrice()}>
          {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span></p>
        <div className={cardAction()}>
          <Quantity
            currentQuantity={currentQuantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleValidateQuantity={handleValidateQuantity} />
          <button className={cardCart()} onClick={handleCurrentCard} disabled={currentNotify}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
      <Notify currentNotify={currentNotify} currentNotifyTitle={currentNotifyTitle} />
    </li>
  )
}