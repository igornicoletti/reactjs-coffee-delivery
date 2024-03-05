import { useEffect, useState } from 'react'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { cardListData } from '../data/card'
import { FilterProps } from '../type/filter'
import { Filter } from '../components/filter'
import { filterListData } from '../data/filter'
import { variantsCoffee, variantsHero } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { coffee, coffeeHead, coffeeTitle, coffeeFilter, coffeeCard } = variantsCoffee()
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
    const selectedCards: CardProps[] = cardListData.filter(data => data.cardId.find(data => data === filterId))

    filterListData.filter(data => data.filterId === filterId
      ? data.selected
        ? (data.selected = false, setCards(cardListData))
        : (data.selected = true, setCards(selectedCards))
      : data.selected = false
    )
  }

  const handleSelectedCard = (id: number) => {
    const selectedCards: CardProps[] = cardListData.filter(data => data.id === id)
    console.log(selectedCards)


  }

  useEffect(() => {
    setCards(cardListData)
    setFilters(filterListData)
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
      <div className={coffee()}>
        <div className={coffeeHead()}>
          <h3 className={coffeeTitle()}>Nossos Cafés</h3>
          <div className={coffeeFilter()}>
            {filters.map(data => (
              <Filter key={data.id} data={data} handleSelectedFilter={handleSelectedFilter} />
            ))}
          </div>
        </div>
        <ul className={coffeeCard()}>
          {cards.map(data => (
            <Card key={data.id} data={data} handleSelectedCard={handleSelectedCard} />
          ))}
        </ul>
      </div>
    </>
  )
}