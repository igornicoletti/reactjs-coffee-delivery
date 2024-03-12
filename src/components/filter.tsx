import { FilterProps } from '../type/filter'
import { variantsFilter } from '../styles/variants'

const { filter } = variantsFilter()

type FilterType = {
  data: FilterProps
  handleSelectedFilter: (filterId: string) => void
}

export const Filter = ({ data, handleSelectedFilter }: FilterType) => {
  return (
    <button className={data.isActive ? filter({ active: true }) : filter()}
      onClick={() => handleSelectedFilter(data.filterId)}>
      <span>{data.title}</span>
    </button>
  )
}