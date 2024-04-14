import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { RootPage } from './routes/root'
import { CartPage } from './routes/cart'
import { HomePage, ProductLoader } from './routes/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: ProductLoader
      },
      {
        path: '/cart',
        element: <CartPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)