import { tv } from 'tailwind-variants'

export const ErrorVariants = tv({
  slots: {
    errorbase: 'relative h-full min-h-screen w-full grid content-center',
    errorcontainer: 'w-full max-w-screen-xl mx-auto px-8',
    errorcontent: 'flex flex-col items-center text-center gap-4 py-16',
    errortitle: 'font-medium text-2xl',
    errorstatus: 'max-w-2xl text-lg',
  }
})