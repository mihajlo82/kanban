import BoxTitle from "../boxTitle/BoxTitle";
import BoxBody from "../boxBody/BoxBody";
import Avatars from "../avatars/Avatar";
import { BoxSingleType } from "../../../types/cardSectionType";
import { useDispatch, useSelector } from "react-redux";
import { StateTypes } from "../../../types/reducerType";
import { addItemToQueueForDelete } from "../../../redux/slices/sectionsSlice";
import { useCallback } from "react";
import { TaskType } from "../../../types/sectionSliceType";

const BoxSingle = ({ task, isDraggable }: BoxSingleType) => {
  const dispatch = useDispatch();
  const itemForDelete = useSelector((state:StateTypes) => state.sections.itemDragRemove)  // const taskListAll = useSelector(

  const {
    id,
    name,
    open_tasks,
    completed_tasks,
    position,
    is_completed,
  //  is_trashed,
    task_list_id,
    start_on,
    due_on,
    labels,
    open_subtasks,
    comments_count,
    assignee,
    is_important,
    labelsAppended,
    assigneeAppended,
  } = task; 

  const startToDragg = useCallback((item:TaskType) => {
    //window.alert(isDraggable)
    console.log('STARTED TO DRAG');
    console.log(item)
   if(isDraggable) {
    dispatch(addItemToQueueForDelete(item))
   }
  }, [])
  return (
    <div className="flex flex-col pb-2">
      <div
        style={{ borderLeft:  is_important ? '4px solid red' : '' }}
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group"
        draggable={isDraggable}
        onDragStart={()=> startToDragg(task)} 
      >
        <BoxTitle name={name} />
        <BoxBody
          labelsAppended={labelsAppended}
          comments_count={comments_count}
          open_subtasks={open_subtasks}
        />
        <Avatars
          start_on={start_on}
          due_on={due_on}
          assigneeAppended={assigneeAppended}
        />
      </div>
    </div>
  );
};

export default BoxSingle;
