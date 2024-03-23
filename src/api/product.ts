export const getProduct = async () => {
  const storedStateAsJSON = localStorage.getItem('coffee-delivery:product')
  if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
}

export const getCart = async () => {
  const storedStateAsJSON = localStorage.getItem('coffee-delivery:cart')
  if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
}