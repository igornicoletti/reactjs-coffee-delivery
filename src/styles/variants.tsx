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
    base: 'relative h-full min-h-screen w-full grid content-start overflow-x-hidden',
    container: 'w-full max-w-screen-xl mx-auto px-4',
    content: 'flex flex-col items-start',
  }
})

export const variantsHeader = tv({
  slots: {
    base: 'relative w-full h-full min-h-screen grid content-start overflow-x-hidden',
    container: 'w-full max-w-screen-2xl mx-auto px-4',
    header: 'w-full flex items-center justify-between py-8',
    title: 'text-2xl md:text-3xl font-bold',
    checkout: 'p-2 rounded-lg bg-purple-500 text-white',
    shopping: 'h-6 w-6',
  }
})

export const variantsBanner = tv({
  slots: {
    banner: 'w-full flex flex-col xl:flex-row items-center justify-between py-16 gap-16',
    layout: 'flex flex-col items-start gap-16 max-w-2xl',
    info: 'flex flex-col gap-8 text-center xl:text-left',
    day: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    time: 'text-xl md:text-2xl',
    list: 'grid md:grid-cols-2 gap-6 md:mx-auto',
    item: 'flex items-center gap-4',
    circle: 'p-2 rounded-full bg-purple-500 text-white',
    icon: 'h-4 w-4',
    web: 'w-full max-w-xl hidden md:block',
    mobile: 'w-full max-w-xl mx-auto md:hidden'
  }
})

export const variantsCoffee = tv({
  slots: {
    coffee: 'w-full flex flex-col py-16 gap-16',
    ours: 'text-2xl md:text-3xl font-bold',
    wrapper: 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10',
    card: 'flex flex-col rounded-tr-3xl rounded-bl-3xl p-6 bg-slate-100',
    cup: 'w-32 h-32 mx-auto -mt-10',
    map: 'flex flex-wrap items-center justify-center gap-1 pt-4',
    rank: 'text-xs font-medium uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-500',
    description: 'flex flex-col text-center gap-2 pt-6',
    expresso: 'text-xl font-bold',
    subtitle: 'font-light',
    box: 'flex items-center justify-between gap-2 pt-10',
    price: 'text-2xl font-bold',
    amount: 'flex items-center gap-2',
    controller: 'flex items-center rounded-lg p-2 gap-4 bg-slate-200',
    btn: 'h-6 w-6 text-purple-500',
    cart: 'p-2 rounded-lg bg-purple-500 text-white',
    shopp: 'h-6 w-6'
  }
})