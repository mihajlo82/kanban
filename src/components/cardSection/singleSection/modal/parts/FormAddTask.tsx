import NameAdd from "./NameAdd";
import Labels from "./Labels";
import Dates from "./Dates";
import Assignees from "./Assignees";
import useAddTaskReducer from "../useAddTaskReducer";
import { addNewTask } from "../../../../../redux/slices/sectionsSlice";
import { useDispatch } from "react-redux";
import { FormAddTaskProp } from "../../../../../types/singleSectionType";

const FormAddTask = ({ taskListId, setOpenAddTask }: FormAddTaskProp) => {
  const dispatch = useDispatch();
  const { stateCustomReducer, dispatchCustomReducer } = useAddTaskReducer({
    taskListId,
  });
  return (
    <div className="mt-5">
      <form>
        <div className="grid gap-y-4">
          <NameAdd dispatchCustomReducer={dispatchCustomReducer} />
          <Labels dispatchCustomReducer={dispatchCustomReducer} />
          <Dates dispatchCustomReducer={dispatchCustomReducer} />
          <Assignees dispatchCustomReducer={dispatchCustomReducer} />

          <button
            onClick={() => {
              dispatch(addNewTask(stateCustomReducer));
              setOpenAddTask(false);
            }}
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-blue-500 text-white text-sm"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddTask;
