import { Link } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { variantsBase, variantsCheckout } from '../styles/variants'
import { BanknotesIcon, MapPinIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()
const { checkout, checkAmount, checkCard, checkComplete, checkConfirm, checkController, checkDelete, checkDescription, checkGrid, checkHidden, checkIcon, checkImage, checkInfo, checkInput, checkInputs, checkItem, checkItems, checkLayout, checkMain, checkMoney, checkName, checkOrder, checkOrders, checkSelected, checkShrink, checkTitle, checkWrapper } = variantsCheckout()

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
                  <MapPinIcon className={checkShrink()} aria-hidden='true' />
                  <div className={checkMain()}>
                    <p className={checkName()}>Endereço de entrega</p>
                    <span className={checkDescription()}>Informe o endereço onde deseja receber o seu pedido.</span>
                  </div>
                </div>
                <div className={checkGrid()}>
                  <input className={checkInputs()} type='number' name='' id='' placeholder='CEP' />
                  <span className={checkHidden()}></span>
                  <input className={checkInput()} type='text' name='' id='' placeholder='Endereço' />
                  <input className={checkInputs()} type='number' name='' id='' placeholder='Número' />
                  <input className={checkInputs()} type='text' name='' id='' placeholder='Bairro' />
                  <input className={checkInputs()} type='text' name='' id='' placeholder='Cidade' />
                  <input className={checkInputs()} type='text' name='' id='' placeholder='Estado' />
                </div>
              </div>
              <div className={checkCard()}>
                <div className={checkWrapper()}>
                  <BanknotesIcon className={checkShrink()} aria-hidden='true' />
                  <div className={checkMain()}>
                    <p className={checkName()}>Forma de pagamento</p>
                    <span className={checkDescription()}>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
                  </div>
                </div>
                <div className={checkGrid()}>
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
              <Link className={checkConfirm()} to='/checkout/success'>
                Confirmar pedido
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}