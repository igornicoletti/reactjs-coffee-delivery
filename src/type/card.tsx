type CategoryType = {
  id: number,
  title: string
}

export type CardType = {
  id: number
  title: string,
  subtitle: string,
  source: string,
  category: CategoryType[]
  price: string,
  amount: number,
}