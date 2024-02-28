import { variantsCheckout } from '../styles/variants'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const { checkout, checkFill, checkOrder, checkTitle, checkWrapper, checkPanel, checkHead, checkLegend, checkDescript, checkForm, checkLabel, checkLabels, checkLabeled, checkInput, checkHidden, checkBtn, checkSpec, checkSpecItem, checkImg, checkGuide, checkCtt, checkInfo, checkBox, checkAction, checkTrash, checkQuantity, checkConfirm, checkIcon } = variantsCheckout()

export function Checkout() {
  return (
    <div className={checkout()}>
      <div className={checkFill()}>
        <h3 className={checkTitle()}>Complete seu pedido</h3>
        <div className={checkWrapper()}>
          <div className={checkPanel()}>
            <div className={checkHead()}>
              <p className={checkLegend()}>Endereço de entrega</p>
              <span className={checkDescript()}>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <div className={checkForm()}>
              <div className={checkLabel()}>
                <input className={checkInput()} type='number' name='cep' id='cep' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='cep'>CEP</label>
              </div>
              <span className={checkHidden()}></span>
              <div className={checkLabels()}>
                <input className={checkInput()} type='text' name='address' id='address' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='address'>Endereço</label>
              </div>
              <div className={checkLabel()}>
                <input className={checkInput()} type='number' name='num' id='num' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='num'>Número</label>
              </div>
              <div className={checkLabel()}>
                <input className={checkInput()} type='text' name='Bairro' id='Bairro' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='Bairro'>Bairro</label>
              </div>
              <div className={checkLabel()}>
                <input className={checkInput()} type='text' name='city' id='city' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='city'>Cidade</label>
              </div>
              <div className={checkLabel()}>
                <input className={checkInput()} type='text' name='state' id='state' placeholder=' ' required />
                <label className={checkLabeled()} htmlFor='state'>UF</label>
              </div>
            </div>
          </div>
          <div className={checkPanel()}>
            <div className={checkHead()}>
              <p className={checkLegend()}>Forma de pagamento</p>
              <span className={checkDescript()}>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <div className={checkForm()}>
              <button className={checkBtn()}>
                <span>Dinheiro</span>
              </button>
              <button className={checkBtn()}>
                <span>Cartão de crédito</span>
              </button>
              <button className={checkBtn()}>
                <span>Cartão de dédito</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={checkOrder()}>
        <h3 className={checkTitle()}>Cafés selecionados</h3>
        <div className={checkPanel()}>
          <ul className={checkSpec()}>
            <li className={checkSpecItem()}>
              <img className={checkImg()} src='/images/coffee-gelado.png' alt='Coffee Delivery' />
              <div className={checkGuide()}>
                <div className={checkCtt()}>
                  <p className={checkInfo()}>Expresso Gelado</p>
                  <p className={checkInfo()}>R$ 9.90</p>
                </div>
                <div className={checkCtt()}>
                  <div className={checkBox()}>
                    <button className={checkAction()}>
                      <MinusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                    <input className={checkQuantity()} type='number' value={0} name='' id='' />
                    <button className={checkAction()}>
                      <PlusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                  </div>
                  <button className={checkTrash()}>
                    <TrashIcon className={checkIcon()} aria-hidden='true' />
                  </button>
                </div>
              </div>
            </li>
            <li className={checkSpecItem()}>
              <img className={checkImg()} src='/images/coffee-gelado.png' alt='Coffee Delivery' />
              <div className={checkGuide()}>
                <div className={checkCtt()}>
                  <p className={checkInfo()}>Expresso Gelado</p>
                  <p className={checkInfo()}>R$ 9.90</p>
                </div>
                <div className={checkCtt()}>
                  <div className={checkBox()}>
                    <button className={checkAction()}>
                      <MinusIcon className={checkIcon()} aria-hidden='true' />
                    </button>
                    <input className={checkQuantity()} type='number' value={0} name='' id='' />
                    <button className={checkAction()}>
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
          <ul className={checkGuide()}>
            <li className={checkCtt()}>
              <p>Total dos itens</p>
              <p>R$ 19.80</p>
            </li>
            <li className={checkCtt()}>
              <p>Entrega</p>
              <p>R$ 5.20</p>
            </li>
            <li className={checkCtt()}>
              <p className={checkLegend()}>Valor total</p>
              <p className={checkLegend()}>R$ 25.00</p>
            </li>
          </ul>
          <button className={checkConfirm()}>
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}