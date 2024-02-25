import { FireIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline'

export const specifications = [
  { id: 1, icon: ShoppingCartIcon, text: 'Compra simples e segura' },
  { id: 2, icon: ShoppingBagIcon, text: 'Embalagem mantém o café intacto' },
  { id: 3, icon: TruckIcon, text: 'Entrega rápida e rastreada' },
  { id: 4, icon: FireIcon, text: 'O café chega fresquinho até você' }
]

export const filters = [
  { id: 1, filtersId: 'alcoholic', text: 'Alcoólico' },
  { id: 2, filtersId: 'milk', text: 'Com leite' },
  { id: 3, filtersId: 'special', text: 'Especial' },
  { id: 4, filtersId: 'ice', text: 'Gelado' },
  { id: 5, filtersId: 'traditional', text: 'Tradicional' }
]

export const products = [
  {
    id: 1,
    filtersId: ['traditional'],
    source: '/images/coffee-tradicional.png',
    alternate: 'Café tradicional',
    specs: [{ id: 1, title: 'Tradicional' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos.',
    price: '9.90',
    amount: 1,
  },
  {
    id: 2,
    filtersId: ['traditional'],
    source: '/images/coffee-americano.png',
    alternate: 'Café americano',
    specs: [{ id: 1, title: 'Tradicional' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional.',
    price: '9.90',
    amount: 1
  },
  {
    id: 3,
    filtersId: ['traditional'],
    source: '/images/coffee-cremoso.png',
    alternate: 'Café cremoso',
    specs: [{ id: 1, title: 'Tradicional' }],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa.',
    price: '9.90',
    amount: 1
  },
  {
    id: 4,
    filtersId: ['traditional', 'ice'],
    source: '/images/coffee-gelado.png',
    alternate: 'Café gelado',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Gelado' }
    ],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo.',
    price: '9.90',
    amount: 1
  },
  {
    id: 5,
    filtersId: ['traditional', 'milk'],
    source: '/images/coffee-leite.png',
    alternate: 'Café leite',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado.',
    price: '9.90',
    amount: 1
  },
  {
    id: 6,
    filtersId: ['traditional', 'milk'],
    source: '/images/coffee-latte.png',
    alternate: 'Café latte',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa.',
    price: '9.90',
    amount: 1
  },
  {
    id: 7,
    filtersId: ['traditional', 'milk'],
    source: '/images/coffee-capuccino.png',
    alternate: 'Café capuccino',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma.',
    price: '9.90',
    amount: 1
  },
  {
    id: 8,
    filtersId: ['traditional', 'milk'],
    source: '/images/coffee-macchiato.png',
    alternate: 'Café macchiato',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma.',
    price: '9.90',
    amount: 1
  },
  {
    id: 9,
    filtersId: ['traditional', 'milk'],
    source: '/images/coffee-mocaccino.png',
    alternate: 'Café mocaccino',
    specs: [
      { id: 1, title: 'Tradicional' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: '9.90',
    amount: 1
  },
  {
    id: 10,
    filtersId: ['special', 'milk'],
    source: '/images/coffee-quente.png',
    alternate: 'Café quente',
    specs: [
      { id: 1, title: 'Especial' },
      { id: 2, title: 'Com leite' }
    ],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café.',
    price: '9.90',
    amount: 1
  },
  {
    id: 11,
    filtersId: ['special', 'alcoholic', 'ice'],
    source: '/images/coffee-cubano.png',
    alternate: 'Café cubano',
    specs: [
      { id: 1, title: 'Especial' },
      { id: 2, title: 'Alcoólico' },
      { id: 3, title: 'Gelado' }
    ],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã.',
    price: '9.90',
    amount: 1
  },
  {
    id: 12,
    filtersId: ['special'],
    source: '/images/coffee-havaiano.png',
    alternate: 'Café havaiano',
    specs: [{ id: 1, title: 'Especial' }],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco.',
    price: '9.90',
    amount: 1
  },
  {
    id: 13,
    filtersId: ['special'],
    source: '/images/coffee-arabe.png',
    alternate: 'Café tradicional',
    specs: [{ id: 1, title: 'Especial' }],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias.',
    price: '9.90',
    amount: 1
  },
  {
    id: 14,
    filtersId: ['special', 'alcoholic'],
    source: '/images/coffee-irlandes.png',
    alternate: 'Café tradicional',
    specs: [
      { id: 1, title: 'Especial' },
      { id: 2, title: 'Alcoólico' }
    ],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
    price: '9.90',
    amount: 1
  },
]