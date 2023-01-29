import { BoxTitleType } from "../../../types/cardSectionType"
import { BoxTitleDefaultProp } from "../../../types/defaultProps/defaultProps"

const BoxTitle = ({name}: BoxTitleType) => {
  return (
    <h4 className="mt-3 text-sm font-medium">{name}</h4>
  )
}

export default BoxTitle
BoxTitle.defaultProps = BoxTitleDefaultProp;