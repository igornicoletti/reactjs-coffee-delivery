import { Card } from '../components/card'
import { useEffect, useState } from 'react'
import { heroListData } from '../data/hero'
import { cardListData } from '../data/card'
import { CardListProps } from '../type/card'
import { Filter } from '../components/filter'
import { filterListData } from '../data/filter'
import { FilterListProps } from '../type/filter'
import { variantsCoffee, variantsHero } from '../styles/variants'

const { coffee, coffeeHead, coffeeTitle, coffeeFilter, coffeeCard } = variantsCoffee()
const { hero, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = variantsHero()

export const Home = () => {
  const [cards, setCards] = useState<CardListProps[]>([])
  const [filters, setFilters] = useState<FilterListProps[]>([])

  const handleSelectedFilter = (filterId: string) => {
    const selectedFilter: CardListProps[] = cardListData.filter(data => data.cardId.find(data => data === filterId))
    setCards(selectedFilter)
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
            {heroListData.map(data => (
              <li className={heroDescriptionItem()} key={data.id}>
                <data.icon className={heroIcon()} aria-hidden='true' />
                <span>{data.text}</span>
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
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </>
  )
}