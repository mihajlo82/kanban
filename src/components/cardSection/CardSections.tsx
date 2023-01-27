import SingleSection from "./singleSection/SingleSection";
import { useSelector, useDispatch } from "react-redux";
import { StateTypes } from "../../types/reducerType";
import { TaskListType } from "../../types/sectionSliceType"; 
import CompletedTasks from "./completedTask/CompletedTasks";
import AddNewSectionBtn from "./addSectionButton/AddNewSectionBtn";

const CardSections = () => {
  const taskListAll = useSelector(
    (state: StateTypes) => state.sections.taskList
  );
  const completedTasks = useSelector(
    (state: StateTypes) => state.sections.completedTasks
  );

  const dispatch = useDispatch(); 

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="flex px-10 mt-4 space-x-6 overflow-auto pb-5  w-[98vw] h-[70vh]" >
        {taskListAll.length > 0 &&
          taskListAll.map(
            (taskListItem: TaskListType) =>
              !taskListItem.is_completed &&
              !taskListItem.is_trashed && (
                <SingleSection key={taskListItem.id} taskListItem={taskListItem} />
              )
          )}

        <AddNewSectionBtn dispatch={dispatch} />

        <CompletedTasks completedTasks={completedTasks} />
      </div>
    </div>
  );
};
export default CardSections;
