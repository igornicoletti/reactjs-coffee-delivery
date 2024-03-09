type CategoryProps = {
  id: number,
  title: string
  categoryId: string
}

export interface CardProps {
  id: number
  title: string,
  subtitle: string,
  source: string,
  category: CategoryProps[]
  price: number,
  quantity: number
}