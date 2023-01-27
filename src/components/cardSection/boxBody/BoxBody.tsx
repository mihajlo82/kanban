import { BoxBodyProp } from '../../../types/cardSectionType'

const BoxBody = ({labelsAppended,comments_count, open_subtasks}: BoxBodyProp) => { 
  return (
    <div className="flex items-center w-full mt-3 mb-1 text-xs font-medium text-gray-400">

        {labelsAppended.length > 0 && <div className="relative flex items-center">
           {labelsAppended.map(label => <div key={label.id} className={`w-[8px] h-[8px] rounded-full ml-1`} style={{ background: `${label.color}` }} /> )}
        </div>}

       {open_subtasks > 0 && <div className="relative flex items-center ml-2">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#8E8E8E"><g><path d="M2.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm8.5 0v1H5v-1h6ZM2.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 6v1H5V6h6ZM2.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 2v1H5V2h6Z" /></g></g></g></svg>
            <span className="ml-1 leading-none">{open_subtasks}</span>
        </div> }

        {comments_count > 0 && <div className="relative flex items-center ml-4">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#8E8E8E"><g><path d="M12 2v8H3.998L1 12V2h11Zm-1 1H2v7.13L3.695 9H11V3ZM6 6v1H3V6h3Zm4-2v1H3V4h7Z"/></g></g></g></svg>
            <span className="ml-1 leading-none">{comments_count}</span>
        </div> }
    </div>
  )
}

export default BoxBody