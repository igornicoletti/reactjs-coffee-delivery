import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-6',
    content: 'flex flex-col items-center text-center gap-16 py-16',
    wrapper: 'flex flex-col gap-4',
    status: 'text-xl',
    title: 'text-3xl font-semibold',
    message: 'text-sm',
    back: 'flex items-center text-sm gap-2',
    icon: 'size-4',
  }
})

export const variantsBase = tv({
  slots: {
    base: 'relative w-full h-full min-h-screen grid content-start overflow-x-hidden',
    container: 'w-full max-w-screen-2xl mx-auto px-6',
  }
})

export const variantsNavbar = tv({
  slots: {
    navbar: 'w-full flex items-center justify-between py-8',
    navTtitle: 'text-3xl font-semibold uppercase hover:text-dracula-cyan transition ease-in-out duration-300',
    navCart: 'relative p-2 rounded border border-dracula-cyan bg-dracula-cyan active:scale-90 transition ease-in-out duration-300',
    navIcon: 'size-6 text-dracula-dark',
    navBadge: 'absolute flex items-center justify-center text-sm font-medium rounded-full min-w-6 h-6 px-2 -top-3 -right-3 bg-dracula-dark border border-dracula-cyan',
  }
})

export const variantsHero = tv({
  slots: {
    hero: 'w-full flex flex-col xl:flex-row items-center justify-between py-16 gap-16 xl:gap-32',
    heroLayout: 'flex flex-col items-start gap-16',
    heroHeading: 'flex flex-col gap-8 text-center xl:text-left md:px-24 xl:px-0',
    heroTitle: 'text-3xl md:text-4xl lg:text-5xl font-medium',
    heroSubtitle: 'text-xl md:text-2xl',
    heroMinor: 'w-full max-w-xl mx-auto md:hidden',
    heroSpecs: 'grid md:grid-cols-2 gap-8 md:mx-auto xl:mx-0',
    heroSpec: 'flex items-center gap-4 text-lg',
    heroIcon: 'size-6 text-dracula-cyan',
    heroBigger: 'w-full max-w-xl hidden md:block',
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col py-16 gap-16',
    cofLayout: 'flex flex-col lg:flex-row lg:items-center justify-between gap-8',
    cofTitle: 'text-3xl font-medium uppercase',
    cofFilters: 'flex flex-wrap gap-2',
    cofFilter: 'text-sm font-medium uppercase px-4 py-2 rounded-full border border-dracula-cyan hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
    cofCards: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
    cofCard: 'flex flex-col rounded-tr-3xl rounded-bl-3xl gap-6 p-6 border border-dracula-line hover:border-dracula-cyan bg-dracula-line/10 hover:bg-dracula-line/25 transition ease-in-out duration-300',
    cofCup: 'w-32 mx-auto -mt-10',
    cofRanks: 'flex items-center justify-center gap-2',
    cofRank: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/10 text-dracula-cyan',
    cofMain: 'flex flex-col text-center gap-2',
    cofName: 'text-xl font-medium uppercase',
    cofDescription: 'font-medium',
    cofInfo: 'flex items-center justify-between gap-2 pt-4 mt-auto',
    cofPrice: 'text-3xl',
    cofAction: 'flex items-center gap-2',
    cofController: 'flex items-center rounded gap-2 border border-dracula-line',
    cofBtn: 'p-2 rounded hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
    cofIcon: 'size-6',
    cofCart: 'p-2 rounded text-dracula-cyan bg-dracula-line hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
  }
})