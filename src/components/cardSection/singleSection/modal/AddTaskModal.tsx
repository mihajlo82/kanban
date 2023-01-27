import { addNewTask } from "../../../../redux/slices/sectionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { TaskType } from "../../../../types/sectionSliceType";
import useAddTaskReducer from "./useAddTaskReducer";
import { allLabelsInit, allUsers } from "../../../../service/get_data";

const AddTaskModal = ({ taskListId, setOpenAddTask }: any) => {
  const dispatch = useDispatch();
  const { stateCustomReducer, dispatchCustomReducer } = useAddTaskReducer({
    taskListId,
  });

  const addTask = () => {
    // const newTask: TaskType = {
    //     id: 12,
    //     name: 'Task about nothing',
    //     open_tasks: 10,
    //     completed_tasks: 5,
    //     position: 6,
    //     is_completed: false,
    //     is_trashed: false,
    //     task_list_id: taskListId,
    //     start_on: null,
    //     due_on: null,
    //     labels: [],
    //     open_subtasks: 11,
    //     comments_count: 12,
    //     assignee: [],
    //     is_important: false,
    //     labelsAppended: [{"id": 2, "color": "#F44336"}],
    //     assigneeAppended: [{
    //       "id": 1,
    //       "name": "John Smith",
    //       "avatar_url": "https://i.pravatar.cc/150?u=1"
    //     }]
    // }
    // dispatch(addNewTask(newTask))
  };

  return (
    <section className='w-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center mx-auto p-6"'>
      <div className="mt-7 bg-white  rounded-xl w-[500px] max-h-[525px] overflow-auto shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Add New Task
            </h1>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div className="flex flex-col items-start">
                  <label className="font-bold">Task name</label>
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                    required
                    aria-describedby="email-error"
                  />
                </div>

                <div className="flex items-center">
                  <p className="font-bold	">Choose a label: </p>
                  {allLabelsInit.map((label) => (
                    <div
                      className={`w-[10px] h-[10px] rounded-full ml-2`}
                      style={{ backgroundColor: label.color }}
                    />
                  ))}
                </div>

                <div className="w-full flex ">
                  <div className="flex flex-col items-start">
                    <label className="font-bold" htmlFor="">
                      Start date:
                    </label>
                    <input type="date" name="" id="" />
                  </div>

                  <div className="flex  flex-col items-start ml-5">
                    <label className="font-bold	" htmlFor="">
                      End date:
                    </label>
                    <input type="date" name="" id="" />
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <p className="font-bold">Assignees:</p>
                  <ul className="mt-2 max-h-[110px] overflow-auto">
                    {allUsers.map((user) => {
                      return (
                        <li className="flex" key={user.id}>
                          <img
                            className="h-[20px] w-[20px] rounded-full"
                            src={user.avatar_url}
                            alt={user.name}
                          />
                          <p className="ml-2">{user.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button
                  onClick={addTask}
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenAddTask(false)}
        className="w-screen fixed top-0 left-0 right-0 bottom-0 bg-[#616161] opacity-50"
      ></div>
    </section>
  );
};

export default AddTaskModal;
