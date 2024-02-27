import { heroData } from '../data/hero'
import { cardData } from '../data/card'
import { Card } from '../components/card'
import { filterData } from '../data/filter'
import { Filter } from '../components/filter'
import { variantsCoffee, variantsHero } from '../styles/variants'

const { coffee, coffeeHead, coffeeTitle, coffeeFilter, coffeeCard } = variantsCoffee()
const { hero, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImage } = variantsHero()

export function Home() {
  return (
    <>
      <div className={hero()}>
        <div className={heroHead()}>
          <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ul className={heroDescription()}>
            {heroData.map(data => (
              <li className={heroDescriptionItem()} key={data.id}>
                <data.icon className={heroIcon()} aria-hidden='true' />
                <span>{data.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className={heroImage()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
      </div>
      <div className={coffee()}>
        <div className={coffeeHead()}>
          <h3 className={coffeeTitle()}>Nossos Cafés</h3>
          <div className={coffeeFilter()}>
            {filterData.map(data => (
              <Filter key={data.id} data={data} />
            ))}
          </div>
        </div>
        <ul className={coffeeCard()}>
          {cardData.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </>
  )
}