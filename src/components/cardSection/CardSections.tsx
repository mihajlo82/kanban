import SingleSection from "./singleSection/SingleSection";
import { useSelector, useDispatch } from 'react-redux'; 
import { StateTypes } from "../../types/reducerType";
import { TaskListType } from "../../types/sectionSliceType";

const CardSections = () => {
  const taskListAll = useSelector((state:StateTypes) => state.sections.taskList);
  const dispatch = useDispatch();

  // console.log('todos');
  // console.log(taskListAll)

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {taskListAll.length > 0 &&  taskListAll.map((taskListItem:TaskListType) => <SingleSection taskListItem={taskListItem} /> )}
      </div>
    </div>
  );
};
export default CardSections;
