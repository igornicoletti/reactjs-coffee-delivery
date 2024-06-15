import { tv } from 'tailwind-variants'

export const ModalVariants = tv({
  slots: {
    modalcontent: 'relative z-10',
    modalbackdrop: 'fixed inset-0 bg-black/25',
    modaldialog: 'fixed inset-0 overflow-y-auto',
    modalinfo: 'flex min-h-full items-center justify-center text-center p-4',
    modalpanel: 'w-full max-w-xl flex flex-col items-center gap-2 transform overflow-hidden rounded-md shadow-lg bg-in-slate p-4 pt-6 align-middle transition-all',
    modalicon: 'animate-bounce size-12 shrink-0 text-in-cyan',
    modaltitle: 'text-2xl font-medium',
    modaldescription: 'font-medium',
    modalsumary: 'flex flex-col gap-2 py-6',
    modalaction: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-in-cyan text-in-slate active:scale-95 transform transition ease-in-out duration-300',
  }
})