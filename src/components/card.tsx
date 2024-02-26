import { CardType } from '../type/card'
import { variantsCard } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { card, cardImage, cardHead, cardChip, cardBody, cardTitle, cardSubtitle, cardFooter, cardPrice, cardAction, cardGroup, cardButton, cardAmount, cardCart, cardIcon } = variantsCard()

type CardProps = {
  data: CardType
}

export const Card = ({ data }: CardProps) => {
  return (
    <li className={card()}>
      <img className={cardImage()} src={data.source} alt={data.alternate} />
      <ul className={cardHead()}>
        {data.specs.map((spec) => (
          <li key={spec.id}>
            <span className={cardChip()}>{spec.title}</span>
          </li>
        ))}
      </ul>
      <div className={cardBody()}>
        <h4 className={cardTitle()}>{data.title}</h4>
        <p className={cardSubtitle()}>{data.description}</p>
      </div>
      <div className={cardFooter()}>
        <p>R$ <span className={cardPrice()}>{data.price}</span></p>
        <div className={cardAction()}>
          <div className={cardGroup()}>
            <button className={cardButton()}>
              <MinusIcon className={cardIcon()} aria-hidden='true' />
            </button>
            <p className={cardAmount()}>{data.amount}</p>
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