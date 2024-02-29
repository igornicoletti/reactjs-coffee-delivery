import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type ModalProps = {
  modal: boolean
  handleModalClose: () => void
}

export const Modal = ({ modal, handleModalClose }: ModalProps) => {
  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog className="relative z-10" onClose={handleModalClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-xl flex flex-col items-center transform overflow-hidden rounded-md shadow-md bg-white p-6 align-middle transition-all">
                <FaceSmileIcon className='animate-bounce size-16 text-dracula-cyan' />
                <Dialog.Title className="text-xl font-medium leading-6 text-dracula-dark mt-2">
                  Uhuu... Pedido confirmado!
                </Dialog.Title>
                <Dialog.Description className="text-dracula-dark mt-4">
                  Seu pagamento foi enviado com sucesso.
                  <br />
                  Agora é só aguardar que logo o café chegará até você.
                </Dialog.Description>
                <Link to='/' onClick={handleModalClose} className="mt-10 w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan/75 hover:bg-dracula-cyan text-dracula-line transition ease-in-out duration-300">
                  Voltar à página inicial
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}