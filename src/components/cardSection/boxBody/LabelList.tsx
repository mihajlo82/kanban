import { LabelListProp } from '../../../types/cardSectionType'
import { labelsAppendedDefaultProp } from '../../../types/defaultProps/defaultProps';
import { LabelType } from '../../../types/sectionSliceType'

const LabelList = ({labelsAppended}: LabelListProp) => {
  return (
    <>
    {!!labelsAppended?.length && (
        <div className="relative flex items-center">
          {labelsAppended.map((label: LabelType) => (
            <div
              key={label.id}
              className={`w-[8px] h-[8px] rounded-full ml-1`}
              style={{ background: `${label.color}` }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default LabelList;
LabelList.defaultProps = labelsAppendedDefaultProp;