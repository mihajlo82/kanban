import { allLabelsInit } from "../../../../../service/get_data";

const Labels = ({dispatchCustomReducer}:any) => {
    const addLabel = (label:any) =>  dispatchCustomReducer({type: 'ADD_LABEL', label: label});
  return (
    <div className="flex items-center">
        <p className="font-bold	">Choose a label: </p>
        {allLabelsInit.map((label) => (
        <div
            onClick={()=>addLabel(label)}
            className={`w-[10px] h-[10px] rounded-full ml-2`}
            style={{ backgroundColor: label.color }}
        />
        ))}
    </div>
  )
}

export default Labels