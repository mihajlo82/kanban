import BoxTitle from "../boxTitle/BoxTitle";
import BoxBody from "../boxBody/BoxBody";
import Avatars from "../avatars/Avatar";
import { BoxSingleType } from "../../../types/cardSectionType";
import { useDispatch } from "react-redux";
import { addItemToQueueForDelete } from "../../../redux/slices/sectionsSlice";
import { useCallback } from "react";
import { TaskType } from "../../../types/sectionSliceType";

const BoxSingle = ({ task, isDraggable }: BoxSingleType) => {
  const dispatch = useDispatch();

  const {
    name,
    start_on,
    due_on,
    open_subtasks,
    comments_count,
    is_important,
    labelsAppended,
    assigneeAppended,
  } = task;

  const startToDragg = useCallback((item: TaskType) => {
    if (isDraggable) {
      dispatch(addItemToQueueForDelete(item));
    }
  }, []);
  return (
    <div className="flex flex-col pb-2">
      <div
        style={{ borderLeft: is_important ? "4px solid red" : "" }}
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group"
        draggable={isDraggable}
        onDragStart={() => startToDragg(task)}
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
