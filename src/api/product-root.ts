export const getProducts = async () => {
  const products = await localStorage.getItem('coffee-delivery:products')
  if (products) return JSON.parse(products)
}