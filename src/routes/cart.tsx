import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { FormProps } from '../types/form'
import { Modal } from '../components/modal'
import { RadioGroup } from '@headlessui/react'
import { CartVariants } from '../styles/variants'
import { CartContextProvider } from '../hooks/cart'
import { TrashIcon } from '@heroicons/react/24/outline'
import { SubmitHandler, useForm } from 'react-hook-form'

const { cartContent, cartRecord, cartSummary, cartTitle, cartPanel, cartWrapper, cartHead, cartSubtitle, cartForm, cartFormHidden, cartFormItem, cartFormItens, cartInput, cartLabel, cartError, cartPay, cartOrder, cartOrderItem, cartImage, cartInfo, cartBetween, cartDescription, cartAction, cartTrash, cartIcon, cartConfirm } = CartVariants()

const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de dédito']

export const Cart = () => {
  const { cart, handleRemoveProduct } = CartContextProvider()
  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

  const [currentPay, setCurrentPay] = useState<string>(payment[0])
  const [currentModal, setCurrentModal] = useState<boolean>(false)
  const [currentForm, setCurrentForm] = useState<FormProps>(() => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:form')
    if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
    return []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(currentForm)
    localStorage.setItem('@coffee-delivery:form', stateJSON)
  }, [currentForm])

  const currentValue = cart?.reduce((prev, current) => prev += current.price * current.quantity, 0)

  const handleSubmitCart: SubmitHandler<FormProps> = (data) => {
    setCurrentForm({ ...data, payment: data.payment = currentPay })
    setCurrentModal(true)
  }

  return (
    <div className={cartContent()}>
      <div className={cartRecord()}>
        <h3 className={cartTitle()}>Complete seu pedido</h3>
        <Form className={cartPanel()} id='cart' onSubmit={handleSubmit(handleSubmitCart)}>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <div className={cartForm()}>
              <div className={cartFormItem()}>
                <input className={cartInput()} value={currentForm.cep} type='number' id='cep' placeholder=' '
                  {...register('cep', { required: { value: true, message: 'Por favor, informe um CEP.' }, minLength: { value: 8, message: 'CEP inválido!' }, maxLength: { value: 8, message: 'CEP inválido!' } })} />
                <label className={cartLabel()} htmlFor='cep'>CEP</label>
                {errors.cep && <span className={cartError()}>{errors.cep.message}</span>}
              </div>
              <span className={cartFormHidden()}></span>
              <div className={cartFormItens()}>
                <input className={cartInput()} value={currentForm.street} type='text' id='street' placeholder=' '
                  {...register('street', { required: { value: true, message: 'Por favor, informe um endereço.' } })} />
                <label className={cartLabel()} htmlFor='street'>Endereço</label>
                {errors.street && <span className={cartError()}>{errors.street.message}</span>}
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} value={currentForm.number} type='number' id='number' placeholder=' '
                  {...register('number', { required: { value: true, message: 'Por favor, informe um número.' } })} />
                <label className={cartLabel()} htmlFor='number'>Número</label>
                {errors.number && <span className={cartError()}>{errors.number.message}</span>}
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} value={currentForm.neighborhood} type='text' id='neighborhood' placeholder=' '
                  {...register('neighborhood', { required: { value: true, message: 'Por favor, informe um bairro.' } })} />
                <label className={cartLabel()} htmlFor='neighborhood'>Bairro</label>
                {errors.neighborhood && <span className={cartError()}>{errors.neighborhood.message}</span>}
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} value={currentForm.city} type='text' id='city' placeholder=' '
                  {...register('city', { required: { value: true, message: 'Por favor, informe uma cidade.' } })} />
                <label className={cartLabel()} htmlFor='city'>Cidade</label>
                {errors.city && <span className={cartError()}>{errors.city.message}</span>}
              </div>
              <div className={cartFormItem()}>
                <input className={cartInput()} value={currentForm.uf} type='text' id='uf' placeholder=' '
                  {...register('uf', { required: { value: true, message: 'Por favor, informe um estado.' } })} />
                <label className={cartLabel()} htmlFor='uf'>UF</label>
                {errors.uf && <span className={cartError()}>{errors.uf.message}</span>}
              </div>
            </div>
          </div>
          <div className={cartWrapper()}>
            <div className={cartHead()}>
              <p className={cartSubtitle()}>Forma de pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <RadioGroup className={cartForm()} value={currentForm.payment} onChange={setCurrentPay}>
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
          {cart?.length > 0 && (
            <ul className={cart.length === 3 ? cartOrder({ active: true }) : cartOrder()}>
              {cart.map((product) => (
                <li className={cartOrderItem()} key={product.id}>
                  <img className={cartImage()} src={product.image} alt='Coffee Delivery' />
                  <div className={cartInfo()}>
                    <div className={cartBetween()}>
                      <p className={cartDescription()}>{product.title}</p>
                      <p className={cartDescription()}>{(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className={cartAction()}>
                      <p>{product.quantity}</p>
                      <button className={cartTrash()} onClick={() => handleRemoveProduct(product.id)}>
                        <TrashIcon className={cartIcon()} aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <ul className={cartInfo()}>
            <li className={cartBetween()}>
              <p>Subtotal:</p>
              <p>{new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(currentValue)}</p>
            </li>
            <li className={cartBetween()}>
              <p>Entrega:</p>
              <p>R$ 9.90</p>
            </li>
            <li className={cartBetween()}>
              <p className={cartDescription()}>Total do pedido:</p>
              <p className={cartDescription()}>{new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(currentValue + 9.90)}</p>
            </li>
          </ul>
          <button className={cartConfirm()} form='cart' disabled={!currentValue}>
            <span>Confirmar pedido</span>
          </button>
        </div>
      </div>
      <Modal currentModal={currentModal} currentForm={currentForm} />
    </div>
  )
}