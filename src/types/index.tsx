export type CartProps = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export type FormProps = {
  cep: number
  street: string
  city: string
  neighborhood: string
  number: number
  uf: string
  payment: string
}

export type ProductProps = {
  id: number
  title: string
  description: string
  image: string
  categories: string[]
  price: number
}

export type ToastProps = {
  id: number
  showing: boolean
  title: string
  description: string
  type: 'info' | 'danger' | 'success' | 'warning'
}