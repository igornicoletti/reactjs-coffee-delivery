import { ChangeEvent, useState } from 'react'
import { Notify } from './notify'
import { CardProps } from '../type/card'
import { CardVariants } from '../styles/variants'
import { useCartContext } from '../contexts/cart'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { cardContent, cardImage, cardCategory, cardCategoryItem, cardDescription, cardTitle, cardSubtitle, cardInfo, cardPrice, cardAction, cardGroup, cardButton, cardQuantity, cardCart, cardIcon } = CardVariants()

type CardType = {
  data: CardProps
}

export const Card = ({ data }: CardType) => {
  const { handleAddItem } = useCartContext()
  const [currentQuantity, setCurrentQuantity] = useState<number>(1)
  const [currentNotify, setCurrentNotify] = useState<boolean>(false)

  const handleAddQuantity = () =>
    currentQuantity < 99 && setCurrentQuantity((state) => state + 1)

  const handleRemoveQuantity = () =>
    currentQuantity > 1 && setCurrentQuantity((state) => state - 1)

  const handleValidateQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const currentItem = Math.max(1, Math.min(99, Number(event.target.value)))
    setCurrentQuantity(currentItem)
  }

  const handleCurrentCard = () => {
    handleAddItem(data.id, currentQuantity)
    setCurrentNotify(true)
    setTimeout(() => {
      setCurrentQuantity(1)
      setCurrentNotify(false)
    }, 2000)
  }

  return (
    <li className={cardContent()}>
      <img className={cardImage()} src={data.source} alt={data.title} />
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
          <div className={cardGroup()}>
            <button className={cardButton()} onClick={handleRemoveQuantity} disabled={currentNotify || currentQuantity === 1}>
              <MinusIcon className={cardIcon()} aria-hidden='true' />
            </button>
            <input className={cardQuantity()} onChange={handleValidateQuantity} value={currentQuantity} min={1} max={99} type='number' />
            <button className={cardButton()} onClick={handleAddQuantity} disabled={currentNotify || currentQuantity === 99}>
              <PlusIcon className={cardIcon()} aria-hidden='true' />
            </button>
          </div>
          <button className={cardCart()} onClick={handleCurrentCard} disabled={currentNotify}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
      <Notify currentNotify={currentNotify} />
    </li>
  )
}