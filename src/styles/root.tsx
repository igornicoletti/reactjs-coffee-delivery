import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'relative w-full h-full min-h-screen grid content-start overflow-x-hidden',
    rootcontainer: 'w-full max-w-screen-2xl mx-auto px-6',
  }
})