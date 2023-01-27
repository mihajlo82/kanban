import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { SingleSectionProp } from "../../../types/singleSectionType";
import { useState } from "react";
import AddTaskModal from "./modal/AddTaskModal";

const SingleSection = ({taskListItem}: SingleSectionProp ) => {
  const [openAddTask, setOpenAddTask] = useState<boolean>(false);

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
    <div className="flex flex-col  flex-shrink-0 w-72 h-[100%]">
        <TitleColumn name={name} tasksAppendedLength={tasksAppended.length}/>

        <div className="flex flex-col w-72 overflow-auto pr-2">
          {tasksAppended.map(task => <BoxSingle key={task.id} task={task} /> )}
        </div>

        <button onClick={()=> setOpenAddTask(true)} type="button" className="text-blue-600">Add task</button>

        {openAddTask && <AddTaskModal taskListId={taskListItem.id} setOpenAddTask={setOpenAddTask} />}
        

    </div>
  )
}

export default SingleSection

SingleSection.defaultProps = {
    id: Math.ceil((Math.random() * 12346756) + 10),
    name: 'Completed',
    open_tasks: 0,
    completed_tasks: 0,
    position: Math.ceil((Math.random() * 1000200) + 10) ,
    is_completed: true,
    is_trashed: true,
    tasksAppended: [{id: Math.ceil((Math.random() * 1000200) + 10),  }]
}