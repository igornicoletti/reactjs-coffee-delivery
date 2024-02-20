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
import { variantsBase, variantsCoffee, variantsIntro, variantsNavbar } from '../styles/variants'
import { FireIcon, MinusCircleIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()
const { navbar, logo, action, carticon, badge } = variantsNavbar()
const { intro, layout, info, day, time, list, item, icon, web, mobile } = variantsIntro()
const { coffee, header, ours, filters, filter, wrapper, card, cup, map, rank, description, expresso, subtitle, box, price, amount, controller, btn, minusplus, cart, shopping } = variantsCoffee()

const coffees = [
  {
    id: 1,
    image: tradicional,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos.',
    price: '9.90',
  },
  {
    id: 2,
    image: americano,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional.',
    price: '9.90',
  },
  {
    id: 3,
    image: cremoso,
    categories: [
      { title: 'Tradicional' },
    ],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa.',
    price: '9.90',
  },
  {
    id: 4,
    image: gelado,
    categories: [
      { title: 'Tradicional' },
      { title: 'Gelado' },
    ],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo.',
    price: '9.90',
  },
  {
    id: 5,
    image: leite,
    categories: [
      { title: 'Tradicional' },
      { title: 'Com leite' },
    ],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado.',
    price: '9.90',
  },
  {
    id: 6,
    image: latte,
    categories: [
      { title: 'Tradicional' },
      { title: 'Com leite' },
    ],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa.',
    price: '9.90',
  },
  {
    id: 7,
    image: capuccino,
    categories: [
      { title: 'Tradicional' },
      { title: 'Com leite' },
    ],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma.',
    price: '9.90',
  },
  {
    id: 8,
    image: macchiato,
    categories: [
      { title: 'Tradicional' },
      { title: 'Com leite' },
    ],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma.',
    price: '9.90',
  },
  {
    id: 9,
    image: mocaccino,
    categories: [
      { title: 'Tradicional' },
      { title: 'Com leite' },
    ],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: '9.90',
  },
  {
    id: 10,
    image: quente,
    categories: [
      { title: 'Especial' },
      { title: 'Com leite' },
    ],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café.',
    price: '9.90',
  },
  {
    id: 11,
    image: cubano,
    categories: [
      { title: 'Especial' },
      { title: 'Alcoólico' },
      { title: 'Gelado' },
    ],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã.',
    price: '9.90',
  },
  {
    id: 12,
    image: havaiano,
    categories: [
      { title: 'Especial' },
    ],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco.',
    price: '9.90',
  },
  {
    id: 13,
    image: arabe,
    categories: [
      { title: 'Especial' },
    ],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias.',
    price: '9.90',
  },
  {
    id: 14,
    image: irlandes,
    categories: [
      { title: 'Especial' },
      { title: 'Alcoólico' },
    ],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
    price: '9.90',
  },
]

export function Root() {

  return (
    <div className={base()}>
      <div className={container()}>
        <div className={navbar()}>
          <h1 className={logo()}>Coffee Delivery</h1>
          <Link to='/checkout' className={action()}>
            <ShoppingCartIcon className={carticon()} aria-hidden='true' />
            <span className={badge()}>1</span>
          </Link>
        </div>
        <div className={intro()}>
          <div className={layout()}>
            <div className={info()}>
              <h2 className={day()}>Encontre o café perfeito para qualquer hora do dia.</h2>
              <p className={time()}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
            </div>
            <img src={delivery} alt={delivery} className={mobile()} />
            <ul className={list()}>
              <li className={item()}>
                <ShoppingCartIcon className={icon()} aria-hidden='true' />
                <p>Compra simples e segura.</p>
              </li>
              <li className={item()}>
                <ShoppingBagIcon className={icon()} aria-hidden='true' />
                <p>Embalagem mantém o café intacto.</p>
              </li>
              <li className={item()}>
                <TruckIcon className={icon()} aria-hidden='true' />
                <p>Entrega rápida e rastreada.</p>
              </li>
              <li className={item()}>
                <FireIcon className={icon()} aria-hidden='true' />
                <p>O café chega fresquinho até você.</p>
              </li>
            </ul>
          </div>
          <img src={delivery} alt={delivery} className={web()} />
        </div>
        <div className={coffee()}>
          <div className={header()}>
            <h3 className={ours()}>Nossos Cafés</h3>
            <div className={filters()}>
              <button className={filter()} type='button'>Tradicional</button>
              <button className={filter()} type='button'>Especial</button>
              <button className={filter()} type='button'>Com leite</button>
              <button className={filter()} type='button'>Alcoólico</button>
              <button className={filter()} type='button'>Gelado</button>
            </div>
          </div>
          <div className={wrapper()}>
            {coffees.map(coffee => (
              <div className={card()} key={coffee.id}>
                <img src={coffee.image} alt={coffee.image} className={cup()} />
                <ul className={map()}>
                  {coffee.categories.map((category, index) => (
                    <li key={index}>
                      <span className={rank()}>{category.title}</span>
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
                      <button className={btn()}>
                        <MinusCircleIcon className={minusplus()} aria-hidden='true' />
                      </button>
                      <p>1</p>
                      <button className={btn()}>
                        <PlusCircleIcon className={minusplus()} aria-hidden='true' />
                      </button>
                    </div>
                    <button className={cart()}>
                      <ShoppingCartIcon className={shopping()} aria-hidden='true' />
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