import { useState } from 'react'
import { CardProps } from '../type/card'
import { Notification } from './notification'
import { variantsCard } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { card, cardImage, cardCategory, cardCategoryItem, cardBody, cardTitle, cardSubtitle, cardFooter, cardPrice, cardAction, cardGroup, cardButton, cardQuantity, cardCart, cardIcon } = variantsCard()

type CardType = {
  data: CardProps
  handleSelectedCard: (data: CardProps) => void
}

export const Card = ({ data, handleSelectedCard }: CardType) => {
  const [notification, setNotification] = useState<boolean>(false)
  const [notificationTitle, setNotificationTitle] = useState<string | null>(null)

  const handleSelectedCardToCart = (data: CardProps) => {
    handleSelectedCard(data)
    setNotification(true)
    setNotificationTitle(data.title)
    setTimeout(() => setNotification(false), 2000)
  }

  return (
    <li className={card()}>
      <img className={cardImage()} src={data.source} alt={data.title} />
      <ul className={cardCategory()}>
        {data.category.map(data => (
          <li className={cardCategoryItem()} key={data.id}>
            <span>{data.title}</span>
          </li>
        ))}
      </ul>
      <div className={cardBody()}>
        <h4 className={cardTitle()}>{data.title}</h4>
        <p className={cardSubtitle()}>{data.subtitle}</p>
      </div>
      <div className={cardFooter()}>
        <p>R$ <span className={cardPrice()}>{data.price}</span></p>
        <div className={cardAction()}>
          <div className={cardGroup()}>
            <button className={cardButton()}>
              <MinusIcon className={cardIcon()} aria-hidden='true' />
            </button>
            <input className={cardQuantity()} defaultValue={data.quantity} type='number' name='amount' />
            <button className={cardButton()}>
              <PlusIcon className={cardIcon()} aria-hidden='true' />
            </button>
          </div>
          <button className={cardCart()} onClick={() => handleSelectedCardToCart(data)}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
      <Notification notification={notification} notificationTitle={notificationTitle} />
    </li>
  )
}