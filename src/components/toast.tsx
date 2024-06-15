import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { UseToast } from '../hooks'
import { ToastVariants, TranslateVariants } from '../styles'

const { toastcontent, toastwrapper, toastpanel, toasttitle, toastinfo, toastaction, toasticon } = ToastVariants()
const { translateenter, translatefrom, translateenterto, translateleave, translateleavefrom, translateleaveto } = TranslateVariants()

export const ToastsComponent = () => {
  const { toast, hideToast } = UseToast()

  return (
    <div className={toastcontent()}>
      <div className={toastwrapper()}>
        {toast.map((toast) => (
          <Transition key={toast.id} show={toast.showing} appear={true} enter={translateenter()} enterFrom={translatefrom()} enterTo={translateenterto()} leave={translateleave()} leaveFrom={translateleavefrom()} leaveTo={translateleaveto()}>
            <div className={toastpanel({ color: toast.type })}>
              <p className={toasttitle()}>{toast.title}</p>
              <p className={toastinfo()}>{toast.description}</p>
              <button className={toastaction()} onClick={() => hideToast(toast.id)} type={'button'}>
                <XMarkIcon className={toasticon()} />
              </button>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  )
}