import { Link } from 'react-router-dom'
import leite from '/images/coffee-leite.png'
import latte from '/images/coffee-latte.png'
import arabe from '/images/coffee-arabe.png'
import gelado from '/images/coffee-gelado.png'
import quente from '/images/coffee-quente.png'
import cubano from '/images/coffee-cubano.png'
import coffee from '/images/coffee-delivery.png'
import cremoso from '/images/coffee-cremoso.png'
import havaiano from '/images/coffee-havaiano.png'
import irlandes from '/images/coffee-irlandes.png'
import americano from '/images/coffee-americano.png'
import capuccino from '/images/coffee-capuccino.png'
import macchiato from '/images/coffee-macchiato.png'
import mocaccino from '/images/coffee-mocaccino.png'
import tradicional from '/images/coffee-tradicional.png'
import { FireIcon, MinusIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

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
    <div className='relative w-full h-full min-h-screen grid content-start overflow-x-hidden'>
      <div className='w-full max-w-screen-2xl mx-auto px-4'>
        <div className='w-full flex items-center justify-between py-8'>
          <h1 className='text-2xl font-bold'>Coffee Delivery</h1>
          <Link to='/checkout'>
            <div className='p-2 rounded-lg bg-purple-500 text-white'>
              <ShoppingCartIcon className='h-6 w-6' />
            </div>
          </Link>
        </div>
        <div className='w-full flex items-center justify-between py-16 gap-16'>
          <div className='flex flex-col items-start gap-16 max-w-2xl'>
            <div className='flex flex-col gap-8'>
              <h2 className='text-5xl font-bold'>Encontre o café perfeito para qualquer hora do dia</h2>
              <p className='text-2xl'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <div className='flex items-center gap-4'>
                <div className='p-2 rounded-full bg-purple-500 text-white'>
                  <ShoppingCartIcon className='h-4 w-4' />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='p-2 rounded-full bg-purple-500 text-white'>
                  <ShoppingBagIcon className='h-4 w-4' />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='p-2 rounded-full bg-purple-500 text-white'>
                  <TruckIcon className='h-4 w-4' />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='p-2 rounded-full bg-purple-500 text-white'>
                  <FireIcon className='h-4 w-4' />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
          <img src={coffee} alt={coffee} className='w-full max-w-xl' />
        </div>
        <div className='w-full flex flex-col py-16 gap-16'>
          <h3 className='text-3xl font-bold'>Nossos Cafés</h3>
          <div className='grid grid-cols-4 gap-x-8 gap-y-10'>
            {coffees.map(coffee => (
              <div className='flex flex-col rounded-tr-3xl rounded-bl-3xl p-6 bg-slate-100' key={coffee.title}>
                <img src={coffee.image} alt={coffee.image} className='w-32 h-32 mx-auto -mt-10' />
                <ul className='flex flex-wrap items-center justify-center gap-1 pt-4'>
                  {coffee.categories.map((category, index) => (
                    <li key={index}>
                      <p className='text-xs font-medium uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-500'>{category.title}</p>
                    </li>
                  ))}
                </ul>
                <div className='flex flex-col text-center gap-2 pt-6'>
                  <p className='text-xl font-bold'>{coffee.title}</p>
                  <p className='font-light'>{coffee.description}</p>
                </div>
                <div className='flex items-center justify-between gap-2 pt-10'>
                  <p>R$ <span className='text-2xl font-bold'>{coffee.price}</span></p>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center rounded-lg p-2 gap-4 bg-slate-200'>
                      <button><MinusIcon className='h-6 w-6 text-purple-500' /></button>
                      <p>1</p>
                      <button><PlusIcon className='h-6 w-6 text-purple-500' /></button>
                    </div>
                    <div className='p-2 rounded-lg bg-purple-500 text-white'>
                      <ShoppingCartIcon className='h-6 w-6' />
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