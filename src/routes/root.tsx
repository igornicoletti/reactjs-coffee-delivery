
import { Navbar } from '../components/navbar'
import { filters, products, specifications } from '../data/json'
import { variantsBase, variantsCoffee, variantsHero } from '../styles/variants'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()
const { hero, heroHead, heroTitle, heroSubtitle, heroSpec, heroSpecItem, heroIcon, heroText, heroImg } = variantsHero()
const { coffee, cofHead, cofTitle, cofFilter, cofFilterItem, cofCard, cofCardItem, cofImg, cofSpec, cofSpecItem, cofCtt, cofLegend, cofDescript, cofGuide, cofPrice, cofResources, cofBox, cofAction, cofAmount, cofCart, cofIcon } = variantsCoffee()

export function Root() {
  return (
    <div className={base()}>
      <div className={container()}>
        <Navbar />
        <div className={hero()}>
          <div className={heroHead()}>
            <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
            <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <ul className={heroSpec()}>
              {specifications.map(specification => (
                <li className={heroSpecItem()} key={specification.id}>
                  <specification.icon className={heroIcon()} aria-hidden='true' />
                  <p className={heroText()}>{specification.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <img className={heroImg()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
        </div>
        <div className={coffee()}>
          <div className={cofHead()}>
            <h3 className={cofTitle()}>Nossos Cafés</h3>
            <ul className={cofFilter()}>
              {filters.map(filter => (
                <li key={filter.id}>
                  <button className={cofFilterItem()}>
                    <span>{filter.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ul className={cofCard()}>
            {products.map(product => (
              <li className={cofCardItem()} key={product.id}>
                <img className={cofImg()} src={product.source} alt={product.alternate} />
                <ul className={cofSpec()}>
                  {product.specs.map((spec) => (
                    <li key={spec.id}>
                      <span className={cofSpecItem()}>{spec.title}</span>
                    </li>
                  ))}
                </ul>
                <div className={cofCtt()}>
                  <h4 className={cofLegend()}>{product.title}</h4>
                  <p className={cofDescript()}>{product.description}</p>
                </div>
                <div className={cofGuide()}>
                  <p>R$ <span className={cofPrice()}>{product.price}</span></p>
                  <div className={cofResources()}>
                    <div className={cofBox()}>
                      <button className={cofAction()}>
                        <MinusIcon className={cofIcon()} aria-hidden='true' />
                      </button>
                      <p className={cofAmount()}>{product.amount}</p>
                      <button className={cofAction()}>
                        <PlusIcon className={cofIcon()} aria-hidden='true' />
                      </button>
                    </div>
                    <button className={cofCart()}>
                      <ShoppingCartIcon className={cofIcon()} aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}