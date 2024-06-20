import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FireIcon, FunnelIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

import { ProductProps } from '../types'
import { CardComponent } from '../components'
import { HeroVariants, ProductVariants } from '../styles'

const { productcontent, producthead, producttitle, productcard, productfilter, productaction, producticon } = ProductVariants()
const { herocontent, herohead, herotitle, herosubtitle, herodescription, heroitem, heroicon, heroimgmobile, heroimgdesk } = HeroVariants()

const filters = ['Alcoólico', 'Com leite', 'Especial', 'Gelado', 'Tradicional']
const heros = [{ id: 1, icon: ShoppingCartIcon, title: 'Compra simples e segura' }, { id: 2, icon: ShoppingBagIcon, title: 'Embalagem mantém o café intacto' }, { id: 3, icon: TruckIcon, title: 'Entrega rápida e rastreada' }, { id: 4, icon: FireIcon, title: 'O café chega fresquinho até você' }]

export const HomePage = () => {
  const product = useLoaderData() as ProductProps[]

  const [currentFilter, setCurrentFilter] = useState<string | null>(null)
  const [currentProduct, setCurrentProduct] = useState<ProductProps[]>([])

  const handleFilter = (filter: string) =>
    currentFilter !== filter ? setCurrentFilter(filter) : setCurrentFilter(null)

  useEffect(() => {
    setCurrentProduct(product)

    if (currentFilter)
      setCurrentProduct(product
        .filter((product: ProductProps) => product.categories
          .find((category) => category === currentFilter)))
  }, [product, currentFilter])

  return (
    <>
      <div className={herocontent()}>
        <div className={herohead()}>
          <h2 className={herotitle()}>Encontre o café perfeito para qualquer hora do dia</h2>
          <p className={herosubtitle()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <img className={heroimgmobile()} src={'/images/coffee-delivery.png'} alt={'Coffee Delivery'} />
          <ul className={herodescription()}>
            {heros.map((hero) => (
              <li className={heroitem()} key={hero.id}>
                <hero.icon className={heroicon()} aria-hidden={true} />
                <span>{hero.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className={heroimgdesk()} src={'/images/coffee-delivery.png'} alt={'Coffee Delivery'} />
      </div>
      <div className={productcontent()}>
        <div className={producthead()}>
          <h3 className={producttitle()}>Nossos Cafés</h3>
          <div className={productfilter()}>
            <button className={productaction()} onClick={() => setCurrentFilter(null)} type={'button'}>
              <FunnelIcon className={producticon()} />
            </button>
            {filters.map((filter) => (
              <button className={currentFilter === filter ? productaction({ active: true }) : productaction()} onClick={() => handleFilter(filter)} key={filter} type={'button'}>
                <span>{filter}</span>
              </button>
            ))}
          </div>
        </div>
        <ul className={productcard()}>
          {currentProduct.map((product) => (
            <CardComponent key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </>
  )
}
