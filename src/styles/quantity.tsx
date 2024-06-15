import { tv } from 'tailwind-variants'

export const QuantityVariants = tv({
  slots: {
    quantitycontent: 'w-full max-w-28 flex items-center justify-center gap-2',
    quantitybutton: 'px-2 hover:text-in-cyan disabled:hover:text-in-white disabled:cursor-not-allowed transition ease-in-out duration-300',
    quantityvalue: 'w-full min-w-6 text-center font-medium bg-transparent focus:outline-none',
    quantityicon: 'size-4 shrink-0',
  }
})