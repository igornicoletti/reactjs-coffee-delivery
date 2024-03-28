import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { notifyVariants } from '../styles/variants'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const { notifyContent, notifyPanel, notifyHead, notifyIcon, notifyTitle, notifyCoffee, notifyEnter, notifyEnterTo, notifyFrom, notifyLeave, notifyLeaveFrom, notifyLeaveTo } = notifyVariants()

type Props = {
  currentNotify: boolean
  currentTitle: string
}

export const Notify = ({ currentNotify, currentTitle }: Props) => {
  return (
    <div className={notifyContent()}>
      <div className={notifyPanel()}>
        <Transition show={currentNotify} as={Fragment} enter={notifyEnter()} enterFrom={notifyFrom()} enterTo={notifyEnterTo()} leave={notifyLeave()} leaveFrom={notifyLeaveFrom()} leaveTo={notifyLeaveTo()}>
          <div className={notifyHead()}>
            <CheckCircleIcon className={notifyIcon()} aria-hidden='true' />
            <p className={notifyTitle()}>
              <span className={notifyCoffee()}>{currentTitle}</span> foi adicionado ao carrinho!
            </p>
          </div>
        </Transition>
      </div>
    </div>
  )
}