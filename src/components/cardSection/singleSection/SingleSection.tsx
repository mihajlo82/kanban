import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { SingleSectionProp } from "../../../types/singleSectionType";

const SingleSection = ({taskListItem}: SingleSectionProp ) => {
  const {
    id,
    name,
    open_tasks,
    completed_tasks,
    position,
    is_completed,
    is_trashed,
    tasksAppended
  } = taskListItem
  console.log('SSETION');
  console.log(taskListItem)
  return (
    <div className="flex flex-col flex-shrink-0 w-72">
        <TitleColumn name={name} tasksAppendedLength={tasksAppended.length}/>

        <div className="flex flex-col w-72 overflow-auto h-[70vh] pr-2">
          {tasksAppended.map(task => <BoxSingle task={task} />  )}
        </div>
      </div>
  )
}

export default SingleSection