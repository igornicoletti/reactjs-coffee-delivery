import { CardList } from '../data/card'
import { CardProps } from '../type/card'
import { Card } from '../components/card'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { HeroVariants, ProductVariants } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { productContent, productHead, productTitle, productFilter, productCard, productCategory } = ProductVariants()
const { heroContent, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = HeroVariants()

const filterData = ['Alcoólico', 'Com leite', 'Especial', 'Gelado', 'Tradicional']

const heroData = [
  { id: 1, icon: ShoppingCartIcon, title: 'Compra simples e segura' },
  { id: 2, icon: ShoppingBagIcon, title: 'Embalagem mantém o café intacto' },
  { id: 3, icon: TruckIcon, title: 'Entrega rápida e rastreada' },
  { id: 4, icon: FireIcon, title: 'O café chega fresquinho até você' }
]

export const Home = () => {
  const [cardData, setCardData] = useState<CardProps[]>([])
  const [currentFilter, setCurrentFilter] = useState<string[]>([])

  useEffect(() => setCardData(CardList), [])

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
          <RadioGroup className={productFilter()} onChange={setCurrentFilter} value={currentFilter}>
            {filterData.map((data) => (
              <RadioGroup.Option key={data} value={data}>
                <li className={productCategory()}>{data}</li>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
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