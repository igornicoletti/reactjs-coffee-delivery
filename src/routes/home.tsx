import { useEffect, useState } from 'react'
import { CardData } from '../data/card'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { FilterData } from '../data/filter'
import { FilterProps } from '../type/filter'
import { Filter } from '../components/filter'
import { variantsHero, variantsProduct } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { product, productHead, productTitle, productFilter, productCard } = variantsProduct()
const { hero, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = variantsHero()

const heroes = [
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
  const [cards, setCards] = useState<CardProps[]>([])
  const [filters, setFilters] = useState<FilterProps[]>([])

  const handleSelectedFilter = (filterId: string) => {
    const selectedCard: CardProps[] = CardData
      .filter(data => data.category
        .find(data => data.categoryId === filterId))

    FilterData.find((data: FilterProps) => data.filterId === filterId
      ? data.isActive
        ? (data.isActive = false, setCards(CardData))
        : (data.isActive = true, setCards(selectedCard))
      : data.isActive = false
    )
  }

  useEffect(() => {
    setCards(CardData)
    setFilters(FilterData)
  }, [])

  return (
    <>
      <div className={hero()}>
        <div className={heroHead()}>
          <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <img className={heroImageMobile()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
          <ul className={heroDescription()}>
            {heroes.map(data => (
              <li className={heroDescriptionItem()} key={data.id}>
                <data.icon className={heroIcon()} aria-hidden='true' />
                <span>{data.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className={heroImageDesk()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
      </div>
      <div className={product()}>
        <div className={productHead()}>
          <h3 className={productTitle()}>Nossos Cafés</h3>
          <div className={productFilter()}>
            {filters.map(data => (
              <Filter key={data.id} data={data} handleSelectedFilter={handleSelectedFilter} />
            ))}
          </div>
        </div>
        <ul className={productCard()}>
          {cards.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </>
  )
}