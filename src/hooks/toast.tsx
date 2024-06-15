import { useContext } from 'react'

import { ToastProps } from '../types'
import { ToastContext } from '../contexts'

export const UseToast = () => {
  const { toast, showToast, hideToast } = useContext(ToastContext)

  const handleTypeToast = (type: ToastProps['type']) =>
    (props: Pick<ToastProps, 'title' | 'description'>) =>
      showToast({ ...props, type })

  return {
    toast,
    hideToast,
    danger: handleTypeToast('danger'),
    info: handleTypeToast('info'),
    success: handleTypeToast('success'),
    warning: handleTypeToast('warning')
  }
}