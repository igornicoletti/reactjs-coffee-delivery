import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { Root } from './routes/root'
import { Home } from './routes/home'
import { Cart } from './routes/cart'
import { RootErrorBoundary } from './error'

import { getProducts } from './api/product-root'

const loaderHome = async () => {
  const products = await getProducts()
  return products
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: '/',
        loader: loaderHome,
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)