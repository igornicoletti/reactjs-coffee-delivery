import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ModalVariants } from '../styles/variants'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

const { modalContent, modalBackdrop, modalDialog, modalInfo, modalPanel, modalIcon, modalTitle, modalDescription, modalAction, modalEnter, modalEnterTo, modalFrom, modalLeave, modalLeaveFrom, modalLeaveTo, modalChildEnter, modalChildEnterTo, modalChildFrom, modalChildLeave, modalChildLeaveFrom, modalChildLeaveTo } = ModalVariants()

interface ModalType {
  currentModal: boolean
}

export const Modal = ({ currentModal }: ModalType) => {

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
                <Dialog.Description className={modalDescription()}>Seu pagamento foi enviado com sucesso.<br />Agora é só aguardar que logo o café chegará até você.</Dialog.Description>
                <Link className={modalAction()} to='/'>Voltar à página inicial</Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}