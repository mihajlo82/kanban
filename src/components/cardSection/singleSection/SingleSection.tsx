import { useState } from "react";
import TitleColumn from "../titleColumn/TitleColumn";
import BoxSingle from "../singleBox/BoxSingle";
import { SingleSectionProp } from "../../../types/singleSectionType";
import AddTaskModal from "./modal/AddTaskModal";
import { useDispatch } from "react-redux";
import { SingleSectionDefaultProp } from "../../../types/defaultProps/defaultProps";

const SingleSection = ({ taskListItem }: SingleSectionProp) => {
  const dispatch = useDispatch();
  const [openAddTask, setOpenAddTask] = useState<boolean>(false);

  const { name, tasksAppended } = taskListItem;
  return (
    <div className="flex flex-col  flex-shrink-0 w-72 h-[100%]">
      <TitleColumn
        taskListItem={taskListItem}
        name={name}
        tasksAppendedLength={
          [...tasksAppended.filter((task) => !task.is_completed)].length
        }
        dispatch={dispatch}
      />

      <div className="flex flex-col w-72 overflow-auto pr-2">
        {tasksAppended.map(
          (task) =>
            !task.is_completed && (
              <BoxSingle isDraggable={true} key={task.id} task={task} />
            )
        )}
      </div>

      <button
        onClick={() => setOpenAddTask(true)}
        type="button"
        className="font-bold text-blue-600"
      >
        Add task
      </button>

      {openAddTask && (
        <AddTaskModal
          taskListId={taskListItem.id}
          setOpenAddTask={setOpenAddTask}
        />
      )}
    </div>
  );
};

export default SingleSection;
SingleSection.defaultProps = SingleSectionDefaultProp;
