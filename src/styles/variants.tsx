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