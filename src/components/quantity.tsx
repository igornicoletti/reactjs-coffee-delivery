import { ChangeEvent } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

import { QuantityVariants } from '../styles'

const { quantitycontent, quantitybutton, quantityvalue, quantityicon } = QuantityVariants()

type Props = {
  currentQuantity: number
  handleAddQuantity: () => void
  handleRemoveQuantity: () => void
  handleValidateQuantity: (event: ChangeEvent<HTMLInputElement>) => void
}

export const QuantityComponent = ({ currentQuantity, handleAddQuantity, handleRemoveQuantity, handleValidateQuantity }: Props) => {
  return (
    <div className={quantitycontent()}>
      <button className={quantitybutton()} onClick={handleRemoveQuantity} disabled={currentQuantity <= 1} type={'button'}>
        <MinusIcon className={quantityicon()} aria-hidden={true} />
      </button>
      <input className={quantityvalue()} onChange={handleValidateQuantity} value={currentQuantity} min={1} max={99} type={'number'} name={'quantity'} />
      <button className={quantitybutton()} onClick={handleAddQuantity} disabled={currentQuantity >= 99} type={'button'}>
        <PlusIcon className={quantityicon()} aria-hidden={true} />
      </button>
    </div>
  )
}