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
    headerTitle: 'text-3xl font-semibold uppercase hover:text-dracula-cyan transition ease-in-out duration-300',
    headerCart: 'relative',
    headerButton: 'flex items-center justify-center p-2 rounded-md border border-dracula-cyan text-dracula-line bg-dracula-cyan',
    headerIcon: 'size-7 shrink-0',
    headerBadge: 'absolute min-w-6 h-6 -top-3 -right-3',
    headerPing: 'animate-ping absolute w-full h-full rounded-full bg-dracula-cyan/50',
    headerQuantity: 'relative flex items-center justify-center text-sm font-semibold rounded-full min-w-6 h-6 px-1 border-2 border-dracula-cyan bg-dracula-line',
  }
})

export const variantsHero = tv({
  slots: {
    hero: 'w-full flex flex-col xl:flex-row items-center justify-between gap-16 py-16',
    heroHead: 'w-full max-w-2xl flex flex-col gap-8',
    heroTitle: 'text-3xl md:text-5xl font-medium text-center xl:text-left',
    heroSubtitle: 'text-xl md:text-2xl font-medium text-center xl:text-left',
    heroDescription: 'grid md:grid-cols-2 gap-8 md:mx-auto xl:mx-0 pt-8',
    heroDescriptionItem: 'flex items-center gap-4 text-lg font-medium',
    heroIcon: 'size-6 shrink-0 text-dracula-cyan',
    heroImage: 'w-full max-w-xl',
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col gap-16 py-16',
    coffeeHead: 'w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4',
    coffeeTitle: 'text-3xl font-medium uppercase',
    coffeeFilter: 'flex flex-wrap gap-x-4',
    coffeeCard: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  }
})

export const variantsFilter = tv({
  slots: {
    filter: 'font-medium uppercase p-2 hover:text-dracula-cyan transition ease-in-out duration-300',
  }
})

export const variantsCard = tv({
  slots: {
    card: 'flex flex-col rounded-md odd:rounded-tr-3xl even:rounded-tl-3xl odd:rounded-bl-3xl even:rounded-br-3xl gap-6 p-6 pt-0 border border-dracula-line bg-dracula-wrapper shadow-md hover:shadow-xl transition ease-in-out duration-300',
    cardImage: 'hover:animate-spin w-32 mx-auto -mt-4',
    cardCategory: 'flex items-center justify-center gap-2',
    cardCategoryItem: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/5 text-dracula-cyan',
    cardBody: 'flex flex-col text-center gap-2',
    cardTitle: 'text-xl font-medium uppercase',
    cardSubtitle: '',
    cardFooter: 'flex items-end justify-between gap-2 pt-2 mt-auto',
    cardPrice: 'text-3xl',
    cardAction: 'flex items-center gap-2',
    cardGroup: 'h-10 w-full max-w-28 flex items-center justify-center gap-2 rounded-md border border-dracula-line hover:border-dracula-cyan transition ease-in-out duration-300',
    cardButton: 'p-2 rounded-md hover:text-dracula-cyan transition ease-in-out duration-300',
    cardQuantity: 'w-full text-center text-lg font-medium bg-transparent focus:outline-none',
    cardCart: 'h-10 w-10 flex items-center justify-center rounded-md bg-dracula-line hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-line transition ease-in-out duration-300',
    cardIcon: 'size-6 shrink-0',
  }
})

export const variantsCheckoutNew = tv({
  slots: {
    checkout: 'w-full flex flex-col xl:flex-row gap-16 py-16',
    checkRecord: 'w-full flex flex-col gap-8',
    checkSummary: 'w-full max-w-xl flex flex-col gap-6',
  }
})

export const variantsCheckout = tv({
  slots: {
    checkout: 'w-full flex flex-col xl:flex-row py-16 gap-16 xl:gap-8',
    checkFill: 'w-full flex flex-col gap-6',
    checkOrder: 'w-full xl:max-w-lg flex flex-col gap-6',
    checkTitle: 'text-2xl font-medium uppercase',
    checkWrapper: 'flex flex-col gap-8',
    checkPanel: 'w-full flex flex-col gap-12 p-6 rounded-md border border-dracula-line bg-dracula-wrapper',
    checkHead: 'flex flex-col gap-1 text-center md:text-left -mt-0.5',
    checkLegend: 'text-dracula-cyan text-lg font-medium uppercase',
    checkDescript: '',
    checkForm: 'grid md:grid-cols-3 gap-6',
    checkLabel: 'h-12 relative col-span-1',
    checkLabels: 'h-12 relative col-span-1 md:col-span-2',
    checkLabeled: 'absolute top-3 left-px px-4 font-medium bg-dracula-wrapper text-dracula-cyan peer-focus:text-dracula-cyan peer-placeholder-shown:text-dracula-line scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    checkInput: 'w-full h-full px-4 rounded-md peer border border-dracula-line hover:border-dracula-white focus:border-dracula-cyan bg-transparent focus:outline-none transition ease-in-out duration-300',
    checkHidden: 'hidden md:block md:col-span-2',
    checkBtn: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-line focus:bg-dracula-cyan text-dracula-white focus:text-dracula-line hover:scale-105 active:scale-100 transition ease-in-out duration-300',
    checkSpec: 'flex flex-col divide-y divide-dracula-line -mt-4',
    checkSpecItem: 'flex items-center gap-4 py-4',
    checkImg: 'w-16 hidden md:block',
    checkGuide: 'w-full flex flex-col gap-1',
    checkCtt: 'flex justify-between gap-4',
    checkInfo: 'text-lg font-medium uppercase',
    checkBox: 'w-full max-w-28 flex items-center',
    checkAction: 'px-2 hover:text-dracula-cyan transition ease-in duration-300',
    checkTrash: 'hover:text-dracula-red transition ease-in duration-300',
    checkQuantity: 'w-full text-center text-lg font-medium bg-transparent focus:outline-none',
    checkConfirm: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan text-dracula-line hover:scale-105 active:scale-95 transition ease-in-out duration-300',
    checkIcon: 'size-5 shrink-0',
  }
})