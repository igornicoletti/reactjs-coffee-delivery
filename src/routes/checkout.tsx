import { Navbar } from '../components/navbar'
import { variantsBase } from '../styles/variants'
import { BanknotesIcon, BuildingLibraryIcon, CreditCardIcon, MapPinIcon, MinusCircleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'

const { base, container } = variantsBase()

export function Checkout() {
  return (
    <div className={base()}>
      <div className={container()}>
        <Navbar />

        <div className='w-full flex flex-col xl:flex-row py-16 gap-16 xl:gap-8'>
          <div className='w-full flex flex-col gap-6'>
            <h2 className='text-xl font-medium uppercase'>Complete seu pedido</h2>
            <div className='flex flex-col gap-8'>
              <div className='w-full flex flex-col gap-8 p-4 md:p-6 rounded border border-dracula-line bg-dracula-line/10'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                  <MapPinIcon className='size-6 shrink-0 text-dracula-cyan' aria-hidden='true' />
                  <div className='flex flex-col text-center md:text-left'>
                    <p className='text-xl font-medium'>Endereço de entrega</p>
                    <span>Informe o endereço onde deseja receber o seu pedido.</span>
                  </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                  <input type="number" name="CEP" id="" placeholder='CEP'
                    className='h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                  <span className='hidden md:block md:col-span-2'></span>
                  <input type="text" name="Endereço" id="" placeholder='Endereço'
                    className='md:col-span-2 h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                  <input type="number" name="Número" id="" placeholder='Número'
                    className='h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                  <input type="text" name="Bairro" id="" placeholder='Bairro'
                    className='h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                  <input type="text" name="Cidade" id="" placeholder='Cidade'
                    className='h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                  <input type="text" name="Estado" id="" placeholder='Estado'
                    className='h-12 px-4 py-2 bg-inherit rounded border border-dracula-line hover:border-dracula-foreground focus:border-dracula-foreground focus:outline-none' />
                </div>
              </div>
              <div className='w-full flex flex-col gap-8 p-4 md:p-6 rounded border border-dracula-line bg-dracula-line/10'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                  <BuildingLibraryIcon className='size-6 shrink-0 text-dracula-cyan' aria-hidden='true' />
                  <div className='flex flex-col text-center md:text-left'>
                    <p className='text-xl font-medium'>Forma de pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
                  </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                  <button className='flex items-center justify-center gap-2 px-6 h-12 font-medium rounded bg-dracula-line/25 hover:bg-dracula-cyan hover:text-dracula-dark border border-dracula-line active:scale-90 transition ease-in-out duration-300'>
                    <BanknotesIcon className='size-4' aria-hidden='true' />
                    <span>Dinheiro</span>
                  </button>
                  <button className='flex items-center justify-center gap-2 px-6 h-12 font-medium rounded bg-dracula-line/25 hover:bg-dracula-cyan hover:text-dracula-dark border border-dracula-line active:scale-90 transition ease-in-out duration-300'>
                    <CreditCardIcon className='size-4' aria-hidden='true' />
                    <span>Cartão de crédito</span>
                  </button>
                  <button className='flex items-center justify-center gap-2 px-6 h-12 font-medium rounded bg-dracula-line/25 hover:bg-dracula-cyan hover:text-dracula-dark border border-dracula-line active:scale-90 transition ease-in-out duration-300'>
                    <CreditCardIcon className='size-4' aria-hidden='true' />
                    <span>Cartão de dédito</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full xl:max-w-lg flex flex-col gap-6'>
            <h2 className='text-xl font-medium uppercase'>Cafés selecionados</h2>
            <div className='w-full flex flex-col gap-8 p-4 md:p-6 rounded border border-dracula-line bg-dracula-line/10'>
              <ul className='flex flex-col divide-y divide-dracula-line'>
                <li className='flex items-center gap-4 py-4'>
                  <img src='/images/coffee-cremoso.png' alt='Coffee Delivery' className='w-16 hidden md:block' />
                  <div className='w-full flex flex-col gap-1'>
                    <div className='flex justify-between gap-6 font-medium text-lg'>
                      <p>Expresso Cremoso</p>
                      <p>R$ 9.90</p>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                      <div className='flex items-center gap-6'>
                        <button className='hover:text-dracula-cyan transition ease-in duration-300'>
                          <MinusCircleIcon className='size-6' aria-hidden='true' />
                        </button>
                        <p className='text-lg font-medium'>1</p>
                        <button className='hover:text-dracula-cyan transition ease-in duration-300'>
                          <PlusCircleIcon className='size-6' aria-hidden='true' />
                        </button>
                      </div>
                      <button className='hover:text-dracula-red transition ease-in duration-300'>
                        <TrashIcon className='size-5' aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </li>
                <li className='flex items-center gap-4 py-4'>
                  <img src='/images/coffee-mocaccino.png' alt='Coffee Delivery' className='w-16 hidden md:block' />
                  <div className='w-full flex flex-col gap-1'>
                    <div className='flex justify-between gap-6 font-medium text-lg'>
                      <p>Mocaccino</p>
                      <p>R$ 9.90</p>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                      <div className='flex items-center gap-6'>
                        <button className='hover:text-dracula-cyan transition ease-in duration-300'>
                          <MinusCircleIcon className='size-6' aria-hidden='true' />
                        </button>
                        <p className='text-lg font-medium'>1</p>
                        <button className='hover:text-dracula-cyan transition ease-in duration-300'>
                          <PlusCircleIcon className='size-6' aria-hidden='true' />
                        </button>
                      </div>
                      <button className='hover:text-dracula-red transition ease-in duration-300'>
                        <TrashIcon className='size-5' aria-hidden='true' />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='flex flex-col gap-1'>
                <li className='flex justify-between gap-4'>
                  <p>Total dos itens</p>
                  <p>R$ 19.80</p>
                </li>
                <li className='flex justify-between gap-4'>
                  <p>Entrega</p>
                  <p>R$ 5.20</p>
                </li>
                <li className='flex justify-between gap-4 font-medium text-lg uppercase'>
                  <p>Valor total</p>
                  <p>R$ 25.00</p>
                </li>
              </ul>
              <button className='w-full flex items-center justify-center px-6 h-12 font-medium rounded uppercase text-dracula-dark bg-dracula-cyan active:scale-90 transition ease-in-out duration-300'>
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}