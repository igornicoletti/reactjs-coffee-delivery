import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { NotifyVariants } from '../styles/variants'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const { notifyContent, notifyPanel, notifyHead, notifyIcon, notifyTitle, notifyEnter, notifyEnterTo, notifyFrom, notifyLeave, notifyLeaveFrom, notifyLeaveTo } = NotifyVariants()

type NotificationProps = {
  notification: boolean
  notificationTitle: string | null
}

export const Notification = ({ notification, notificationTitle }: NotificationProps) => {
  return (
    <div className={notifyContent()}>
      <div className={notifyPanel()}>
        <Transition show={notification} as={Fragment} enter={notifyEnter()} enterFrom={notifyFrom()} enterTo={notifyEnterTo()} leave={notifyLeave()} leaveFrom={notifyLeaveFrom()} leaveTo={notifyLeaveTo()}>
          <div className={notifyHead()}>
            <CheckCircleIcon className={notifyIcon()} aria-hidden='true' />
            <p className={notifyTitle()}>{notificationTitle} adicionado ao carrinho!</p>
          </div>
        </Transition>
      </div>
    </div>
  )
}