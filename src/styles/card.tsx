import { tv } from 'tailwind-variants'

export const CardVariants = tv({
  slots: {
    cardcontent: 'flex flex-col rounded-md odd:rounded-tr-3xl even:rounded-tl-3xl odd:rounded-bl-3xl even:rounded-br-3xl gap-6 p-4 pt-0 border border-in-stone bg-in-slate shadow-md hover:shadow-xl transition ease-in-out duration-300',
    cardimage: 'hover:animate-spin w-32 mx-auto -mt-4',
    cardcategory: 'flex items-center justify-center gap-2',
    carditem: 'text-xs uppercase px-3 py-1 rounded-full bg-in-cyan/5 text-in-cyan',
    carddescription: 'flex flex-col text-center gap-2',
    cardtitle: 'text-xl font-medium uppercase',
    cardsubtitle: 'px-4',
    cardinfo: 'flex items-end justify-between gap-2 mt-auto',
    cardprice: 'text-2xl',
    cardaction: 'flex items-center justify-between gap-2',
    cardquantity: 'h-10 w-full flex items-center justify-center rounded-md border border-in-stone hover:border-in-white transition ease-in-out duration-300',
    cardcart: 'h-10 w-10 px-2 flex items-center justify-center rounded-md bg-in-stone hover:bg-in-cyan disabled:hover:bg-in-stone text-in-cyan hover:text-in-stone disabled:hover:text-in-cyan disabled:cursor-not-allowed  active:scale-95 transform transition ease-in-out duration-300',
    cardicon: 'size-6 shrink-0',
  }
})