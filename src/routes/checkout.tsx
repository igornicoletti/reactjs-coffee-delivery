import { variantsCheckout } from '../styles/variants'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const { checkout, checkRecord, checkSummary, checkTitle, checkContent, checkWrapper, checkHead, checkSubtitle, checkForm, checkFormHidden, checkFormItem, checkFormItens, checkInput, checkLabel, checkPay, checkOrder, checkOrderItem, checkImage, checkInfo, checkBetween, checkDescription, checkAction, checkButton, checkTrash, checkQuantity, checkIcon } = variantsCheckout()

export function Checkout() {
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
                <input className={checkInput()} type='number' name='cep' id='cep' placeholder=' ' required />
                <label className={checkLabel()} htmlFor='cep'>CEP</label>
              </div>
              <span className={checkFormHidden()}></span>
              <div className={checkFormItens()}>
                <input className={checkInput()} type='text' name='address' id='address' placeholder=' ' required />
                <label className={checkLabel()} htmlFor='address'>Endereço</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='number' name='num' id='num' placeholder=' ' required />
                <label className={checkLabel()} htmlFor='num'>Número</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='Bairro' id='Bairro' placeholder=' ' required />
                <label className={checkLabel()} htmlFor='Bairro'>Bairro</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='city' id='city' placeholder=' ' required />
                <label className={checkLabel()} htmlFor='city'>Cidade</label>
              </div>
              <div className={checkFormItem()}>
                <input className={checkInput()} type='text' name='state' id='state' placeholder=' ' required />
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
                <div className={checkBetween()}>
                  <div className={checkAction()}>
                    <button className={checkButton()}>
                      <MinusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                    <input className={checkQuantity()} type='number' defaultValue={0} name='' id='' />
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
        </div>
      </div>
    </div>
  )
}