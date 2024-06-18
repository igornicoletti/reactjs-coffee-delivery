import { Form } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { FormProps } from '../types'
import { CartVariants } from '../styles'
import { UseCart, UseToast } from '../hooks'
import { ModalComponent, QuantityComponent } from '../components'

const { cartcontent, cartrecord, cartsummary, carttitle, cartpanel, cartwrapper, carthead, cartsubtitle,
  cartform, cartformhidden, cartformitem, cartformitens, cartinput, cartlabel, carterror, cartpay, cartorder,
  cartorderitem, cartimage, cartinfo, cartbetween, cartdescription, cartaction, carttrash, carticon, cartconfirm } = CartVariants()

const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de dédito']

export const CartPage = () => {
  const toast = UseToast()
  const { control, register, handleSubmit, formState: { errors } } = useForm<FormProps>({ defaultValues: { payment: payment[0] } })
  const { cart, handleRemoveProduct, handleIncrementProduct, handleDecrementProduct, handleValidateProduct } = UseCart()

  const [currentModal, setCurrentModal] = useState<boolean>(false)
  const [currentForm, setCurrentForm] = useState<FormProps>(() => {
    const storedStateAsJSON = sessionStorage.getItem('@coffee-delivery:form')
    if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
    return {}
  })

  const currentFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  const currentValue = cart?.reduce((prev, current) => prev += current.price * current.quantity, 0)

  const handleSubmitCart: SubmitHandler<FormProps> = (data) => {
    setCurrentForm(data)
    setCurrentModal(true)
  }

  const handleRemoveCart = (id: number, title: string) => {
    handleRemoveProduct(id)
    toast.warning({
      title: `${title}`,
      description: 'foi removido do carrinho!'
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(currentForm)
    sessionStorage.setItem('@coffee-delivery:form', stateJSON)
  }, [currentForm])

  return (
    <div className={cartcontent()}>
      <div className={cartrecord()}>
        <h3 className={carttitle()}>Complete seu pedido</h3>
        <Form className={cartpanel()} id={'cart'} onSubmit={handleSubmit(handleSubmitCart)}>
          <div className={cartwrapper()}>
            <div className={carthead()}>
              <p className={cartsubtitle()}>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido.</span>
            </div>
            <div className={cartform()}>
              <div className={cartformitem()}>
                <input className={cartinput()} defaultValue={currentForm.cep} type={'number'} id={'cep'} placeholder={' '}
                  {...register('cep', { valueAsNumber: true, required: { value: true, message: 'Por favor, informe um CEP.' } })} />
                <label className={cartlabel()} htmlFor={'cep'}>CEP</label>
                {errors.cep && <span className={carterror()}>{errors.cep.message}</span>}
              </div>
              <span className={cartformhidden()}></span>
              <div className={cartformitens()}>
                <input className={cartinput()} defaultValue={currentForm.street} type={'text'} id={'street'} placeholder={' '}
                  {...register('street', { required: { value: true, message: 'Por favor, informe um endereço.' } })} />
                <label className={cartlabel()} htmlFor={'street'}>Endereço</label>
                {errors.street && <span className={carterror()}>{errors.street.message}</span>}
              </div>
              <div className={cartformitem()}>
                <input className={cartinput()} defaultValue={currentForm.number} type={'number'} id={'number'} placeholder={' '}
                  {...register('number', { valueAsNumber: true, required: { value: true, message: 'Por favor, informe um número.' } })} />
                <label className={cartlabel()} htmlFor={'number'}>Número</label>
                {errors.number && <span className={carterror()}>{errors.number.message}</span>}
              </div>
              <div className={cartformitem()}>
                <input className={cartinput()} defaultValue={currentForm.neighborhood} type={'text'} id={'neighborhood'} placeholder={' '}
                  {...register('neighborhood', { required: { value: true, message: 'Por favor, informe um bairro.' } })} />
                <label className={cartlabel()} htmlFor={'neighborhood'}>Bairro</label>
                {errors.neighborhood && <span className={carterror()}>{errors.neighborhood.message}</span>}
              </div>
              <div className={cartformitem()}>
                <input className={cartinput()} defaultValue={currentForm.city} type={'text'} id={'city'} placeholder={' '}
                  {...register('city', { required: { value: true, message: 'Por favor, informe uma cidade.' } })} />
                <label className={cartlabel()} htmlFor={'city'}>Cidade</label>
                {errors.city && <span className={carterror()}>{errors.city.message}</span>}
              </div>
              <div className={cartformitem()}>
                <input className={cartinput()} defaultValue={currentForm.uf} type={'text'} id={'uf'} placeholder={' '}
                  {...register('uf', { required: { value: true, message: 'Por favor, informe um estado.' } })} />
                <label className={cartlabel()} htmlFor={'uf'}>UF</label>
                {errors.uf && <span className={carterror()}>{errors.uf.message}</span>}
              </div>
            </div>
          </div>
          <div className={cartwrapper()}>
            <div className={carthead()}>
              <p className={cartsubtitle()}>Forma de pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
            <Controller control={control} name={'payment'} render={({ field }) => (
              <RadioGroup className={cartform()} onChange={field.onChange} value={field.value}>
                {payment.map((pay) => (
                  <RadioGroup.Option className={cartpay()} key={pay} value={pay}>
                    <span>{pay}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            )} />
          </div>
        </Form>
      </div>
      <div className={cartsummary()}>
        <h3 className={carttitle()}>Cafés selecionados</h3>
        <div className={cartwrapper()}>
          {cart?.length > 0 && (
            <ul className={cart.length === 3 ? cartorder({ active: true }) : cartorder()}>
              {cart.map((product) => (
                <li className={cartorderitem()} key={product.id}>
                  <img className={cartimage()} src={product.image} alt={'Coffee Delivery'} />
                  <div className={cartinfo()}>
                    <div className={cartbetween()}>
                      <p className={cartdescription()}>{product.title}</p>
                      <p className={cartdescription()}>{currentFormat.format(product.price * product.quantity)}</p>
                    </div>
                    <div className={cartaction()}>
                      <QuantityComponent
                        currentQuantity={product.quantity}
                        handleAddQuantity={() => handleIncrementProduct(product.id)}
                        handleRemoveQuantity={() => handleDecrementProduct(product.id)}
                        handleValidateQuantity={(event) => handleValidateProduct(product.id, event)} />
                      <button className={carttrash()} onClick={() => handleRemoveCart(product.id, product.title)} type={'button'}>
                        <TrashIcon className={carticon()} aria-hidden={true} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <ul className={cartinfo()}>
            <li className={cartbetween()}>
              <p>Subtotal:</p>
              <p>{currentFormat.format(currentValue)}</p>
            </li>
            <li className={cartbetween()}>
              <p>Entrega:</p>
              <p>R$ 9.90</p>
            </li>
            <li className={cartbetween()}>
              <p className={cartdescription()}>Total do pedido:</p>
              <p className={cartdescription()}>{currentFormat.format(currentValue + 9.90)}</p>
            </li>
          </ul>
          <button className={cartconfirm()} form={'cart'} disabled={!currentValue} type={'submit'}>
            <span>Confirmar pedido</span>
          </button>
        </div>
      </div>
      <ModalComponent currentModal={currentModal} currentForm={currentForm} />
    </div>
  )
}