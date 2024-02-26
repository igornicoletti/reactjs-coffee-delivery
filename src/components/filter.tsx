import { FilterType } from '../type/filter'
import { variantsFilter } from '../styles/variants'

const { filter } = variantsFilter()

type FilterProps = {
  data: FilterType
}

export const Filter = ({ data }: FilterProps) => {
  return (
    <button className={filter()}>
      <span>{data.title}</span>
    </button>
  )
}