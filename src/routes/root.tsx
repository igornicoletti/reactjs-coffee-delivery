import { Link } from 'react-router-dom'
import leite from '/images/coffee-leite.png'
import latte from '/images/coffee-latte.png'
import arabe from '/images/coffee-arabe.png'
import gelado from '/images/coffee-gelado.png'
import quente from '/images/coffee-quente.png'
import cubano from '/images/coffee-cubano.png'
import cremoso from '/images/coffee-cremoso.png'
import delivery from '/images/coffee-delivery.png'
import havaiano from '/images/coffee-havaiano.png'
import irlandes from '/images/coffee-irlandes.png'
import americano from '/images/coffee-americano.png'
import capuccino from '/images/coffee-capuccino.png'
import macchiato from '/images/coffee-macchiato.png'
import mocaccino from '/images/coffee-mocaccino.png'
import tradicional from '/images/coffee-tradicional.png'
import { variantsBanner, variantsCoffee, variantsHeader } from '../styles/variants'
import { FireIcon, MinusIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { base, container, header, title, checkout, shopping } = variantsHeader()
const { banner, layout, info, day, time, list, item, circle, icon, web, mobile } = variantsBanner()
const { coffee, ours, wrapper, card, cup, map, rank, description, expresso, subtitle, box, price, amount, controller, btn, cart, shopp } = variantsCoffee()

const coffees = [
  {
    image: tradicional,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    price: '9.90',
  },
  {
    image: americano,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
  },
  {
    image: cremoso,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
  },
  {
    image: gelado,
    categories: [
      { title: 'Tradicional' },
      { title: 'Gelado' },
    ],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9.90',
  },
  {
    image: leite,
    categories: [
      { title: 'Tradicional' },
      { title: 'com leite' },
    ],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
  },
  {
    image: latte,
    categories: [
      { title: 'Tradicional' },
      { title: 'com leite' },
    ],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
  },
  {
    image: capuccino,
    categories: [
      { title: 'Tradicional' },
      { title: 'com leite' },
    ],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
  },
  {
    image: macchiato,
    categories: [
      { title: 'Tradicional' },
      { title: 'com leite' },
    ],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
  },
  {
    image: mocaccino,
    categories: [
      { title: 'Tradicional' },
      { title: 'com leite' },
    ],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
  },
  {
    image: quente,
    categories: [
      { title: 'Especial' },
      { title: 'com leite' },
    ],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
  },
  {
    image: cubano,
    categories: [
      { title: 'Especial' },
      { title: 'Alcoólico' },
      { title: 'Gelado' },
    ],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
  },
  {
    image: havaiano,
    categories: [
      { title: 'Especial' },
    ],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.90',
  },
  {
    image: arabe,
    categories: [
      { title: 'Especial' },
    ],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
  },
  {
    image: irlandes,
    categories: [
      { title: 'Especial' },
      { title: 'Alcoólico' },
    ],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9.90',
  },
]

export function Root() {
  return (
    <div className={base()}>
      <div className={container()}>
        <div className={header()}>
          <h1 className={title()}>Coffee Delivery</h1>
          <Link to='/checkout' className={checkout()}>
            <ShoppingCartIcon className={shopping()} />
          </Link>
        </div>
        <div className={banner()}>
          <div className={layout()}>
            <div className={info()}>
              <h2 className={day()}>Encontre o café perfeito para qualquer hora do dia</h2>
              <p className={time()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <img src={delivery} alt={delivery} className={mobile()} />
            <ul className={list()}>
              <li className={item()}>
                <div className={circle()}>
                  <ShoppingCartIcon className={icon()} />
                </div>
                <p>Compra simples e segura</p>
              </li>
              <li className={item()}>
                <div className={circle()}>
                  <ShoppingBagIcon className={icon()} />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </li>
              <li className={item()}>
                <div className={circle()}>
                  <TruckIcon className={icon()} />
                </div>
                <p>Entrega rápida e rastreada</p>
              </li>
              <li className={item()}>
                <div className={circle()}>
                  <FireIcon className={icon()} />
                </div>
                <p>O café chega fresquinho até você</p>
              </li>
            </ul>
          </div>
          <img src={delivery} alt={delivery} className={web()} />
        </div>
        <div className={coffee()}>
          <h3 className={ours()}>Nossos Cafés</h3>
          <div className={wrapper()}>
            {coffees.map(coffee => (
              <div className={card()} key={coffee.title}>
                <img src={coffee.image} alt={coffee.image} className={cup()} />
                <ul className={map()}>
                  {coffee.categories.map((category, index) => (
                    <li key={index}>
                      <p className={rank()}>{category.title}</p>
                    </li>
                  ))}
                </ul>
                <div className={description()}>
                  <p className={expresso()}>{coffee.title}</p>
                  <p className={subtitle()}>{coffee.description}</p>
                </div>
                <div className={box()}>
                  <p>R$ <span className={price()}>{coffee.price}</span></p>
                  <div className={amount()}>
                    <div className={controller()}>
                      <button><MinusIcon className={btn()} /></button>
                      <p>1</p>
                      <button><PlusIcon className={btn()} /></button>
                    </div>
                    <div className={cart()}>
                      <ShoppingCartIcon className={shopp()} />
                    </div>
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