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
    logo: 'text-3xl font-semibold uppercase',
    action: 'relative p-2 rounded-lg bg-dracula-cyan hover:scale-110 transition ease-in-out duration-300',
    carticon: 'size-6 text-dracula-dark',
    badge: 'absolute flex items-center justify-center text-sm font-medium rounded-full min-w-6 h-6 px-2 -top-3 -right-3 bg-dracula-dark border border-dracula-cyan',
  }
})

export const variantsIntro = tv({
  slots: {
    intro: 'w-full flex flex-col xl:flex-row items-center justify-between py-16 gap-16 xl:gap-32',
    layout: 'flex flex-col items-start gap-16',
    info: 'flex flex-col gap-8 text-center xl:text-left md:px-24 xl:px-0',
    day: 'text-3xl md:text-4xl lg:text-5xl font-medium',
    time: 'text-xl md:text-2xl',
    list: 'grid md:grid-cols-2 gap-8 md:mx-auto xl:mx-0',
    item: 'flex items-center gap-4 text-lg',
    icon: 'size-6 text-dracula-cyan',
    web: 'w-full max-w-xl hidden md:block',
    mobile: 'w-full max-w-xl mx-auto md:hidden',
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col py-16 gap-16',
    header: 'flex flex-col lg:flex-row lg:items-center justify-between gap-8',
    ours: 'text-3xl font-medium uppercase',
    filters: 'flex flex-wrap gap-2',
    filter: 'text-sm font-medium uppercase px-4 py-2 rounded-full border border-dracula-cyan hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
    wrapper: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
    card: 'flex flex-col rounded-tr-3xl rounded-bl-3xl gap-6 p-6 border border-dracula-line hover:border-dracula-cyan bg-dracula-line/10 hover:bg-dracula-line/25 transition ease-in-out duration-300',
    cup: 'w-32 h-32 mx-auto -mt-10',
    map: 'flex items-center justify-center gap-2',
    rank: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/10 text-dracula-cyan',
    description: 'flex flex-col text-center gap-2',
    expresso: 'text-xl font-medium uppercase',
    subtitle: 'font-medium',
    box: 'flex items-center justify-between gap-2 pt-4 mt-auto',
    price: 'text-3xl',
    amount: 'flex items-center gap-2',
    controller: 'flex items-center rounded-lg gap-2 border border-dracula-line',
    btn: 'p-2 rounded-lg hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
    minusplus: 'size-6',
    cart: 'p-2 rounded-lg text-dracula-cyan bg-dracula-line hover:bg-dracula-cyan hover:text-dracula-dark transition ease-in-out duration-300',
    shopping: 'size-6',
  }
})