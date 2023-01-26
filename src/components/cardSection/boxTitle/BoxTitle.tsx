import { BoxTitleType } from "../../../types/cardSectionType"

const BoxTitle = ({name}: BoxTitleType) => {
  return (
    <h4 className="mt-3 text-sm font-medium">{name}</h4>
  )
}

export default BoxTitle