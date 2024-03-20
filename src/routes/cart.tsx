import { useState } from 'react'
import { Modal } from '../components/modal'
import { RadioGroup } from '@headlessui/react'
import { useCart } from '../hooks/cart-context'
import { CheckoutVariants } from '../styles/variants'
import { TrashIcon } from '@heroicons/react/24/outline'

const { cartContent, cartRecord, cartSummary, cartTitle, cartPanel, cartWrapper, cartHead, cartSubtitle, cartForm, cartFormHidden, cartFormItem, cartFormItens, cartInput, cartLabel, cartPay, cartOrder, cartOrderItem, cartImage, cartInfo, cartBetween, cartDescription, cartAction, cartTrash, cartIcon, cartConfirm } = CheckoutVariants()

const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de dédito']

export const Cart = () => {
  const { cart, handleRemoveProduct } = useCart()
  const [currentPay, setCurrentPay] = useState<string[]>([])
  const [currentModal, setCurrentModal] = useState<boolean>(false)

  const handleCurrentCheckout = () => setCurrentModal(true)

  return (
    <div className={cartContent()}>
      <div className={cartRecord()}>
        <h3 className={cartTitle()}>Complete seu pedido</h3>
        <div className={cartPanel()}>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <form className={cartForm()}>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='number' name='cep' id='cep' placeholder=' ' />
                <label className={cartLabel()} htmlFor='cep'>CEP</label>
              </div>
              <span className={cartFormHidden()}></span>
              <div className={cartFormItens()}>
                <input className={cartInput()} type='text' name='address' id='address' placeholder=' ' />
                <label className={cartLabel()} htmlFor='address'>Endereço</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='number' name='num' id='num' placeholder=' ' />
                <label className={cartLabel()} htmlFor='num'>Número</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' name='neighbor' id='neighbor' placeholder=' ' />
                <label className={cartLabel()} htmlFor='neighbor'>Bairro</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' name='city' id='city' placeholder=' ' />
                <label className={cartLabel()} htmlFor='city'>Cidade</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' name='state' id='state' placeholder=' ' />
                <label className={cartLabel()} htmlFor='state'>UF</label>
              </div>
            </form>
          </div>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Forma de pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <RadioGroup className={cartForm()} onChange={setCurrentPay} value={currentPay}>
              {payment.map((pay) => (
                <RadioGroup.Option className={cartPay()} key={pay} value={pay}>
                  <span>{pay}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className={cartSummary()}>
        <h3 className={cartTitle()}>Cafés selecionados</h3>
        <div className={cartWrapper()}>
          <ul className={cartOrder()}>
            {cart.map((data) => (
              <li className={cartOrderItem()} key={data.id}>
                <img className={cartImage()} src={data.image} alt='Coffee Delivery' />
                <div className={cartInfo()}>
                  <div className={cartBetween()}>
                    <p className={cartDescription()}>{data.title}</p>
                    <p className={cartDescription()}>
                      {(data.price * data.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                  </div>
                  <div className={cartAction()}>
                    <div>{data.quantity}</div>
                    <button className={cartTrash()} onClick={() => handleRemoveProduct(data.id)}>
                      <TrashIcon className={cartIcon()} aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className={cartInfo()}>
            <li className={cartBetween()}>
              <p>Total dos itens</p>
              <p>R$ 19.80</p>
            </li>
            <li className={cartBetween()}>
              <p>Entrega</p>
              <p>R$ 5.20</p>
            </li>
            <li className={cartBetween()}>
              <p className={cartDescription()}>Valor total</p>
              <p className={cartDescription()}>R$ 25.00</p>
            </li>
          </ul>
          <button className={cartConfirm()} onClick={handleCurrentCheckout}>
            <span>Confirmar pedido</span>
          </button>
          <Modal currentModal={currentModal} />
        </div>
      </div>
    </div>
  )
}