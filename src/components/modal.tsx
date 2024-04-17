import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

import { FormProps } from '../types/form'
import { ModalVariants } from '../styles/variants'
import { CartContextProvider } from '../hooks/cart'

const { modalContent, modalBackdrop, modalDialog, modalInfo, modalPanel, modalIcon, modalTitle, modalDescription, modalSumary, modalAction, modalEnter, modalEnterTo, modalFrom, modalLeave, modalLeaveFrom, modalLeaveTo, modalChildEnter, modalChildEnterTo, modalChildFrom, modalChildLeave, modalChildLeaveFrom, modalChildLeaveTo } = ModalVariants()

type Props = {
  currentModal: boolean
  currentForm: FormProps
}

export const ModalComponent = ({ currentModal, currentForm }: Props) => {
  const { handleSubmitProduct } = CartContextProvider()

  return (
    <Transition appear show={currentModal} as={Fragment}>
      <Dialog className={modalContent()} onClose={handleSubmitProduct}>
        <Transition.Child as={Fragment}
          enter={modalEnter()} enterFrom={modalFrom()} enterTo={modalEnterTo()}
          leave={modalLeave()} leaveFrom={modalLeaveFrom()} leaveTo={modalLeaveTo()}>
          <div className={modalBackdrop()} />
        </Transition.Child>
        <div className={modalDialog()}>
          <div className={modalInfo()}>
            <Transition.Child as={Fragment}
              enter={modalChildEnter()} enterFrom={modalChildFrom()} enterTo={modalChildEnterTo()}
              leave={modalChildLeave()} leaveFrom={modalChildLeaveFrom()} leaveTo={modalChildLeaveTo()}>
              <Dialog.Panel className={modalPanel()}>
                <FaceSmileIcon className={modalIcon()} />
                <Dialog.Title className={modalTitle()}>Uhuu... Pedido confirmado!</Dialog.Title>
                <Dialog.Description className={modalDescription()}>
                  Seu pedido foi enviado com sucesso.<br />Agora é só aguardar que logo seu café chegará até você.
                </Dialog.Description>
                <div className={modalSumary()}>
                  <p>Endereço de entrega: <br /> {currentForm.street}, {currentForm.number} - {currentForm.neighborhood} <br /> {currentForm.city}/{currentForm.uf}</p>
                  <p>Forma de pagamento: {currentForm.payment}</p>
                </div>
                <button className={modalAction()} onClick={handleSubmitProduct}>
                  <span>Voltar à lista de produtos</span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}