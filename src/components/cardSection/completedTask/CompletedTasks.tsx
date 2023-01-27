import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { TaskType } from "../../../types/sectionSliceType";
import { CompletedTasksProp } from "../../../types/cardSectionType";

const CompletedTasks = ({completedTasks}:CompletedTasksProp) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-72">
    <TitleColumn name={'Comleted'} tasksAppendedLength={15} />

    <div className="flex flex-col w-72 overflow-auto h-[70vh] pr-2">
     {completedTasks.length > 0 && completedTasks.map((task: TaskType) => <BoxSingle key={task.id} task={task} />)}
    </div>
</div>
  )
}

export default CompletedTasks