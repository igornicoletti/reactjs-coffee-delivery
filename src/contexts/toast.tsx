import { ToastProps } from '../types'
import { ReactNode, createContext, useState } from 'react'

type ToastContextProps = {
  toast: ToastProps[]
  hideToast: (data: ToastProps['id']) => void
  showToast: (data: Omit<ToastProps, 'id' | 'showing'>) => void
}

export const ToastContext = createContext({} as ToastContextProps)

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentToast, setCurrentToast] = useState<ToastProps[]>([])

  const handleHideToast = (id: ToastProps['id']) =>
    setCurrentToast((state) =>
      state.map((item) => item.id === id
        ? { ...item, showing: item.showing = false }
        : item))

  const handleShowToast = ({ title, description, type }: Omit<ToastProps, 'id' | 'showing'>) => {
    const toastId = Date.now()
    setCurrentToast((state) => [...state, { id: toastId, showing: true, title, description, type }])
    setTimeout(() => handleHideToast(toastId), 3500)
  }

  return (
    <ToastContext.Provider value={{
      toast: currentToast,
      hideToast: handleHideToast,
      showToast: handleShowToast,
    }}>
      {children}
    </ToastContext.Provider>
  )
}