type CategoryProps = {
  id: number,
  title: string
}

export interface CardProps {
  id: number
  cardId: Array<string>,
  title: string,
  subtitle: string,
  source: string,
  category: CategoryProps[]
  price: string,
  quantity: number
}