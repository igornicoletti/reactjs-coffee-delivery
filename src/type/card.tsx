type CategoryListProps = {
  id: number,
  title: string
}

export type CardListProps = {
  id: number
  cardId: Array<string>,
  title: string,
  subtitle: string,
  source: string,
  category: CategoryListProps[]
  price: string,
  quantity: number,
}