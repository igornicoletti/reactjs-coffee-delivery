import { Form } from 'react-router-dom'
import { useCart } from '../hooks/cart'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RadioGroup } from '@headlessui/react'
import { CheckoutVariants } from '../styles/variants'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Modal } from '../components/modal'

const { cartContent, cartRecord, cartSummary, cartTitle, cartPanel, cartWrapper, cartHead, cartSubtitle, cartForm, cartFormHidden, cartFormItem, cartFormItens, cartInput, cartLabel, cartPay, cartOrder, cartOrderItem, cartImage, cartInfo, cartBetween, cartDescription, cartAction, cartTrash, cartIcon, cartConfirm } = CheckoutVariants()

const delivery = 5.20
const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de dédito']

export type FormValues = {
  cep: number
  address: string
  city: string
  neighbor: string
  num: number
  state: string
  payment: string
}

export const Cart = () => {
  const { cart, handleRemoveProduct } = useCart()
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const [currentPay, setCurrentPay] = useState<string>('Dinheiro')
  const [currentModal, setCurrentModal] = useState<boolean>(false)
  const handlePrice = cart.reduce((prev, current) => prev += current.price * current.quantity, 0)

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data)

    setCurrentModal(true)
    reset()
  }

  return (
    <div className={cartContent()}>
      <div className={cartRecord()}>
        <h3 className={cartTitle()}>Complete seu pedido</h3>
        <Form className={cartPanel()} id='cart' onSubmit={handleSubmit(onSubmit)}>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <div className={cartForm()}>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='number' id='cep' placeholder=' '
                  {...register('cep', { required: true, valueAsNumber: true })} />
                <label className={cartLabel()} htmlFor='cep'>CEP</label>
              </div>
              <span className={cartFormHidden()}></span>
              <div className={cartFormItens()}>
                <input className={cartInput()} type='text' id='address' placeholder=' '
                  {...register('address', { required: true })} />
                <label className={cartLabel()} htmlFor='address'>Endereço</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='number' id='num' placeholder=' '
                  {...register('num', { required: true, valueAsNumber: true })} />
                <label className={cartLabel()} htmlFor='num'>Número</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' id='neighbor' placeholder=' '
                  {...register('neighbor', { required: true })} />
                <label className={cartLabel()} htmlFor='neighbor'>Bairro</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' id='city' placeholder=' '
                  {...register('city', { required: true })} />
                <label className={cartLabel()} htmlFor='city'>Cidade</label>
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} type='text' id='state' placeholder=' '
                  {...register('state', { required: true })} />
                <label className={cartLabel()} htmlFor='state'>UF</label>
              </div>
            </div>
          </div>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Forma de pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <RadioGroup className={cartForm()} value={currentPay} onChange={setCurrentPay}>
              {payment.map((pay) => (
                <RadioGroup.Option className={cartPay()} key={pay} value={pay}>
                  <span>{pay}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </Form>
      </div>
      <div className={cartSummary()}>
        <h3 className={cartTitle()}>Cafés selecionados</h3>
        <div className={cartWrapper()}>
          <ul className={cartOrder()}>
            {cart.map((product) => (
              <li className={cartOrderItem()} key={product.id}>
                <img className={cartImage()} src={product.image} alt='Coffee Delivery' />
                <div className={cartInfo()}>
                  <div className={cartBetween()}>
                    <p className={cartDescription()}>{product.title}</p>
                    <p className={cartDescription()}>
                      {(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                  </div>
                  <div className={cartAction()}>
                    <div>{product.quantity}</div>
                    <button className={cartTrash()} onClick={() => handleRemoveProduct(product.id)}>
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
              <p>{handlePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
            <li className={cartBetween()}>
              <p>Entrega</p>
              <p>{delivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
            <li className={cartBetween()}>
              <p className={cartDescription()}>Valor total</p>
              <p className={cartDescription()}>{(handlePrice + delivery).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </li>
          </ul>
          <button className={cartConfirm()} form='cart'>
            <span>Confirmar pedido</span>
          </button>
        </div>
      </div>
      <Modal currentModal={currentModal} currentPay={currentPay} />
    </div>
  )
}