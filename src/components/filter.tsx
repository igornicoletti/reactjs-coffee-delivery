import { FilterListProps } from '../type/filter'
import { variantsFilter } from '../styles/variants'

const { filter } = variantsFilter()

type FilterProps = {
  data: FilterListProps
  handleSelectedFilter: (filterId: string) => void
}

export const Filter = ({ data, handleSelectedFilter }: FilterProps) => {
  return (
    <button className={data.selected ? filter({ active: true }) : filter({ active: false })}
      onClick={() => handleSelectedFilter(data.filterId)}>
      <span>{data.title}</span>
    </button>
  )
}