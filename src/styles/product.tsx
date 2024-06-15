import { tv } from 'tailwind-variants'

export const ProductVariants = tv({
  slots: {
    productcontent: 'w-full flex flex-col gap-12 py-16',
    producthead: 'w-full flex flex-col lg:flex-row justify-between gap-4',
    producttitle: 'text-3xl font-medium uppercase',
    productcard: 'grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6',
    productfilter: 'flex flex-wrap -ml-4 lg:ml-0 lg:-mr-4',
    productaction: 'flex items-center justify-center first:hidden md:first:flex first px-4 py-2 uppercase cursor-pointer md:hover:text-in-cyan transition ease-in-out duration-300',
    producticon: 'size-6 shrink-0 text-in-cyan -mt-1',
  },
  variants: {
    active: {
      true: {
        productaction: 'font-medium text-in-cyan',
      }
    }
  }
})