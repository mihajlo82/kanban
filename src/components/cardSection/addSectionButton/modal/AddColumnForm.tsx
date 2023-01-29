import { useState } from "react";
import { addListToAllTasks } from "../../../../redux/slices/sectionsSlice";
import nextId from "react-id-generator";
import { AddColumFormProp } from "../../../../types/cardSectionType";
import { TaskListType } from "../../../../types/sectionSliceType";
import { ADD_COLUMN_ALERT } from "../../../../constants/names";
import { AddColumFormDefaultProp } from "../../../../types/defaultProps/defaultProps";

const AddColumnForm = ({ dispatch, setOpenModal }: AddColumFormProp) => {
  const [colName, setColName] = useState<string>("");

  const addNewColumn = () => {
    if (colName?.trim().length <= 0 || colName?.trim().length > 999) {
      return window.alert(ADD_COLUMN_ALERT);
    }
    const data: TaskListType = {
      id: nextId(),
      name: colName,
      open_tasks: 0,
      completed_tasks: 0,
      position: 11,
      is_completed: false,
      is_trashed: false,
      tasksAppended: [],
    };

    dispatch(addListToAllTasks(data));
    setOpenModal(false);
  };
  return (
    <div className="mt-5">
      <form>
        <div className="grid gap-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold ml-1 mb-2 dark:text-white"
            >
              Column name
            </label>
            <div className="relative">
              <input
                onChange={(e) => setColName(e.target.value)}
                name="name"
                type="text"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm shadow-sm"
              />
            </div>
          </div>
          <button
            aria-label="Save column"
            onClick={addNewColumn}
            type="button"
            className="py-3 px-4 rounded-md font-semibold bg-blue-500 text-white text-sm"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddColumnForm;
AddColumnForm.defaultProps = AddColumFormDefaultProp;
