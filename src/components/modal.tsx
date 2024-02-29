import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { variantsModal } from '../styles/variants'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

const { modal, modalBackdrop, modalContent, modalInfo, modalPanel, modalIcon, modalTitle, modalDescription, modalAction, modalEnter, modalEnterTo, modalFrom, modalLeave, modalLeaveFrom, modalLeaveTo, modalChildEnter, modalChildEnterTo, modalChildFrom, modalChildLeave, modalChildLeaveFrom, modalChildLeaveTo } = variantsModal()

type ModalProps = {
  dialog: boolean
  handleDialogClose: () => void
}

export const Modal = ({ dialog, handleDialogClose }: ModalProps) => {
  return (
    <Transition appear show={dialog} as={Fragment}>
      <Dialog className={modal()} onClose={handleDialogClose}>
        <Transition.Child as={Fragment} enter={modalEnter()} enterFrom={modalFrom()} enterTo={modalEnterTo()} leave={modalLeave()} leaveFrom={modalLeaveFrom()} leaveTo={modalLeaveTo()}>
          <div className={modalBackdrop()} />
        </Transition.Child>
        <div className={modalContent()}>
          <div className={modalInfo()}>
            <Transition.Child as={Fragment} enter={modalChildEnter()} enterFrom={modalChildFrom()} enterTo={modalChildEnterTo()} leave={modalChildLeave()} leaveFrom={modalChildLeaveFrom()} leaveTo={modalChildLeaveTo()}>
              <Dialog.Panel className={modalPanel()}>
                <FaceSmileIcon className={modalIcon()} />
                <Dialog.Title className={modalTitle()}>Uhuu... Pedido confirmado!</Dialog.Title>
                <Dialog.Description className={modalDescription()}>Seu pagamento foi enviado com sucesso.<br />Agora é só aguardar que logo o café chegará até você.</Dialog.Description>
                <Link className={modalAction()} to='/' onClick={handleDialogClose}>Voltar à página inicial</Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}