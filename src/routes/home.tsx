import { useEffect, useState } from 'react'
import { CardList } from '../data/card'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { FilterList } from '../data/filter'
import { FilterProps } from '../type/filter'
import { Filter } from '../components/filter'
import { HeroVariants, ProductVariants } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { productContent, productHead, productTitle, productFilter, productCard } = ProductVariants()
const { heroContent, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = HeroVariants()

const heroData = [
  {
    id: 1,
    icon: ShoppingCartIcon,
    title: 'Compra simples e segura'
  },
  {
    id: 2,
    icon: ShoppingBagIcon,
    title: 'Embalagem mantém o café intacto'
  },
  {
    id: 3,
    icon: TruckIcon,
    title: 'Entrega rápida e rastreada'
  },
  {
    id: 4,
    icon: FireIcon,
    title: 'O café chega fresquinho até você'
  }
]

export const Home = () => {
  const [cardData, setCardData] = useState<CardProps[]>([])
  const [filterData, setFilterData] = useState<FilterProps[]>([])

  const handleFilter = (title: string) => {
    const currentCard: CardProps[] = CardList
      .filter((data) => data.category
        .find((item) => item === title))

    FilterList.find((item) => item.title === title
      ? item.isActive
        ? (item.isActive = false, setCardData(CardList))
        : (item.isActive = true, setCardData(currentCard))
      : item.isActive = false)
  }

  useEffect(() => {
    setCardData(CardList)
    setFilterData(FilterList)
  }, [])

  return (
    <>
      <div className={heroContent()}>
        <div className={heroHead()}>
          <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <img className={heroImageMobile()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
          <ul className={heroDescription()}>
            {heroData.map(data => (
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
          <div className={productFilter()}>
            {filterData.map(data => (
              <Filter key={data.id} data={data} handleFilter={handleFilter} />
            ))}
          </div>
        </div>
        <ul className={productCard()}>
          {cardData.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </>
  )
}