import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center text-dark',
    container: 'w-full max-w-screen-xl mx-auto px-2',
    content: 'flex flex-col items-center text-center',
    status: 'text-xl font-medium pb-2',
    title: 'text-3xl md:text-5xl font-medium pb-4',
    message: 'text-sm pb-8',
    back: 'text-xs uppercase',
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
    action: 'p-2 rounded-lg bg-dracula-cyan text-dark hover:scale-110 transition ease-in-out duration-200',
    cart: 'size-6',
  }
})

export const variantsIntro = tv({
  slots: {
    intro: 'w-full flex flex-col xl:flex-row items-center justify-between py-16 gap-16 xl:gap-32',
    layout: 'flex flex-col items-start gap-16',
    info: 'flex flex-col gap-8 text-center xl:text-left md:px-24 xl:px-0',
    day: 'text-3xl md:text-4xl lg:text-5xl font-semibold',
    time: 'text-xl md:text-2xl',
    list: 'grid md:grid-cols-2 gap-8 md:mx-auto xl:mx-0',
    item: 'flex items-center gap-4 text-lg',
    circle: 'text-dracula-cyan',
    icon: 'size-6',
    web: 'w-full max-w-xl hidden md:block',
    mobile: 'w-full max-w-xl mx-auto md:hidden',
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col py-16 gap-16',
    ours: 'text-3xl uppercase',
    wrapper: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
    card: 'flex flex-col rounded-tr-3xl rounded-bl-3xl gap-6 p-6 border border-dracula-line hover:border-dracula-cyan bg-dracula-line/10 hover:bg-dracula-line/25 transition ease-in-out duration-200',
    cup: 'w-32 h-32 mx-auto -mt-10',
    map: 'flex flex-wrap items-center justify-center gap-2',
    rank: 'text-xs uppercase px-3 py-1 rounded-full bg-dracula-cyan/10 text-dracula-cyan',
    description: 'flex flex-col text-center gap-2',
    expresso: 'text-xl font-semibold uppercase',
    subtitle: '',
    box: 'flex items-center justify-between gap-2 pt-4 mt-auto',
    price: 'text-3xl',
    amount: 'flex items-center gap-2',
    controller: 'flex items-center rounded-lg gap-2 border border-dracula-line',
    btn: 'p-2 rounded-lg hover:bg-dracula-cyan hover:text-dark transition ease-in-out duration-200',
    minusplus: 'size-6',
    cart: 'p-2 rounded-lg text-dracula-cyan bg-dracula-line hover:bg-dracula-cyan hover:text-dark transition ease-in-out duration-200',
    shopping: 'size-6',
  }
})