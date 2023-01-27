import BoxTitle from "../boxTitle/BoxTitle";
import BoxBody from "../boxBody/BoxBody";
import Avatars from "../avatars/Avatar";
import { BoxSingleType } from "../../../types/cardSectionType";

const BoxSingle = ({ task }: BoxSingleType) => {
  const {
    id,
    name,
    open_tasks,
    completed_tasks,
    position,
    is_completed,
    is_trashed,
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
  console.log("box single");
  console.log(assigneeAppended);
  return (
    <div className="flex flex-col pb-2">
      <div
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group"
        draggable="true"
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
