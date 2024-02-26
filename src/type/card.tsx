type SpecType = {
  id: number,
  title: string
}

export type CardType = {
  id: number
  source: string,
  alternate: string,
  specs: SpecType[]
  title: string,
  description: string,
  price: string,
  amount: number,
}