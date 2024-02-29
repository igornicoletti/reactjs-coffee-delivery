import { tv } from 'tailwind-variants'

export const variantsRoot = tv({
  slots: {
    layout: 'relative w-full h-full min-h-screen grid content-start overflow-x-hidden',
    container: 'w-full max-w-screen-2xl mx-auto px-6',
  }
})

export const variantsHeader = tv({
  slots: {
    header: 'w-full flex items-center justify-between py-8',
    headerTitle: 'text-2xl md:text-3xl font-semibold uppercase hover:text-dracula-cyan transition ease-in-out duration-300',
    headerCart: 'relative',
    headerButton: 'flex items-center justify-center p-2 rounded-md bg-dracula-line hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-line transition ease-in-out duration-300',
    headerIcon: 'size-6 shrink-0',
    headerBadge: 'absolute min-w-4 h-4 -top-2 -right-2',
    headerPing: 'animate-ping absolute w-full h-full rounded-full bg-dracula-cyan/50',
    headerQuantity: 'relative flex items-center justify-center text-xs font-semibold rounded-full min-w-4 h-4 border-2 border-dracula-cyan text-dracula-line bg-dracula-cyan',
  }
})

export const variantsHero = tv({
  slots: {
    hero: 'w-full flex flex-col xl:flex-row items-center justify-between gap-8 py-16',
    heroHead: 'w-full max-w-2xl flex flex-col gap-12',
    heroTitle: 'text-3xl md:text-5xl px-2 xl:px-0 font-medium text-center xl:text-left',
    heroSubtitle: 'max-w-lg text-xl md:text-3xl text-center xl:text-left mx-auto xl:mx-0',
    heroDescription: 'grid md:grid-cols-2 gap-8 md:mx-auto xl:mx-0 xl:pt-8',
    heroDescriptionItem: 'flex items-center gap-4 md:text-lg',
    heroImageMobile: 'w-full max-w-lg lg:max-w-xl md:hidden',
    heroImageDesk: 'w-full max-w-lg lg:max-w-xl hidden md:block',
    heroIcon: 'size-6 shrink-0 text-dracula-cyan',
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col gap-8 py-16',
    coffeeHead: 'w-full flex flex-col lg:flex-row justify-between gap-4',
    coffeeTitle: 'text-3xl font-medium uppercase',
    coffeeFilter: 'flex flex-wrap gap-x-6',
    coffeeCard: 'grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6',
  }
})

export const variantsFilter = tv({
  slots: {
    filter: 'text-sm font-medium uppercase p-2 hover:text-dracula-cyan transition ease-in-out duration-300',
  }
})

export const variantsCard = tv({
  slots: {
    card: 'group flex flex-col rounded-md odd:rounded-tr-3xl even:rounded-tl-3xl odd:rounded-bl-3xl even:rounded-br-3xl gap-6 p-4 pt-0 border border-dracula-line bg-dracula-wrapper shadow-md hover:shadow-xl transition ease-in-out duration-300',
    cardImage: 'group-hover:animate-spin w-32 mx-auto -mt-4',
    cardCategory: 'flex items-center justify-center gap-2',
    cardCategoryItem: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/5 text-dracula-cyan',
    cardBody: 'flex flex-col text-center gap-2',
    cardTitle: 'text-xl font-medium uppercase',
    cardSubtitle: 'px-4',
    cardFooter: 'flex items-end justify-between gap-2 pt-2 mt-auto',
    cardPrice: 'text-3xl',
    cardAction: 'flex items-center gap-2',
    cardGroup: 'h-10 w-full max-w-32 flex items-center justify-center rounded-md border border-dracula-line hover:border-dracula-white transition ease-in-out duration-300',
    cardButton: 'p-2 rounded-md hover:text-dracula-cyan transition ease-in-out duration-300',
    cardQuantity: 'w-full text-center text-lg font-medium bg-transparent focus:outline-none',
    cardCart: 'h-10 w-10 flex items-center justify-center rounded-md bg-dracula-line hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-line transition ease-in-out duration-300',
    cardIcon: 'size-6 shrink-0',
  }
})

export const variantsCheckout = tv({
  slots: {
    checkout: 'w-full flex flex-col xl:flex-row gap-16 xl:gap-8 py-16',
    checkRecord: 'w-full flex flex-col gap-8',
    checkSummary: 'w-full xl:max-w-lg flex flex-col gap-8',
    checkTitle: 'text-xl md:text-2xl font-medium uppercase',
    checkContent: 'flex flex-col gap-6',
    checkWrapper: 'w-full flex flex-col gap-12 p-4 md:p-6 rounded-md border border-dracula-line bg-dracula-wrapper',
    checkHead: 'flex flex-col gap-2',
    checkSubtitle: 'text-xl font-medium',
    checkForm: 'grid md:grid-cols-3 gap-4',
    checkFormHidden: 'hidden md:block md:col-span-2',
    checkFormItem: 'h-12 relative col-span-1',
    checkFormItens: 'h-12 relative col-span-1 md:col-span-2',
    checkInput: 'w-full h-full px-4 rounded-md peer border border-dracula-line hover:border-dracula-white focus:border-dracula-cyan bg-transparent focus:outline-none transition ease-in-out duration-300',
    checkLabel: 'absolute top-3 left-px px-4 font-medium bg-dracula-wrapper text-dracula-cyan peer-focus:text-dracula-cyan peer-placeholder-shown:text-dracula-line scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    checkPay: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md border border-dracula-cyan bg-transparent hover:bg-dracula-cyan text-dracula-white hover:text-dracula-line transition ease-in-out duration-300',
    checkOrder: 'flex flex-col divide-y divide-dracula-line -mt-4',
    checkOrderItem: 'flex items-center gap-4 py-4',
    checkImage: 'w-16 hidden md:block',
    checkInfo: 'w-full flex flex-col gap-1',
    checkBetween: 'flex justify-between gap-4',
    checkDescription: 'text-lg font-medium uppercase',
    checkAction: 'w-full max-w-28 flex items-center',
    checkButton: 'px-2 hover:text-dracula-cyan transition ease-in duration-300',
    checkTrash: 'hover:text-dracula-red transition ease-in duration-300',
    checkQuantity: 'w-full text-center text-lg font-medium bg-transparent focus:outline-none',
    checkIcon: 'size-5 shrink-0',
    checkConfirm: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan text-dracula-line hover:scale-95 active:scale-105 transition ease-in-out duration-300',
  }
})