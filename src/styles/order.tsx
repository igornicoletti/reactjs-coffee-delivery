import { tv } from 'tailwind-variants'

export const OrderVariants = tv({
  slots: {
    orderitem: 'flex items-center gap-2 md:gap-4 py-4 first:pt-0',
    orderimage: 'w-12 md:w-16',
    orderinfo: 'w-full flex flex-col gap-1',
    orderbetween: 'flex justify-between gap-2',
    orderdescription: 'font-medium md:text-lg',
    orderaction: 'flex items-center justify-between gap-2',
    ordertrash: 'md:hover:text-in-red transition ease-in duration-300',
    ordericon: 'size-4 shrink-0',
  }
})