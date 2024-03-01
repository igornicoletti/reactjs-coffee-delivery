import { FilterListProps } from '../type/filter'
import { variantsFilter } from '../styles/variants'

const { filter } = variantsFilter()

type FilterProps = {
  data: FilterListProps
  handleSelectedFilter: (idCategory: string) => void
}

export const Filter = ({ data, handleSelectedFilter }: FilterProps) => {
  return (
    <button className={filter()} onClick={() => handleSelectedFilter(data.idCategory)}>
      <span>{data.title}</span>
    </button>
  )
}