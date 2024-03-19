import { ChangeEvent } from 'react'
import { QuantityVariants } from '../styles/variants'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const { quantityContent, quantityButton, quantityValue, quantityIcon } = QuantityVariants()

type Props = {
  currentQuantity: number
  handleAddQuantity: () => void
  handleRemoveQuantity: () => void
  handleValidateQuantity: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Quantity = ({ currentQuantity, handleAddQuantity, handleRemoveQuantity, handleValidateQuantity }: Props) => {
  return (
    <div className={quantityContent()}>
      <button className={quantityButton()} onClick={handleRemoveQuantity} disabled={currentQuantity <= 1}>
        <MinusIcon className={quantityIcon()} aria-hidden='true' />
      </button>
      <input className={quantityValue()} onChange={handleValidateQuantity} value={currentQuantity} min={1} max={99} type='number' />
      <button className={quantityButton()} onClick={handleAddQuantity} disabled={currentQuantity >= 99}>
        <PlusIcon className={quantityIcon()} aria-hidden='true' />
      </button>
    </div>
  )
}