import { useEffect, useState } from 'react'
import { CartProps } from '../type/cart'
import { CardData } from '../data/card'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { FilterData } from '../data/filter'
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
  const [carts, setCarts] = useState<CartProps[]>([])
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

  const handleSelectedCard = ({ id, title, source, price }: CardProps, quantity: number) => {
    setCarts((state: CartProps[]) => state.some(item => item.id === id)
      ? state.map(item => item.id === id
        ? { ...item, quantity: (item.quantity + quantity), price: price * (item.quantity + quantity) }
        : item)
      : [...state, { id, title, source, quantity, price: (price * quantity) }]
    )
    console.log(carts)
  }

  useEffect(() => {
    setCards(CardData)
    setFilters(FilterData)
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
            {filters.map(data => (
              <Filter key={data.id} data={data} handleSelectedFilter={handleSelectedFilter} />
            ))}
          </div>
        </div>
        <ul className={productCard()}>
          {cards.map(data => (
            <Card key={data.id} data={data} handleSelectedCard={handleSelectedCard} />
          ))}
        </ul>
      </div>
    </>
  )
}