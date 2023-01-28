import { useState } from "react";
import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { SingleSectionProp } from "../../../types/singleSectionType";
import AddTaskModal from "./modal/AddTaskModal";
import { addItemToQueueForDelete } from "../../../redux/slices/sectionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { StateTypes } from "../../../types/reducerType";
import { removeTask } from "../../../redux/slices/sectionsSlice";

const SingleSection = ({taskListItem}: SingleSectionProp ) => {
  const itemForDelete = useSelector((state:StateTypes) => state.sections.itemDragRemove);
  const dispatch = useDispatch();
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
  } = taskListItem;

  const allowDrop = (e:any) => e.preventDefault();

  const deleteItem = () => dispatch(removeTask(itemForDelete));
  return (
    <div className="flex flex-col  flex-shrink-0 w-72 h-[100%]">
        <TitleColumn taskListItem={taskListItem} name={name} tasksAppendedLength={tasksAppended.length} dispatch={dispatch} />

        <div className="flex flex-col w-72 overflow-auto pr-2">
          {tasksAppended.map(task => !task.is_completed &&  <BoxSingle isDraggable={true} key={task.id} task={task} /> )}
        </div>

        <button onClick={()=> setOpenAddTask(true)} type="button" className="font-bold text-blue-600">Add task</button>

        {openAddTask && <AddTaskModal taskListId={taskListItem.id} setOpenAddTask={setOpenAddTask} />}

        <div className='fixed bottom-10 right-10'>
           <div onDragOver={allowDrop} onDrop={deleteItem} className=' p-2 bg-[#ff00ff]'>TRASH</div>
        </div>
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