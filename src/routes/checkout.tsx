import { useState } from 'react'
import { Modal } from '../components/modal'
import { variantsCheckout } from '../styles/variants'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const { checkout, checkRecord, checkSummary, checkTitle, checkContent, checkWrapper, checkHead, checkSubtitle, checkForm, checkFormHidden, checkFormItem, checkFormItens, checkInput, checkLabel, checkPay, checkOrder, checkOrderItem, checkImage, checkInfo, checkBetween, checkDescription, checkAction, checkGroup, checkButton, checkTrash, checkQuantity, checkIcon, checkConfirm } = variantsCheckout()

export const Checkout = () => {
  const [dialog, setDialog] = useState<boolean>(false)

  const handleDialog = () => setDialog(false)

  return (
    <div className={checkout()}>
      <div className={checkRecord()}>
        <h3 className={checkTitle()}>Complete seu pedido</h3>
        <div className={checkContent()}>
          <div className={checkWrapper()}>
            <div className={checkHead()}>
              <p className={checkSubtitle()}>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <form className={checkForm()}>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='number' name='cep' id='cep' placeholder=' ' />
                <label className={checkLabel()} htmlFor='cep'>CEP</label>
              </div>
              <span className={checkFormHidden()}></span>
              <div className={checkFormItens()}>
                <input className={checkInput()} type='text' name='address' id='address' placeholder=' ' />
                <label className={checkLabel()} htmlFor='address'>Endereço</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='number' name='num' id='num' placeholder=' ' />
                <label className={checkLabel()} htmlFor='num'>Número</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='neighbor' id='neighbor' placeholder=' ' />
                <label className={checkLabel()} htmlFor='neighbor'>Bairro</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='city' id='city' placeholder=' ' />
                <label className={checkLabel()} htmlFor='city'>Cidade</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='state' id='state' placeholder=' ' />
                <label className={checkLabel()} htmlFor='state'>UF</label>
              </div>
            </form>
          </div>
          <div className={checkWrapper()}>
            <div className={checkHead()}>
              <p className={checkSubtitle()}>Forma de pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <div className={checkForm()}>
              <button className={checkPay()}>
                <span>Dinheiro</span>
              </button>
              <button className={checkPay()}>
                <span>Cartão de crédito</span>
              </button>
              <button className={checkPay()}>
                <span>Cartão de dédito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={checkSummary()}>
        <h3 className={checkTitle()}>Cafés selecionados</h3>
        <div className={checkWrapper()}>
          <ul className={checkOrder()}>
            <li className={checkOrderItem()}>
              <img className={checkImage()} src='/images/coffee-gelado.png' alt='Coffee Delivery' />
              <div className={checkInfo()}>
                <div className={checkBetween()}>
                  <p className={checkDescription()}>Expresso Gelado</p>
                  <p className={checkDescription()}>R$ 9.90</p>
                </div>
                <div className={checkAction()}>
                  <div className={checkGroup()}>
                    <button className={checkButton()}>
                      <MinusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                    <input className={checkQuantity()} defaultValue={0} type='number' name='amount' />
                    <button className={checkButton()}>
                      <PlusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                  </div>
                  <button className={checkTrash()}>
                    <TrashIcon className={checkIcon()} aria-hidden='true' />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <ul className={checkInfo()}>
            <li className={checkBetween()}>
              <p>Total dos itens</p>
              <p>R$ 19.80</p>
            </li>
            <li className={checkBetween()}>
              <p>Entrega</p>
              <p>R$ 5.20</p>
            </li>
            <li className={checkBetween()}>
              <p className={checkDescription()}>Valor total</p>
              <p className={checkDescription()}>R$ 25.00</p>
            </li>
          </ul>
          <button className={checkConfirm()} onClick={() => setDialog(true)}>
            Confirmar pedido
          </button>
          <Modal dialog={dialog} handleDialog={handleDialog} />
        </div>
      </div>
    </div>
  )
}