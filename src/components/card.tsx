import { ChangeEvent, useState } from 'react'
import { CardProps } from '../type/card'
import { Notification } from './notification'
import { CardVariants } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { cardContent, cardImage, cardCategory, cardCategoryItem, cardDescription, cardTitle, cardSubtitle, cardInfo, cardPrice, cardAction, cardGroup, cardButton, cardQuantity, cardCart, cardIcon } = CardVariants()

type CardType = {
  data: CardProps
  handleSelectedCard: (data: CardProps, quantity: number) => void
}

export const Card = ({ data, handleSelectedCard }: CardType) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [notification, setNotification] = useState<boolean>(false)
  const [notificationTitle, setNotificationTitle] = useState<string | null>(null)

  const handleIncrementQuantity = () => {
    setQuantity(data => data + 1)
  }

  const handleDecrementQuantity = () => {
    quantity > 1 ? setQuantity(data => data - 1) : setQuantity(1)
  }

  const handleValidatedQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const validatedQuantity = Math.max(1, Math.min(99, Number(e.target.value)))
    setQuantity(validatedQuantity)
  }

  const handleSelectedCardToCart = (data: CardProps, quantity: number) => {
    handleSelectedCard(data, quantity)
    setNotification(true)
    setNotificationTitle(data.title)
    setTimeout(() => { setQuantity(1), setNotification(false) }, 2000)
  }

  return (
    <li className={cardContent()}>
      <img className={cardImage()} src={data.source} alt={data.title} />
      <ul className={cardCategory()}>
        {data.category.map(data => (
          <li className={cardCategoryItem()} key={data.id}>
            <span>{data.title}</span>
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
          <div className={cardGroup()}>
            <button className={cardButton()} disabled={notification || quantity === 1} onClick={handleDecrementQuantity}>
              <MinusIcon className={cardIcon()} aria-hidden='true' />
            </button>
            <input className={cardQuantity()} onChange={handleValidatedQuantity} value={quantity} min={1} max={99} type='number' />
            <button className={cardButton()} disabled={notification || quantity === 99} onClick={handleIncrementQuantity}>
              <PlusIcon className={cardIcon()} aria-hidden='true' />
            </button>
          </div>
          <button className={cardCart()} disabled={notification} onClick={() => handleSelectedCardToCart(data, quantity)}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
      <Notification notification={notification} notificationTitle={notificationTitle} />
    </li>
  )
}