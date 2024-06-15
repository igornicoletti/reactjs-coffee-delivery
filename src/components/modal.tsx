import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

import { UseCart } from '../hooks'
import { FormProps } from '../types'
import { ModalVariants, OpacityVariants, ScaleVariants } from '../styles'

const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { modalcontent, modalbackdrop, modaldialog, modalinfo, modalpanel, modalicon, modaltitle, modaldescription, modalsumary, modalaction } = ModalVariants()

type Props = {
  currentModal: boolean
  currentForm: FormProps
}

export const ModalComponent = ({ currentModal, currentForm }: Props) => {
  const { handleSubmitProduct } = UseCart()

  return (
    <Transition appear show={currentModal} as={Fragment}>
      <Dialog className={modalcontent()} onClose={handleSubmitProduct}>
        <Transition.Child as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
          <div className={modalbackdrop()} />
        </Transition.Child>
        <div className={modaldialog()}>
          <div className={modalinfo()}>
            <Transition.Child as={Fragment} enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()} leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
              <Dialog.Panel className={modalpanel()}>
                <FaceSmileIcon className={modalicon()} />
                <Dialog.Title className={modaltitle()}>Uhuu... Pedido confirmado!</Dialog.Title>
                <Dialog.Description className={modaldescription()}>
                  Seu pedido foi enviado com sucesso.<br />Agora é só aguardar que logo seu café chegará até você.
                </Dialog.Description>
                <div className={modalsumary()}>
                  <p>Endereço de entrega: <br /> {currentForm.street}, {currentForm.number} - {currentForm.neighborhood} <br /> {currentForm.city}/{currentForm.uf}</p>
                  <p>Forma de pagamento: {currentForm.payment}</p>
                </div>
                <button className={modalaction()} onClick={handleSubmitProduct} type={'button'}>
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