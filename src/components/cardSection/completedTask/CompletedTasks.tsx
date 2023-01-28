import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { TaskType } from "../../../types/sectionSliceType";
import { CompletedTasksProp } from "../../../types/cardSectionType";

const CompletedTasks = ({completedTasks, deletedSection}:CompletedTasksProp) => { 
  console.log("COMPL TASK");
  console.log(completedTasks)
  return (
    <div className="flex flex-col flex-shrink-0 w-72">
    <TitleColumn name={deletedSection ? 'Trashed' : 'Completed'} tasksAppendedLength={completedTasks.length} />

    <div className="flex flex-col w-72 overflow-auto h-[70vh] pr-2">
     {completedTasks.length > 0 && !deletedSection && completedTasks.map((task: TaskType) => <BoxSingle isDraggable={false} key={task.id} task={task} />)}

     {completedTasks.length > 0 && deletedSection && completedTasks.map((task: TaskType) => <BoxSingle isDraggable={false} key={task.id} task={task} />)}
    </div>
</div>
  )
}

export default CompletedTasks