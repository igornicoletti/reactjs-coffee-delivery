import { FilterProps } from '../type/filter'
import { FilterVariants } from '../styles/variants'

const { filterContent } = FilterVariants()

type FilterType = {
  data: FilterProps
  handleSelectedFilter: (filterId: string) => void
}

export const Filter = ({ data, handleSelectedFilter }: FilterType) => {
  return (
    <button className={data.isActive ? filterContent({ active: true }) : filterContent()}
      onClick={() => handleSelectedFilter(data.filterId)}>
      <span>{data.title}</span>
    </button>
  )
}