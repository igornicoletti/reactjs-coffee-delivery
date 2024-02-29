import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

type NotificationProps = {
  notification: boolean
}

export const Notification = ({ notification }: NotificationProps) => {
  return (
    <div aria-live="assertive" className="z-10 pointer-events-none fixed inset-0 flex items-end px-4 py-6 md:p-6 sm:items-start" >
      <div className="flex w-full flex-col items-center sm:items-end">
        <Transition show={notification} as={Fragment} enter="transform ease-out duration-300 transition" enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enterTo="translate-y-0 opacity-100 sm:translate-x-0" leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
          <div className="w-full max-w-sm flex items-start gap-2 p-4 rounded-md shadow-md bg-white">
            <CheckCircleIcon className="h-6 w-6 text-dracula-cyan" aria-hidden="true" />
            <div>
              <p className="font-medium text-dracula-dark">Expresso Tradicional adicionado ao carrinho!</p>
              <p className="text-xs text-dracula-dark">Tradicional café feito com água quente e grãos moidos.</p>

            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}