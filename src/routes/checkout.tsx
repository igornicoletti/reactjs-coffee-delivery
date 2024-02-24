import { Navbar } from '../components/navbar'
import { variantsBase, variantsCheckout } from '../styles/variants'
import { BanknotesIcon, MapPinIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()
const { checkout, checkAmount, checkCard, checkComplete, checkConfirm, checkController, checkDelete, checkDescription, checkForm, checkHidden, checkIcon, checkImage, checkInfo, checkInput, checkItem, checkItems, checkLabel, checkLayout, checkMain, checkMoney, checkName, checkOrder, checkOrders, checkPlaceholder, checkSelected, checkStreet, checkTitle, checkWrapper } = variantsCheckout()

export function Checkout() {
  return (
    <div className={base()}>
      <div className={container()}>
        <Navbar />
        <div className={checkout()}>
          <div className={checkComplete()}>
            <h2 className={checkTitle()}>Complete seu pedido</h2>
            <div className={checkLayout()}>
              <div className={checkCard()}>
                <div className={checkWrapper()}>
                  <MapPinIcon className={checkIcon()} aria-hidden='true' />
                  <div className={checkMain()}>
                    <p className={checkName()}>Endereço de entrega</p>
                    <span className={checkDescription()}>Informe o endereço onde deseja receber o seu pedido.</span>
                  </div>
                </div>
                <div className={checkForm()}>
                  <label className={checkLabel()} htmlFor=''>
                    <input className={checkInput()} type='number' name='' id='' />
                    <span className={checkPlaceholder()}>CEP</span>
                  </label>
                  <span className={checkHidden()}></span>
                  <label className={checkStreet()} htmlFor=''>
                    <input className={checkInput()} type='text' name='' id='' />
                    <span className={checkPlaceholder()}>Endereço</span>
                  </label>
                  <label className={checkLabel()} htmlFor=''>
                    <input className={checkInput()} type='number' name='' id='' />
                    <span className={checkPlaceholder()}>Número</span>
                  </label>
                  <label className={checkLabel()} htmlFor=''>
                    <input className={checkInput()} type='text' name='' id='' />
                    <span className={checkPlaceholder()}>Bairro</span>
                  </label>
                  <label className={checkLabel()} htmlFor=''>
                    <input className={checkInput()} type='text' name='' id='' />
                    <span className={checkPlaceholder()}>Cidade</span>
                  </label>
                  <label className={checkLabel()} htmlFor=''>
                    <input className={checkInput()} type='text' name='' id='' />
                    <span className={checkPlaceholder()}>UF</span>
                  </label>
                </div>
              </div>
              <div className={checkCard()}>
                <div className={checkWrapper()}>
                  <BanknotesIcon className={checkIcon()} aria-hidden='true' />
                  <div className={checkMain()}>
                    <p className={checkName()}>Forma de pagamento</p>
                    <span className={checkDescription()}>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
                  </div>
                </div>
                <div className={checkForm()}>
                  <button className={checkMoney()}>
                    <span>Dinheiro</span>
                  </button>
                  <button className={checkMoney()}>
                    <span>Cartão de crédito</span>
                  </button>
                  <button className={checkMoney()}>
                    <span>Cartão de dédito</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={checkSelected()}>
            <h2 className={checkTitle()}>Cafés selecionados</h2>
            <div className={checkCard()}>
              <ul className={checkOrders()}>
                <li className={checkOrder()}>
                  <img className={checkImage()} src='/images/coffee-cremoso.png' alt='Coffee Delivery' />
                  <ul className={checkItems()}>
                    <li className={checkItem()}>
                      <p className={checkInfo()}>Expresso Cremoso</p>
                      <p className={checkInfo()}>R$ 9.90</p>
                    </li>
                    <li className={checkItem()}>
                      <div className={checkController()}>
                        <button className={checkAmount()}>
                          <MinusIcon className={checkIcon()} aria-hidden='true' />
                        </button>
                        <p className={checkInfo()}>1</p>
                        <button className={checkAmount()}>
                          <PlusIcon className={checkIcon()} aria-hidden='true' />
                        </button>
                      </div>
                      <button className={checkDelete()}>
                        <TrashIcon className={checkIcon()} aria-hidden='true' />
                      </button>
                    </li>
                  </ul>
                </li>
                <li className={checkOrder()}>
                  <img className={checkImage()} src='/images/coffee-gelado.png' alt='Coffee Delivery' />
                  <ul className={checkItems()}>
                    <li className={checkItem()}>
                      <p className={checkInfo()}>Expresso Gelado</p>
                      <p className={checkInfo()}>R$ 9.90</p>
                    </li>
                    <li className={checkItem()}>
                      <div className={checkController()}>
                        <button className={checkAmount()}>
                          <MinusIcon className={checkIcon()} aria-hidden='true' />
                        </button>
                        <p className={checkInfo()}>1</p>
                        <button className={checkAmount()}>
                          <PlusIcon className={checkIcon()} aria-hidden='true' />
                        </button>
                      </div>
                      <button className={checkDelete()}>
                        <TrashIcon className={checkIcon()} aria-hidden='true' />
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className={checkItems()}>
                <li className={checkItem()}>
                  <p>Total dos itens</p>
                  <p>R$ 19.80</p>
                </li>
                <li className={checkItem()}>
                  <p>Entrega</p>
                  <p>R$ 5.20</p>
                </li>
                <li className={checkItem()}>
                  <p className={checkInfo()}>Valor total</p>
                  <p className={checkInfo()}>R$ 25.00</p>
                </li>
              </ul>
              <button className={checkConfirm()}>
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}