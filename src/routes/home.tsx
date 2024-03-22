import { Card } from '../components/card'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { ProductProps } from '../types/product-props'
import { HeroVariants, ProductVariants } from '../styles/variants'
import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { productContent, productHead, productTitle, productCard, productFilter, productFilterItem } = ProductVariants()
const { heroContent, heroHead, heroTitle, heroSubtitle, heroDescription, heroDescriptionItem, heroIcon, heroImageMobile, heroImageDesk } = HeroVariants()

const filters = ['Alcoólico', 'Com leite', 'Especial', 'Gelado', 'Tradicional']
const heros = [
  { id: 1, icon: ShoppingCartIcon, title: 'Compra simples e segura' },
  { id: 2, icon: ShoppingBagIcon, title: 'Embalagem mantém o café intacto' },
  { id: 3, icon: TruckIcon, title: 'Entrega rápida e rastreada' },
  { id: 4, icon: FireIcon, title: 'O café chega fresquinho até você' }
]

export const Home = () => {
  const products = useLoaderData() as ProductProps[]
  const [currentFilter, setCurrentFilter] = useState<string | null>(null)

  const handleFilter = (filter: string) => currentFilter !== filter ? setCurrentFilter(filter) : setCurrentFilter(null)

  useEffect(() => {
    if (currentFilter) {
      products
        .filter((product: ProductProps) => product.categories
          .find((category) => category === currentFilter))
    }
  }, [products, currentFilter])

  return (
    <>
      <div className={heroContent()}>
        <div className={heroHead()}>
          <h2 className={heroTitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={heroSubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <img className={heroImageMobile()} src='/images/coffee-delivery.png' alt='Coffee Delivery' />
          <ul className={heroDescription()}>
            {heros.map((hero) => (
              <li className={heroDescriptionItem()} key={hero.id}>
                <hero.icon className={heroIcon()} aria-hidden='true' /><span>{hero.title}</span>
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
            {filters.map((filter) => (
              <li key={filter} onClick={() => handleFilter(filter)}>
                <span className={currentFilter === filter ? productFilterItem({ active: true }) : productFilterItem()}>{filter}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={productCard()}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </>
  )
}
