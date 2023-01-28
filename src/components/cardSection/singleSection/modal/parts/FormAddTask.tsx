import NameAdd from "./NameAdd";
import Labels from "./Labels";
import Dates from "./Dates";
import Assignees from "./Assignees";
import useAddTaskReducer from "../useAddTaskReducer";
import { addNewTask } from "../../../../../redux/slices/sectionsSlice";
import { useSelector, useDispatch } from "react-redux";

const FormAddTask = ({taskListId}:any) => {
    const dispatch = useDispatch();
    const { stateCustomReducer, dispatchCustomReducer } = useAddTaskReducer({ taskListId }); 
  return (
    <div className="mt-5">
        <form>
            <div className="grid gap-y-4">
                <NameAdd dispatchCustomReducer={dispatchCustomReducer} />
                <Labels dispatchCustomReducer={dispatchCustomReducer}  />
                <Dates dispatchCustomReducer={dispatchCustomReducer} /> 
                <Assignees dispatchCustomReducer={dispatchCustomReducer} />

                <button
                    onClick={()=>dispatch(addNewTask(stateCustomReducer))}
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                    Add
                </button>
            </div>
        </form>
  </div>
  )
}

export default FormAddTask