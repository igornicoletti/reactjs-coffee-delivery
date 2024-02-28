import { CardType } from '../type/card'
import { variantsCard } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { card, cardImage, cardCategory, cardCategoryItem, cardBody, cardTitle, cardSubtitle, cardFooter, cardPrice, cardAction, cardGroup, cardButton, cardQuantity, cardCart, cardIcon } = variantsCard()

type CardProps = {
  data: CardType
}

export const Card = ({ data }: CardProps) => {
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
            <input className={cardQuantity()} type='number' value='0' name='' id='' />
            <button className={cardButton()}>
              <PlusIcon className={cardIcon()} aria-hidden='true' />
            </button>
          </div>
          <button className={cardCart()}>
            <ShoppingCartIcon className={cardIcon()} aria-hidden='true' />
          </button>
        </div>
      </div>
    </li>
  )
}