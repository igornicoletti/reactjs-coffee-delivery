import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { NotifyVariants } from '../styles/variants'
import { CartContextProvider } from '../hooks/cart'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const { notifyContent, notifyPanel, notifyHead, notifyIcon, notifyTitle, notifyCoffee, notifyEnter, notifyEnterTo, notifyFrom, notifyLeave, notifyLeaveFrom, notifyLeaveTo } = NotifyVariants()

type Props = {
  currentNotify: boolean
  currentMessage?: string
}

export const Notify = ({ currentNotify, currentMessage }: Props) => {
  const { cart } = CartContextProvider()

  return (
    <div className={notifyContent()}>
      <div className={notifyPanel()}>
        <Transition show={currentNotify} as={Fragment} enter={notifyEnter()} enterFrom={notifyFrom()} enterTo={notifyEnterTo()} leave={notifyLeave()} leaveFrom={notifyLeaveFrom()} leaveTo={notifyLeaveTo()}>
          {cart.length > 0 ? (
            <div className={notifyHead()}>
              <CheckCircleIcon className={notifyIcon({ color: 'check' })} aria-hidden='true' />
              <p className={notifyTitle()}><span className={notifyCoffee()}>{currentMessage}</span> foi adicionado ao carrinho.</p>
            </div>
          ) : (
            <div className={notifyHead()}>
              <ExclamationCircleIcon className={notifyIcon({ color: 'exclamation' })} aria-hidden='true' />
              <p className={notifyTitle()}><span className={notifyCoffee()}>Coffee Cart</span> está vazio. Dê um propósito a ele.</p>
            </div>
          )}
        </Transition>
      </div>
    </div>
  )
}