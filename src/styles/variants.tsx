import { tv } from 'tailwind-variants'

export const rootVariants = tv({
  slots: {
    rootLayout: 'relative w-full h-full min-h-screen grid content-start overflow-x-hidden',
    rootContainer: 'w-full max-w-screen-2xl mx-auto px-6',
  }
})

export const headerVariants = tv({
  slots: {
    headerContent: 'w-full flex items-center justify-between py-8',
    headerTitle: 'text-2xl md:text-3xl font-semibold uppercase text-dracula-cyan hover:animate-pulse transition ease-in-out duration-300',
    headerCart: 'relative',
    headerButton: 'flex items-center justify-center p-2 rounded-md bg-dracula-line hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-line transition ease-in-out duration-300',
    headerIcon: 'size-6 shrink-0',
    headerBadge: 'absolute min-w-5 h-5 -top-2 -right-2',
    headerPing: 'animate-ping absolute w-full h-full rounded-full bg-dracula-cyan/25',
    headerQuantity: 'relative flex items-center justify-center text-sm font-bold rounded-full min-w-5 h-5 p-1 border-2 border-dracula-dark text-dracula-line bg-dracula-cyan',
  },
  variants: {
    active: {
      true: {
        headerButton: 'bg-dracula-cyan text-dracula-line',
      }
    }
  }
})

export const heroVariants = tv({
  slots: {
    heroContent: 'w-full flex flex-col xl:flex-row items-center justify-between gap-8 py-16',
    heroHead: 'w-full max-w-2xl flex flex-col gap-12',
    heroTitle: 'text-3xl md:text-5xl px-2 xl:px-0 font-medium text-center xl:text-left',
    heroSubtitle: 'max-w-lg text-xl md:text-3xl text-center xl:text-left mx-auto xl:mx-0',
    heroDescription: 'grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-8 pb-8 xl:pb-0 md:mx-auto xl:mx-0 xl:pt-8',
    heroDescriptionItem: 'flex items-center gap-4 md:text-lg',
    heroImageMobile: 'w-full max-w-lg md:hidden',
    heroImageDesk: 'w-full max-w-xl lg:max-w-xl xl:max-w-2xl hidden md:block',
    heroIcon: 'size-6 shrink-0 text-dracula-cyan',
  }
})

export const productVariants = tv({
  slots: {
    productContent: 'w-full flex flex-col gap-12 py-16',
    productHead: 'w-full flex flex-col lg:flex-row justify-between gap-4',
    productTitle: 'text-3xl font-medium uppercase',
    productCard: 'grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6',
    productFilter: 'flex flex-wrap -ml-4 lg:ml-0 lg:-mr-4',
    productFilterItem: 'flex items-center justify-center px-4 py-2 font-medium uppercase cursor-pointer md:hover:text-dracula-cyan transition ease-in-out duration-300',
  },
  variants: {
    active: {
      true: {
        productFilterItem: 'animate-bounce text-dracula-cyan',
      }
    }
  }
})

export const cardVariants = tv({
  slots: {
    cardContent: 'flex flex-col rounded-md odd:rounded-tr-3xl even:rounded-tl-3xl odd:rounded-bl-3xl even:rounded-br-3xl gap-6 p-4 pt-0 border border-dracula-line bg-dracula-wrapper shadow-md hover:shadow-xl transition ease-in-out duration-300',
    cardImage: 'hover:animate-spin w-32 mx-auto -mt-4',
    cardCategory: 'flex items-center justify-center gap-2',
    cardCategoryItem: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/5 text-dracula-cyan',
    cardDescription: 'flex flex-col text-center gap-2',
    cardTitle: 'text-xl font-medium uppercase',
    cardSubtitle: 'px-4',
    cardInfo: 'flex items-end justify-between gap-2 pt-2 mt-auto',
    cardPrice: 'text-2xl',
    cardAction: 'flex items-center justify-between gap-2',
    cardCart: 'h-10 w-10 px-2 flex items-center justify-center rounded-md bg-dracula-line hover:bg-dracula-cyan disabled:hover:bg-dracula-line text-dracula-cyan hover:text-dracula-line disabled:hover:text-dracula-cyan disabled:cursor-not-allowed transition ease-in-out duration-300',
    cardIcon: 'size-6 shrink-0',
  }
})

export const quantityVariants = tv({
  slots: {
    quantityContent: 'h-10 w-full max-w-32 flex items-center justify-center gap-2 rounded-md border border-dracula-line hover:border-dracula-white transition ease-in-out duration-300',
    quantityButton: 'px-2 hover:text-dracula-cyan disabled:hover:text-dracula-white disabled:cursor-not-allowed transition ease-in-out duration-300',
    quantityValue: 'w-full min-w-6 text-center text-lg font-medium bg-transparent focus:outline-none',
    quantityIcon: 'size-6 shrink-0',
  }
})

export const cartVariants = tv({
  slots: {
    cartContent: 'w-full flex flex-col xl:flex-row gap-16 xl:gap-8 py-16',
    cartRecord: 'w-full flex flex-col gap-8',
    cartSummary: 'w-full xl:max-w-lg flex flex-col gap-8',
    cartTitle: 'text-xl md:text-2xl font-medium uppercase',
    cartPanel: 'flex flex-col gap-6',
    cartWrapper: 'w-full flex flex-col gap-8 p-4 md:p-6 rounded-md border border-dracula-line bg-dracula-wrapper',
    cartHead: 'flex flex-col gap-2',
    cartSubtitle: 'text-xl font-medium',
    cartForm: 'grid md:grid-cols-3 gap-4',
    cartFormHidden: 'hidden md:block md:col-span-2',
    cartFormItem: 'h-12 relative col-span-1',
    cartFormItens: 'h-12 relative col-span-1 md:col-span-2',
    cartInput: 'w-full h-full px-4 rounded-md peer border border-dracula-line hover:border-dracula-white focus:border-dracula-cyan bg-transparent focus:outline-none invalid:border-dracula-red hover:invalid:border-dracula-red focus:invalid:border-dracula-red transition ease-in-out duration-300',
    cartLabel: 'absolute top-3 left-px px-4 font-medium bg-dracula-wrapper text-dracula-cyan peer-focus:text-dracula-cyan peer-placeholder-shown:text-dracula-line peer-invalid:text-dracula-red peer-focus:peer-invalid:text-dracula-red scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    cartError: 'absolute -bottom-2 right-2 px-4 bg-dracula-wrapper font-medium text-dracula-orange text-xs',
    cartPay: 'w-full flex items-center justify-center px-4 h-12 uppercase cursor-pointer rounded-md border border-dracula-cyan bg-transparent ui-checked:bg-dracula-cyan/5 hover:bg-dracula-cyan/5 ui-checked:text-dracula-cyan transition ease-in-out duration-300',
    cartOrder: 'flex flex-col divide-y divide-dracula-line -mt-4',
    cartOrderItem: 'flex items-center gap-2 md:gap-4 py-4',
    cartImage: 'w-12 md:w-16',
    cartInfo: 'w-full flex flex-col md:gap-1',
    cartBetween: 'flex justify-between gap-2',
    cartDescription: 'font-medium md:text-lg',
    cartAction: 'flex items-center justify-between gap-2',
    cartTrash: 'md:hover:text-dracula-red transition ease-in duration-300',
    cartIcon: 'size-4 shrink-0',
    cartConfirm: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan text-dracula-dark disabled:cursor-not-allowed disabled:active:scale-100 active:scale-95 transition ease-in-out duration-300',
  }
})

export const notifyVariants = tv({
  slots: {
    notifyContent: 'fixed inset-0 flex items-end sm:items-start px-4 py-6 md:p-6 z-10 pointer-events-none',
    notifyPanel: 'w-full flex flex-col items-center sm:items-end',
    notifyHead: 'w-full max-w-md flex items-center gap-2 px-2 py-4 md:p-4 rounded-md shadow-md bg-white',
    notifyTitle: 'text-sm md:text-base text-dracula-dark',
    notifyCoffee: 'font-medium',
    notifyIcon: 'size-6 shrink-0 text-dracula-green',
    notifyEnter: 'transform ease-out duration-300 transition',
    notifyFrom: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
    notifyEnterTo: 'translate-y-0 opacity-100 sm:translate-x-0',
    notifyLeave: 'transition ease-in duration-100',
    notifyLeaveFrom: 'opacity-100',
    notifyLeaveTo: 'opacity-0',
  }
})

export const modalVariants = tv({
  slots: {
    modalContent: 'relative z-10',
    modalBackdrop: 'fixed inset-0 bg-black/25',
    modalDialog: 'fixed inset-0 overflow-y-auto',
    modalInfo: 'flex min-h-full items-center justify-center text-center p-4',
    modalPanel: 'w-full max-w-xl flex flex-col items-center transform overflow-hidden rounded-md shadow-md bg-white p-6 align-middle transition-all',
    modalIcon: 'animate-bounce size-16 shrink-0 text-dracula-cyan',
    modalTitle: 'text-xl font-medium leading-6 text-dracula-dark mt-2',
    modalDescription: 'text-dracula-dark mt-4',
    modalSumary: 'flex flex-col gap-4 font-medium text-sm text-dracula-dark mt-10',
    modalAction: 'mt-10 w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan/75 hover:bg-dracula-cyan text-dracula-line transition ease-in-out duration-300',
    modalEnter: 'ease-out duration-300',
    modalFrom: 'opacity-0',
    modalEnterTo: 'opacity-100',
    modalLeave: 'ease-in duration-200',
    modalLeaveFrom: 'opacity-100',
    modalLeaveTo: 'opacity-0',
    modalChildEnter: 'ease-out duration-300',
    modalChildFrom: 'opacity-0 scale-95',
    modalChildEnterTo: 'opacity-100 scale-100',
    modalChildLeave: 'ease-in duration-200',
    modalChildLeaveFrom: 'opacity-100 scale-100',
    modalChildLeaveTo: 'opacity-0 scale-95',
  }
})