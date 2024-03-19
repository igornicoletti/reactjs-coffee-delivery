export const getProducts = async () => {
  const products = await localStorage.getItem('products')
  if (products) return JSON.parse(products)
}