import { tv } from 'tailwind-variants'

export const HeroVariants = tv({
  slots: {
    herocontent: 'w-full flex flex-col xl:flex-row items-center justify-between gap-8 py-16',
    herohead: 'w-full max-w-2xl flex flex-col gap-12',
    herotitle: 'max-w-md md:max-w-full text-3xl md:text-5xl px-2 xl:px-0 font-medium text-center xl:text-left mx-auto xl:mx-0',
    herosubtitle: 'max-w-md md:max-w-lg text-xl md:text-3xl text-center xl:text-left mx-auto xl:mx-0',
    herodescription: 'grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-8 pb-8 xl:pb-0 md:mx-auto xl:mx-0 xl:pt-8',
    heroitem: 'flex items-center gap-4 md:text-lg',
    heroimgmobile: 'w-full max-w-lg md:hidden mx-auto',
    heroimgdesk: 'w-full max-w-xl lg:max-w-xl xl:max-w-2xl hidden md:block',
    heroicon: 'size-6 shrink-0 text-in-cyan',
  }
})