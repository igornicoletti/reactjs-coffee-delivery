
import { Navbar } from '../components/navbar'
import { filters, products, specifications } from '../data/json'
import { variantsBase, variantsCoffee, variantsHero } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()
const { hero, heroBigger, heroHeading, heroIcon, heroLayout, heroMinor, heroSpec, heroSpecs, heroSubtitle, heroTitle } = variantsHero()
const { coffee, cofAction, cofAmount, cofBtn, cofCard, cofCards, cofCart, cofController, cofCup, cofDescription, cofFilter, cofFilters, cofIcon, cofInfo, cofLayout, cofMain, cofName, cofPrice, cofRank, cofRanks, cofTitle } = variantsCoffee()

export function Root() {

  return (
    <div className={base()}>
      <div className={container()}>
        <Navbar />

        <div className={hero()}>
          <div className={heroLayout()}>
            <div className={heroHeading()}>
              <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
              <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <img src='/images/coffee-delivery.png' alt='Coffee Delivery' className={heroMinor()} />
            <ul className={heroSpecs()}>
              {specifications.map(specification => (
                <li className={heroSpec()} key={specification.id}>
                  <specification.icon className={heroIcon()} aria-hidden='true' />
                  <p>{specification.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <img src='/images/coffee-delivery.png' alt='Coffee Delivery' className={heroBigger()} />
        </div>

        <div className={coffee()}>
          <div className={cofLayout()}>
            <h3 className={cofTitle()}>Nossos Cafés</h3>
            <ul className={cofFilters()}>
              {filters.map(filter => (
                <li key={filter.id}>
                  <button className={cofFilter()}>
                    <span>{filter.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={cofCards()}>
            {products.map(product => (
              <div className={cofCard()} key={product.id}>
                <img src={product.src} alt={product.alt} className={cofCup()} />
                <ul className={cofRanks()}>
                  {product.ranks.map((rank) => (
                    <li key={rank.id}>
                      <span className={cofRank()}>{rank.title}</span>
                    </li>
                  ))}
                </ul>
                <div className={cofMain()}>
                  <p className={cofName()}>{product.title}</p>
                  <p className={cofDescription()}>{product.description}</p>
                </div>
                <div className={cofInfo()}>
                  <p>R$ <span className={cofPrice()}>{product.price}</span></p>
                  <div className={cofAction()}>
                    <div className={cofController()}>
                      <button className={cofBtn()}>
                        <MinusIcon className={cofIcon()} aria-hidden='true' />
                      </button>
                      <p className={cofAmount()}>{product.amount}</p>
                      <button className={cofBtn()}>
                        <PlusIcon className={cofIcon()} aria-hidden='true' />
                      </button>
                    </div>
                    <button className={cofCart()}>
                      <ShoppingCartIcon className={cofIcon()} aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}