import { Fragment } from 'react'
import { useCart } from '../hooks/cart'
import { CheckoutProps } from '../types/checkout'
import { ModalVariants } from '../styles/variants'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

const { modalContent, modalBackdrop, modalDialog, modalInfo, modalPanel, modalIcon, modalTitle, modalDescription, modalSumary, modalText, modalUf, modalAction, modalEnter, modalEnterTo, modalFrom, modalLeave, modalLeaveFrom, modalLeaveTo, modalChildEnter, modalChildEnterTo, modalChildFrom, modalChildLeave, modalChildLeaveFrom, modalChildLeaveTo } = ModalVariants()

type Props = {
  currentModal: boolean
  currentCheckout: CheckoutProps | null
}

export const Modal = ({ currentModal, currentCheckout }: Props) => {
  const { handleSubmitProduct } = useCart()

  return (
    <Transition appear show={currentModal} as={Fragment}>
      <Dialog className={modalContent()} onClose={() => null}>
        <Transition.Child as={Fragment} enter={modalEnter()} enterFrom={modalFrom()} enterTo={modalEnterTo()} leave={modalLeave()} leaveFrom={modalLeaveFrom()} leaveTo={modalLeaveTo()}>
          <div className={modalBackdrop()} />
        </Transition.Child>
        <div className={modalDialog()}>
          <div className={modalInfo()}>
            <Transition.Child as={Fragment} enter={modalChildEnter()} enterFrom={modalChildFrom()} enterTo={modalChildEnterTo()} leave={modalChildLeave()} leaveFrom={modalChildLeaveFrom()} leaveTo={modalChildLeaveTo()}>
              <Dialog.Panel className={modalPanel()}>
                <FaceSmileIcon className={modalIcon()} />
                <Dialog.Title className={modalTitle()}>Uhuu... Pedido confirmado!</Dialog.Title>
                <Dialog.Description className={modalDescription()}>Seu pedido foi enviado com sucesso.<br />Agora é só aguardar que logo seu café chegará até você.</Dialog.Description>
                {currentCheckout && (
                  <ul className={modalSumary()}>
                    <li>
                      <p>Endereço de entrega:</p>
                      <p className={modalText()}>{currentCheckout.address}, {currentCheckout.num} - {currentCheckout.neighbor}</p>
                      <p className={modalText()}>{currentCheckout.city}/<span className={modalUf()}>{currentCheckout.uf}</span></p>
                    </li>
                    <li>
                      <p>Forma de pagamento:</p>
                      <p className={modalText()}>{currentCheckout.payment}</p>
                    </li>
                  </ul>
                )}
                <button className={modalAction()} onClick={handleSubmitProduct}>
                  <span>Voltar à página inicial</span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}