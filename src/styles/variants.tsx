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
    headerCart: 'relative p-2 rounded-md border border-dracula-cyan bg-dracula-cyan active:scale-90 transition ease-in-out duration-300',
    headerIcon: 'size-6 shrink-0 text-dracula-line',
    headerBadge: 'absolute flex items-center justify-center text-sm font-medium rounded-full min-w-6 h-6 px-2 -top-3 -right-3 bg-dracula-dark border border-dracula-cyan',
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
    coffeeCard: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
  }
})

export const variantsFilter = tv({
  slots: {
    filter: 'font-medium uppercase p-2 hover:text-dracula-cyan transition ease-in-out duration-300',
  }
})

export const variantsCard = tv({
  slots: {
    card: 'flex flex-col rounded-md rounded-tr-3xl rounded-bl-3xl gap-6 p-4 border border-dracula-line hover:border-dracula-cyan bg-dracula-wrapper transition ease-in-out duration-300',
    cardImage: 'w-32 mx-auto -mt-10',
    cardHead: 'flex items-center justify-center gap-2',
    cardChip: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/5 text-dracula-cyan',
    cardBody: 'flex flex-col text-center gap-2',
    cardTitle: 'text-xl font-medium uppercase',
    cardSubtitle: 'font-medium',
    cardFooter: 'flex items-end justify-between gap-2 pt-4 mt-auto',
    cardPrice: 'text-3xl',
    cardAction: 'flex items-center gap-2',
    cardGroup: 'h-10 flex items-center justify-center gap-2 rounded-md border border-dracula-line',
    cardButton: 'p-2 rounded-md hover:text-dracula-cyan transition ease-in-out duration-300',
    cardAmount: 'text-lg font-medium',
    cardCart: 'h-10 w-10 flex items-center justify-center rounded-md bg-dracula-line hover:bg-dracula-cyan text-dracula-cyan hover:text-dracula-line transition ease-in-out duration-300',
    cardIcon: 'size-5 shrink-0',
  }
})

export const variantsCheckout = tv({
  slots: {
    checkout: 'w-full flex flex-col xl:flex-row py-16 gap-16 xl:gap-8',
    checkFill: 'w-full flex flex-col gap-6',
    checkOrder: 'w-full xl:max-w-lg flex flex-col gap-6',
    checkTitle: 'text-2xl font-medium uppercase',
    checkWrapper: 'flex flex-col gap-8',
    checkPanel: 'w-full flex flex-col gap-12 p-4 md:p-6 rounded-md border border-dracula-line bg-dracula-wrapper',
    checkHead: 'flex flex-col gap-1 text-center md:text-left -mt-0.5',
    checkLegend: 'text-lg font-medium uppercase',
    checkDescript: 'font-medium',
    checkForm: 'grid md:grid-cols-3 gap-6',
    checkLabel: 'relative col-span-1',
    checkLabels: 'relative col-span-1 md:col-span-2',
    checkLabeled: 'absolute -top-2 left-2 px-2 text-sm uppercase font-medium text-dracula-foreground peer-focus:text-dracula-cyan bg-dracula-wrapper transition ease-in-out duration-300',
    checkInput: 'w-full h-12 px-6 rounded-md peer border border-dracula-line focus:border-dracula-cyan bg-transparent focus:outline-none transition ease-in-out duration-300',
    checkHidden: 'hidden md:block md:col-span-2',
    checkBtn: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md border border-dracula-line bg-dracula-line hover:bg-dracula-cyan hover:text-dracula-line active:scale-90 transition ease-in-out duration-300',
    checkSpec: 'flex flex-col divide-y divide-dracula-line -mt-4',
    checkSpecItem: 'flex items-center gap-4 py-4',
    checkImg: 'w-16 hidden md:block',
    checkGuide: 'w-full flex flex-col gap-1',
    checkCtt: 'flex justify-between gap-4',
    checkInfo: 'text-lg font-medium uppercase',
    checkBox: 'flex items-center gap-6',
    checkAction: 'hover:text-dracula-cyan transition ease-in duration-300',
    checkTrash: 'hover:text-dracula-red transition ease-in duration-300',
    checkAmount: 'text-lg font-medium',
    checkConfirm: 'w-full flex items-center justify-center px-4 h-12 font-medium uppercase rounded-md bg-dracula-cyan text-dracula-line active:scale-90 transition ease-in-out duration-300',
    checkIcon: 'size-5 shrink-0',
  }
})