import { CardList } from '../data/card'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { useEffect, useState } from 'react'
import { HeroVariants, ProductVariants } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { productContent, productHead, productTitle, productCard, productFilter, productFilterItem } = ProductVariants()
const { heroContent, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = HeroVariants()

const heroData = [
  { id: 1, icon: ShoppingCartIcon, title: 'Compra simples e segura' },
  { id: 2, icon: ShoppingBagIcon, title: 'Embalagem mantém o café intacto' },
  { id: 3, icon: TruckIcon, title: 'Entrega rápida e rastreada' },
  { id: 4, icon: FireIcon, title: 'O café chega fresquinho até você' }
]

const filterData = [
  { id: 1, title: 'Alcoólico', checked: false },
  { id: 2, title: 'Com leite', checked: false },
  { id: 3, title: 'Especial', checked: false },
  { id: 4, title: 'Gelado', checked: false },
  { id: 5, title: 'Tradicional', checked: false }
]

export const Home = () => {
  const [cardData, setCardData] = useState<CardProps[]>([])

  const handleSelected = (currentFilter: string) => {
    const newCardList = CardList.filter((data) => data.category.find((item) => item === currentFilter))

    filterData.filter((data) => data.title === currentFilter
      ? data.checked
        ? (data.checked = false, setCardData(CardList))
        : (data.checked = true, setCardData(newCardList))
      : data.checked = false
    )
  }

  return (
    <>
      <div className={heroContent()}>
        <div className={heroHead()}>
          <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <img className={heroImageMobile()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
          <ul className={heroDescription()}>
            {heroData.map((data) => (
              <li className={heroDescriptionItem()} key={data.id}>
                <data.icon className={heroIcon()} aria-hidden='true' />
                <span>{data.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className={heroImageDesk()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
      </div>
      <div className={productContent()}>
        <div className={productHead()}>
          <h3 className={productTitle()}>Nossos Cafés</h3>
          <ul className={productFilter()}>
            {filterData.map((data) => (
              <li key={data.id} onClick={() => handleSelected(data.title)}>
                <span className={data.checked ? productFilterItem({ active: true }) : productFilterItem()}>
                  {data.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={productCard()}>
          {cardData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </>
  )
}
