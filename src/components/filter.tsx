import { FilterProps } from '../type/filter'
import { FilterVariants } from '../styles/variants'

const { filterContent } = FilterVariants()

type FilterType = {
  data: FilterProps
  handleFilter: (title: string) => void
}

export const Filter = ({ data, handleFilter }: FilterType) => {
  return (
    <button className={data.isActive ? filterContent({ active: true }) : filterContent()}
      onClick={() => handleFilter(data.title)}>
      <span>{data.title}</span>
    </button>
  )
}