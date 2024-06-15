import { tv } from 'tailwind-variants'

export const HeaderVariants = tv({
  slots: {
    headercontent: 'w-full flex items-center justify-between py-8',
    headertitle: 'text-2xl md:text-3xl font-semibold uppercase text-in-cyan hover:animate-pulse transition ease-in-out duration-300',
    headercart: 'relative',
    headerbutton: 'flex items-center justify-center p-2 rounded-md bg-in-stone md:hover:bg-in-cyan text-in-cyan md:hover:text-in-stone aria-[current=page]:bg-in-cyan aria-[current=page]:text-in-stone transition ease-in-out duration-300',
    headericon: 'size-6 shrink-0',
    headerbadge: 'absolute min-w-5 h-5 -top-2 -right-2',
    headerping: 'animate-ping absolute w-full h-full rounded-full bg-in-cyan/25',
    headerquantity: 'relative flex items-center justify-center text-sm font-bold rounded-full min-w-5 h-5 p-1 border-2 border-in-dark text-in-stone bg-in-cyan',
  }
})