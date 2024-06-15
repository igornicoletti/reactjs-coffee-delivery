import { tv } from 'tailwind-variants'

export const CartVariants = tv({
  slots: {
    cartcontent: 'w-full flex flex-col xl:flex-row gap-16 xl:gap-8 py-16',
    cartrecord: 'w-full flex flex-col gap-8',
    cartsummary: 'w-full xl:max-w-lg flex flex-col gap-8',
    carttitle: 'text-xl md:text-2xl font-medium uppercase',
    cartpanel: 'flex flex-col gap-8',
    cartwrapper: 'w-full flex flex-col gap-8 p-4 md:p-6 rounded-md border border-in-stone bg-in-slate',
    carthead: 'flex flex-col gap-2',
    cartsubtitle: 'text-xl font-medium',
    cartform: 'grid md:grid-cols-3 gap-6',
    cartformhidden: 'hidden md:block md:col-span-2',
    cartformitem: 'h-12 relative col-span-1',
    cartformitens: 'h-12 relative col-span-1 md:col-span-2',
    cartinput: 'w-full h-full px-4 rounded-md peer border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none invalid:border-in-red hover:invalid:border-in-red focus:invalid:border-in-red transition ease-in-out duration-300',
    cartlabel: 'absolute top-3 left-px px-4 font-medium bg-in-slate text-in-cyan peer-focus:text-in-cyan peer-placeholder-shown:text-in-white peer-invalid:text-in-red peer-focus:peer-invalid:text-in-red scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    carterror: 'absolute -bottom-2 right-2 px-4 bg-in-slate font-medium text-xs',
    cartpay: 'w-full flex items-center justify-center px-4 h-12 uppercase cursor-pointer rounded-md border border-in-cyan bg-transparent ui-checked:bg-in-cyan/5 hover:bg-in-cyan/5 ui-checked:text-in-white transition ease-in-out duration-300',
    cartorder: 'flex flex-col divide-y divide-in-stone pb-2',
    cartorderitem: 'flex items-center gap-2 md:gap-4 py-4 first:pt-0',
    cartimage: 'w-12 md:w-16',
    cartinfo: 'w-full flex flex-col gap-1',
    cartbetween: 'flex justify-between gap-2',
    cartdescription: 'font-medium md:text-lg',
    cartaction: 'flex items-center justify-between gap-2',
    carttrash: 'md:hover:text-in-red transition ease-in duration-300',
    carticon: 'size-4 shrink-0',
    cartconfirm: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-in-cyan text-in-dark disabled:cursor-not-allowed disabled:active:scale-100 active:scale-95 transform hover:-translate-y-1 transition ease-in-out duration-300',
  },
  variants: {
    active: {
      true: {
        cartorder: 'xl:pb-9',
      }
    }
  }
})