import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { ProductLoader } from './api'
import { ToastsComponent } from './components'
import { ToastContextProvider } from './contexts'
import { CartPage, HomePage, RootPage } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: async () => await ProductLoader()
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
    <ToastContextProvider>
      <RouterProvider router={router} />
      <ToastsComponent />
    </ToastContextProvider>
  </React.StrictMode>
)