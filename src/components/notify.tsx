import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { NotifyVariants } from '../styles/variants'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const { notifyContent, notifyPanel, notifyHead, notifyIcon, notifyTitle, notifyEnter, notifyEnterTo, notifyFrom, notifyLeave, notifyLeaveFrom, notifyLeaveTo } = NotifyVariants()

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
            <p className={notifyTitle()}>{currentTitle} foi adicionado ao carrinho!</p>
          </div>
        </Transition>
      </div>
    </div>
  )
}