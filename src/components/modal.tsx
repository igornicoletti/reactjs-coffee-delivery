import { Fragment } from 'react'
import { useCart } from '../hooks/cart'
import { FormProps } from '../types/form'
import { modalVariants } from '../styles/variants'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

const { modalContent, modalBackdrop, modalDialog, modalInfo, modalPanel, modalIcon, modalTitle, modalDescription, modalSumary, modalAction, modalEnter, modalEnterTo, modalFrom, modalLeave, modalLeaveFrom, modalLeaveTo, modalChildEnter, modalChildEnterTo, modalChildFrom, modalChildLeave, modalChildLeaveFrom, modalChildLeaveTo } = modalVariants()

type Props = {
  currentModal: boolean
  currentForm: FormProps | null
}

export const Modal = ({ currentModal, currentForm }: Props) => {
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
                {currentForm && (
                  <div className={modalSumary()}>
                    <p>Endereço de entrega: <br /> {currentForm.address}, {currentForm.num} - {currentForm.neighbor} <br /> {currentForm.city}/{currentForm.uf}</p>
                    <p>Forma de pagamento: {currentForm.payment}</p>
                  </div>
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