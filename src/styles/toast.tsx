import { tv } from 'tailwind-variants'

export const ToastVariants = tv({
  slots: {
    toastcontent: 'pointer-events-none fixed inset-0 flex items-end sm:items-start sm:px-6 sm:py-8 p-6 z-50',
    toastwrapper: 'w-full flex flex-col gap-4 items-center sm:items-end',
    toastpanel: 'pointer-events-auto relative w-full min-w-80 md:min-w-96 max-w-md flex flex-col py-4 px-6 rounded shadow-lg bg-in-slate border-b-4',
    toasttitle: 'font-medium',
    toastinfo: 'font-medium text-sm',
    toastaction: 'absolute top-0 right-0 p-2 group',
    toasticon: 'size-4 shrink-0 text-in-white/50 group-hover:text-in-white transition ease-in-out duration-300',
  },
  variants: {
    color: {
      info: {
        toastpanel: 'border-b-in-cyan'
      },
      error: {
        toastpanel: 'border-b-in-red'
      },
      success: {
        toastpanel: 'border-b-in-green'
      },
      warning: {
        toastpanel: 'border-b-in-purple'
      }
    }
  }
})